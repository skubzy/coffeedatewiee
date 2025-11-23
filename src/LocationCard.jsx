function LocationCard({ name, address, note }) {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  return (
    <div
      onClick={() => window.open(mapsUrl, "_blank")}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{name}</h3>
      <p>{address}</p>
      {note && <p>{note}</p>}
    </div>
  );
}

export default LocationCard;
