import React from "react";
import '../styles/PersonCard.css';

function PersonCard({ name, drink, location, note, onInvite, image }) {
  return (
    <div className="person-card">
      {image && (
        <div
          onClick={onInvite}
          style={{
            width: '100%',
            height: 160,
            overflow: 'hidden',
            borderRadius: 8,
            cursor: 'pointer',
            marginBottom: 10,
          }}
        >
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.25s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      )}

      <h4>{name}</h4>
      <p className="drink">{drink}</p>
      <p className="location">{location}</p>
      <p className="note">{note}</p>
      <button className="invite-btn" onClick={onInvite}>
        Send Coffee Invite
      </button>
    </div>
  );
}

export default PersonCard;
