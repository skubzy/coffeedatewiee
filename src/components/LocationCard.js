import react from "react";

function LocationSelector({ name, address, note }) {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;
    return (
    <div style={{ border: "1px solid #ddd", boderRadius: "10px", padding: "10px", margin: "10px " }}>
        <h3>{name}</h3>
        <p>{address}</p>
        {note && <p><em>{note}</em></p>}

        <button
        onClick={() => window.open(mapsUrl, "_blank")}
        style={{
          background: "#4285F4",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          marginTop: "8px",
        }}
      >
        Get Directions
      </button>
        
     </div>
  );
}
export default LocationSelector;