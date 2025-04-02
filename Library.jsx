import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Library.css";

export default function Library() {
  const [uploadedComics, setUploadedComics] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/api/comics")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Comics:", data);
        setUploadedComics(data || []);
      })
      .catch((err) => console.error("Error fetching uploaded comics:", err));
  }, []);

  const handleDelete = async (comicId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this comic?");
    if (!confirmDelete) return;

    try {
      
      const response = await fetch(`http://localhost:5000/api/comics/${comicId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Comic deleted successfully!");
        setUploadedComics(uploadedComics.filter((comic) => comic._id !== comicId));
      } else {
        alert("Failed to delete comic");
      }
    } catch (error) {
      console.error("Error deleting comic:", error);
    }
  };

  const comics = [
    {
      id: 1,
      title: "Comic1",
      cover: "/comic/comic1/cover.jpg",
      pages: ["/comic/comic1/page1.jpg", "/comic/comic1/page2.jpg", "/comic/comic1/page3.jpg"]
    },
    {
      id: 2,
      title: "Comic2",
      cover: "/comic/comic2/cover2.jpg",
      pages: ["/comic/comic2/page1.jpg", "/comic/comic2/page2.jpg", "/comic/comic2/page3.jpg"]
    },
    {
      id: 3,
      title: "Comic3",
      cover: "/comic/comic3/cover3.jpg",
      pages: ["/comic/comic3/page1.jpg", "/comic/comic2/page2.jpg", "/comic/comic2/page3.jpg"]
    },
    {
      id: 4,
      title: "Comic4",
      cover: "/comic/comic4/cover4.jpg",
      pages: ["/comic/comic4/page1.jpg", "/comic/comic2/page2.jpg", "/comic/comic2/page3.jpg"]
    }
  ];

  return (
    <div>
      <h1 className="comic-heading">Comic Library</h1>

      <h2 className="predefined-comics-heading">Predefined Comics</h2>
      <div className="library-grid">
        {comics.map((comic) => (
          <div key={comic.id} className="comic-card">
            <Link to={`/reader?comic=${comic.id}`}>
              <img src={comic.cover} alt={comic.title} />
              <h3>{comic.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="uploaded-comics-heading">User-Uploaded Comics</h2>
      <div className="library-grid">
        {uploadedComics.length > 0 ? (
          uploadedComics.map((comic) => (
            <div key={comic._id} className="comic-card">
              <Link to={`/reader?comic=${comic._id}`}>
                <img src={comic.coverUrl || "/default-cover.jpg"} alt={comic.title} />
                <h3>{comic.title}</h3>
              </Link>
              {comic._id ? (
                <button className="delete-button" onClick={() => handleDelete(comic._id)}>
                  Delete
                </button>
              ) : (
                <button className="delete-button disabled">Cannot Delete (No ID)</button>
              )}
            </div>
          ))
        ) : (
          <p>No user-uploaded comics yet. Upload yours now!</p>
        )}
      </div>
    </div>
  );
}
