import { useEffect, useState } from "react";
import axios from "axios";
import { AnnouncementCard } from "./AnnouncementCard";

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  //   console.log(announcements);
  useEffect(() => {
    axios
      .get("https://vms-six.vercel.app/api/v1/announcements/admin")
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.data.announcements);
          setAnnouncements(response.data.data.announcements.reverse());
        } else {
          console.error("Error fetching announcements:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  return (
    <div className="space-x-4 space-y-3 h-fit flex flex-row flex-wrap ">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Announcements</h2>
      </div>

      {announcements?.map((announcement) => {
        return (
          <AnnouncementCard
            announcement={announcement}
            key={announcement._id}
          />
        );
      })}
    </div>
  );
}

export default Announcement;
