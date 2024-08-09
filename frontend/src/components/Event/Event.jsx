import { useEffect, useState } from "react";
import axios from "axios";
import { EventCard } from "./EventCard";
import { Link } from "react-router-dom";

function Event() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("https://vms-six.vercel.app/api/v1/events/getEvents")
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.data.events);
          setEvents(response.data.data.events.reverse());
        } else {
          console.error("Error fetching events:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div className="space-x-4 space-y-4 h-fit flex flex-row flex-wrap">
      {events?.map((event, key) => {
        return (
          <Link key={key} to={`/events/${event._id}`}>
            <EventCard event={event} />
          </Link>
        );
      })}
    </div>
  );
}

export default Event;
