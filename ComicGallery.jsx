import axios from "axios";
import { useEffect, useState } from "react";

const ComicGallery = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/comics")
      .then(response => setComics(response.data))
      .catch(error => console.error("Error fetching comics:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Uploaded Comics</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {comics.map((comic) => (
          <div key={comic._id} className="border p-2 rounded-lg">
            <img src={comic.fileUrl} alt={comic.title} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-bold">{comic.title}</h3>
            <p>{comic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicGallery;
