import React from "react";
import "./TopComics.css";

const TopComics = () => {
  return (
    <div className="top-comics">
      <h1> Top comics of all times</h1>
  
      <div className="comics-grid">
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bvKOU_zfYYWvJPBXcRR37rIug7R6u82JCQ&s" alt="Comic 1" />
          <h3>Comic Title 1</h3>
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvrA_se4abL-JoI5le97RbkcP9zb4CjVSOA&s" alt="Comic 2" />
          <h3>Comic Title 2</h3>
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmKwjqFYDV4Z9FZzeEGKNitmPLPKhZH2wMw&s" alt="Comic 3" />
          <h3>Comic Title 3</h3>
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLOyVRD7KZhxMkKTqbB9ZEud9okzOJnSh5A&s" alt="Comic 4" />
          <h3>Comic Title 4</h3>
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVVh98lMkUwuQ2LNAAnGqXh0mDaUseJQwCg&s" alt="Comic 5" />
          <h3>Comic Title 5</h3>
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3Kh7uNGyPpOYnZDuzg370m0uxVqJSAJ2Yw&s" alt="Comic 6" />
          <h3>Comic Title 6</h3>
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVrBgRybtz7mz0TBr8x5HF126LtqSVY_qQw&s" alt="Comic 7" />
          <h3>Comic Title 7</h3>
          
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDEPvOrWeYWUd5aWfVenn9bf-r7DoicR2MzA&s" alt="Comic 8" />
          <h3>Comic Title 8</h3>
        </div>
        <div className="comic-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQky7U6TOQsaNwjg3WhDqAsdhVdc2nQgvpDSQ&s" alt="Comic 9" />
          <h3>Comic Title 9</h3>
        </div>
        
      </div>
    </div>
  );
};

export default TopComics;
