import { ArrowUpRight } from "lucide-react";

export function EventCard({ event }) {
  return (
    <div className="flex max-w-2xl flex-col m-6  items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src={event.event_image}
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {event.title} <ArrowUpRight className="ml-2 h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">{event.description}</p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {event.date}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {event.time}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {event.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
