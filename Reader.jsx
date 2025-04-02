import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Reader.css";

export default function Reader() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const comicId = Number(queryParams.get("comic")); 

  const [comic, setComic] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  const comics = [
    {
      id: 1,
      title: "Comic 1",
      pages: [
        "/comic/comic1/page1.jpg",
        "/comic/comic1/page2.jpg",
        "/comic/comic1/page3.jpg"
      ]
    },
    {
      id: 2,
      title: "Comic 2",
      pages: [
        "/comic/comic2/page1.jpg",
        "/comic/comic2/page2.jpg",
        "/comic/comic2/page3.jpg"
      ]
    }
  ];

  useEffect(() => {
    const foundComic = comics.find((c) => c.id === comicId);
    if (foundComic) {
      setComic(foundComic);
      setLoading(false);
    } else {
     
      fetch(`http://localhost:5000/api/comics/${comicId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch comic");
          return res.json();
        })
        .then((data) => {
          setComic(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching comic:", err);
          setError("Comic not found.");
          setLoading(false);
        });
    }
  }, [comicId]);

  if (loading) return <h1>Loading...</h1>;
  if (error || !comic) return <h1>{error || "Comic not found"}</h1>;

  return (
    <div className="reader">
      <h1>{comic.title}</h1>
      <img
        src={comic.pages[currentPage]}
        alt={`Page ${currentPage + 1}`}
        className="comic-page"
      />

      <div className="navigation">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === comic.pages.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
