import axios from "axios";
import { useState, useEffect } from "react";
import { CardComponent } from "./CardComponent";
import { ActivityIcon, CalendarIcon, DollarSignIcon, UsersIcon } from "./Icons";
import {
  LinechartChart,
  BarchartChart,
  PiechartChart,
} from "./ChartComponents";

export default function Dashboard() {
  const [donatedAmount, setDonatedAmount] = useState(0);
  const [totalVolunteers, setTotalVolunteers] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [eventData, setEventData] = useState([]);
  const [eventPieData, setEventPieData] = useState([]);
  const [eventLineData, setEventLineData] = useState([]);

  useEffect(() => {
    axios
      .get("https://vms-six.vercel.app/api/v1/dashboard/admin/getTotalDonatedAmount")
      .then((response) => {
        const totalAmount = response.data.data.totalAmount;
        setDonatedAmount(totalAmount);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the total donated amount:",
          error
        );
      });
  }, [donatedAmount]);

  useEffect(() => {
    axios
      .get("https://vms-six.vercel.app/api/v1/dashboard/admin/getTotalVolunteers")
      .then((response) => {
        const totalVolunteers = response.data.data.totalVolunteers;
        setTotalVolunteers(totalVolunteers);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the total volunteers",
          error
        );
      });
  }, [totalVolunteers]);

  useEffect(() => {
    axios
      .get("https://vms-six.vercel.app/api/v1/dashboard/admin/getTotalEvents")
      .then((response) => {
        const totalEvents = response.data.data.totalEvents;
        setTotalEvents(totalEvents);
      })
      .catch((error) => {
        console.error("There was an error fetching the total events", error);
      });
  }, [totalEvents]);

  useEffect(() => {
    axios
      .get(
        "https://vms-six.vercel.app/api/v1/dashboard/admin/getTotalHoursVolunteered"
      )
      .then((response) => {
        const totalHours = response.data.data.totalHoursVolunteered;
        setTotalHours(totalHours);
      })
      .catch((error) => {
        console.error("There was an error fetching the total events", error);
      });
  }, [totalHours]);

  //line chart
  useEffect(() => {
    axios
      .get(
        "https://vms-six.vercel.app/api/v1/dashboard/admin/getlastSixEventsUserCounts"
      )
      .then((response) => {
        const EventData = response.data.data;

        setEventLineData(EventData);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the last six months donation amount",
          error
        );
      });
  }, []);

  //bar chart
  useEffect(() => {
    axios
      .get(
        "https://vms-six.vercel.app/api/v1/dashboard/admin/getLastSixEventsUserCounts"
      )
      .then((response) => {
        const EventData = response.data.data;

        setEventData(EventData);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the last six events user counts",
          error
        );
      });
  }, []);

  // pie chart
  useEffect(() => {
    axios
      .get(
        "https://vms-six.vercel.app/api/v1/dashboard/admin/getUserHoursForPieChart"
      )
      .then((response) => {
        const EventData = response.data.data;
        setEventPieData(EventData);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the the volunteer contributions",
          error
        );
      });
  }, []);

  return (
    <div className="flex flex-col space-y-4 p-8 pt-6 md:space-y-0 md:gap-4 md:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CardComponent
          title="Total Donations"
          icon={DollarSignIcon}
          value={`₹${donatedAmount}`}
          description="Total amount donated"
        />
        <CardComponent
          title="Total Volunteers"
          icon={UsersIcon}
          value={totalVolunteers}
          description="Total volunteers"
        />
        <CardComponent
          title="Total Events"
          icon={CalendarIcon}
          value={totalEvents}
          description="Total events"
        />
        <CardComponent
          title="Total Active Hours"
          icon={ActivityIcon}
          value={totalHours}
          description="Total Hours volunteered"
        />
      </div>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-9">
        <div className="md:col-span-4 lg:col-span-3">
          <LinechartChart data={eventLineData} />
        </div>
        <div className="md:col-span-4 lg:col-span-3">
          <BarchartChart data={eventData} />
        </div>
        <div className="md:col-span-4 lg:col-span-3">
          <PiechartChart data={eventPieData} />
        </div>
      </div>
    </div>
  );
}
