import React from "react";
import '../styles/CoffeeShopCard.css';

function CoffeeShopCard({ name, rating, reviews, distance, tags, onSuggest, address, googleMapsUrl, image }) {
  const handleMapClick = () => {
    if (googleMapsUrl) {
      window.open(googleMapsUrl, '_blank');
    }
  };

  const handleImageClick = () => {
    if (googleMapsUrl) {
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <div className="coffee-card">
      {image && (
        <div 
          onClick={handleImageClick}
          style={{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            borderRadius: '8px 8px 0 0',
            cursor: 'pointer',
            marginBottom: '12px'
          }}
        >
          <img 
            src={image} 
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              display: 'block'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      )}
      <div className="shop-header">
        <h3>{name}</h3>
        <div className="rating">
          <span className="stars">★★★★★</span>
          <span className="rating-number">{rating}</span>
        </div>
      </div>
      <p className="review-count">{reviews} reviews</p>
      <p className="distance">{distance} away</p>
      
      {address && (
        <p 
          className="address" 
          onClick={handleMapClick}
          style={{ 
            cursor: 'pointer', 
            color: '#050505ff', 
            marginBottom: '10px'
          }}
        >
          📍 {address}
        </p>
      )}
      
      <div className="tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>

        {googleMapsUrl && (
          <button 
            className="suggest-btn"
            onClick={handleMapClick}
            style={{
              background: '#f4b642ff',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '12px',
              flex: '1'
            }}
          >
            View on Maps
          </button>
        )}
      </div>
    </div>
  );
}

export default CoffeeShopCard;
