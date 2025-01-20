import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GoogleMaps = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [vetClinics, setVetClinics] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyARLZY2L1jjZ8_MtPadHDfiSn98UPDenAI", // Replace with your API key
    libraries: ["places"], // Load the Places library
  });

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => console.error("Error fetching location: ", error),
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      const request = {
        location: currentLocation,
        radius: 5000, // Radius in meters
        type: "veterinary_care", // Type of place
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setVetClinics(results);
        } else {
          console.error("Places API error: ", status);
        }
      });
    }
  }, [currentLocation]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="title text-center mb-4">
        <h1 className="font-semibold text-2xl md:text-3xl mb-4 mt-32 tracking-wide">
          Find Nearby <span className="text-green-800">Vet Clinics</span>
        </h1>
      </div>

      <div className="paragraph text-center tracking-wider text-gray-600 mb-8">
        <p className="text-sm md:text-base">
          Locate Trusted Veterinary Services in your Area
        </p>
      </div>

      <div className="flex justify-center">
        <GoogleMap
          center={currentLocation || { lat: 0, lng: 0 }}
          zoom={currentLocation ? 14 : 2}
          mapContainerClassName="w-full max-w-4xl h-64 sm:h-96 border-0 rounded-lg shadow-md mb-24"
        >
          {currentLocation && <Marker position={currentLocation} label="You" />}
          {vetClinics.map((clinic, index) => (
            <Marker
              key={index}
              position={{
                lat: clinic.geometry.location.lat(),
                lng: clinic.geometry.location.lng(),
              }}
              title={clinic.name}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMaps;
