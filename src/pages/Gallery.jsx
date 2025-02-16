import sampleImage from "../assets/sample.png"; 
import "../styles/Gallery.css";

const Gallery = () => {
    const images = new Array(15).fill(sampleImage);

  return (
    <div className="gallery">
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Sample ${index + 1}`} loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
