import axios from "axios";
import React, { useState } from "react";

const ComicUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile)); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file!"); 

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    setLoading(true); 
    setError(""); 

    try {
     
      await axios.post("http://localhost:5000/api/comics", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Comic uploaded successfully!");
      setTitle(""); 
      setDescription(""); 
      setFile(null); 
      setPreview(null); 
    } catch (error) {
      console.error("Upload failed:", error);
      setError("Upload failed. Please try again."); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Upload Your Comic</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border"
        />
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*" 
          required
          className="w-full p-2 border"
        />
        {preview && <img src={preview} alt="Preview" className="w-40 h-40 object-cover" />}
        {error && <p className="text-red-500">{error}</p>} 
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading} 
        >
          {loading ? "Uploading..." : "Upload"} 
        </button>
      </form>
    </div>
  );
};

export default ComicUpload;
