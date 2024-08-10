import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) return;

      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/events/getEvents/" + eventId
        );
        if (response.data.success) {
          setEvent(response.data.data.event);
          
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/events/getEvents/${eventId}`
      );
      if (response.data.success) {
        alert("Registered successfully!");
      }
    } catch (error) {
      
      alert("Failed to register for the event.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {event ? (
        <div>
          <h1 style={{ textAlign: "center" }}>{event.title}</h1>
          <img
            src={event.event_image}
            alt={event.title}
            style={{ width: "50%", height: "auto", borderRadius: "10px" }}
          />
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Description:</strong> {event.description}
          </p>
          <button
            onClick={handleRegister}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
}

export default EventDetails;
