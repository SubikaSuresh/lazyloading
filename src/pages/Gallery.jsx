import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import sampleImage from "../assets/sample.png"; // Import the sample image
import "../styles/Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    setTimeout(() => {
      setImages(Array(6).fill(sampleImage)); // Load first 6 images
    }, 1000); // Simulating initial load
  }, []);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setImages((prev) => [...prev, ...Array(6).fill(sampleImage)]); // Add 6 more images on scroll
      }, 1000);
    }
  }, [inView]);

  return (
    <div className="gallery">
      {images.length === 0 ? (
        <div className="loading">Loading Images...</div>
      ) : (
        images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} loading="lazy" />
        ))
      )}
      <div ref={ref} className="loading">Loading more images...</div>
    </div>
  );
};

export default Gallery;
