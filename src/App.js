import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import CoffeeShopCard from "./components/CoffeeShopCard";
import PersonCard from "./components/PersonCard";
import CafesPage from "./pages/CafesPage";
import PeoplePage from "./pages/PeoplePage";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import shopImage1 from "./assets/Screenshot 2025-11-22 182625.png";
import shopImage2 from "./assets/Screenshot 2025-11-22 182805.png";
import shopImage3 from "./assets/Screenshot 2025-11-22 182840.png";

import './App.css';

// Read Maps API key from env. Set REACT_APP_GOOGLE_MAPS_EMBED_KEY in your .env
const MAP_EMBED_KEY = process.env.REACT_APP_GOOGLE_MAPS_EMBED_KEY || process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

function HomePage() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      console.log("Location selected:", location);
    }
  };

  // Real coffee shop data with Google Maps integration
  const coffeeShops = [
    {
      id: 1,
      name: "Starbucks - Downtown",
      rating: 4.5,
      reviews: 230,
      distance: "2.1 km away",
      address: "123 Main Street, Downtown",
      tags: ["Cozy", "Study spot", "Patio"],
      googleMapsUrl: "https://www.google.com/maps/search/Starbucks+Downtown",
      image: shopImage1
    },
    {
      id: 2,
      name: "Local Brew Café",
      rating: 4.2,
      reviews: 156,
      distance: "1.2 km away",
      address: "456 Oak Avenue, Midtown",
      tags: ["Cozy", "Study spot", "Patio"],
      googleMapsUrl: "https://www.google.com/maps/search/Local+Brew+Café",
      image: shopImage2
    },
    {
      id: 3,
      name: "Artisan Coffee House",
      rating: 4.6,
      reviews: 315,
      distance: "3.5 km away",
      address: "789 Elm Street, Uptown",
      tags: ["Cozy", "Romantic", "Patio"],
      googleMapsUrl: "https://www.google.com/maps/search/Artisan+Coffee+House",
      image: shopImage3
    },
  ];

  // People data
  const people = [
    {
      id: 1,
      name: "Emma",
      drink: "Iced Mocha",
      location: "The Roastery",
      note: "Ideal coffee date: Chatting about: lol"
    },
    {
      id: 2,
      name: "Daniel",
      drink: "Flat White",
      location: "Cozy Corner",
      note: "Brainstorming our latest project ideas"
    },
    {
      id: 3,
      name: "Sophia",
      drink: "Matcha Latte",
      location: "The Roastery",
      note: "Laughing over bad coffee puns"
    },
  ];

  return (
    <div className="Coffee Dates">
      {/* Hero Section - Header + Location (Full Screen) */}
      <div className="hero-section">
        <div className="header-wrapper">
          <Header/>
        </div>
        
        {/* Location Search Section */}
         <div className="location-section">
           <h2 className="location-title">Where are we meeting?</h2>
                     
           <button className="location-btn" type="button" onClick={() => {
             // Try to use geolocation, fall back to input value
             if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition((pos) => {
                 const q = `${pos.coords.latitude},${pos.coords.longitude}`;
                 window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, '_blank');
               }, () => {
                 if (location && location.trim()) window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
                 else window.open('https://www.google.com/maps', '_blank');
               });
             } else {
               if (location && location.trim()) window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
               else window.open('https://www.google.com/maps', '_blank');
             }
           }}>Use my location</button>
                     
           <form onSubmit={handleLocationSubmit} className="search-form">
            <input
              type="text"
              placeholder="        Enter a city or area"
              value={location}
              onChange={handleLocationChange}
              className="search-input"
            />
            <button type="submit" className="search-btn">🔍</button>
          </form>
        </div>
      </div>

      {/* Coffee Shops Section */}
      <section className="coffee-shops-section">
        <div style={{  justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2>Nearby Coffee Shops</h2>
        </div>
        <div className="coffee-shops-grid">
          {coffeeShops.map((shop) => (
            <CoffeeShopCard
              key={shop.id}
              name={shop.name}
              rating={shop.rating}
              reviews={shop.reviews}
              distance={shop.distance}
              address={shop.address}
              tags={shop.tags}
              googleMapsUrl={shop.googleMapsUrl}
              image={shop.image}
              onSuggest={() => console.log(`Suggested: ${shop.name}`)}
            />
          ))}
        
        </div>
         <div style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' , marginTop: '20px' }}>
         <button onClick={() => navigate('/cafes')} style={{ background: '#6b4423', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>See All</button>
        </div>

      </section>

      {/* People Section */}
      <section className="people-section">
        <div style={{ justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2>People who want coffee near you</h2>
          <button onClick={() => navigate('/people')} style={{ background: '#6b4423', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>See All</button>
        </div>
        <div className="people-grid">
          {people.map((person) => (
            <PersonCard
              key={person.id}
              id={person.id}
              name={person.name}
              drink={person.drink}
              location={person.location}
              note={person.note}
              onInvite={() => navigate(`/chat/${person.id}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cafes" element={<CafesPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/chat/:personId" element={<ChatPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

  const defaultCenter = { lat: 45.4215, lng: -75.6998 };

  const openGoogleMaps = (query) => {
    if (query) {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
      return;
    }
    const url = `https://www.google.com/maps/search/?api=1&query=${defaultCenter.lat},${defaultCenter.lng}`;
    window.open(url, '_blank');
  };
export default App;
