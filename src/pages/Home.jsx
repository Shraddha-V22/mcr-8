import React from "react";
import { useMeetUps } from "../contexts/EventProvider";
import EventCard from "../components/EventCard";
import { EVENT } from "../utils/reducerTypes";

export default function Home() {
  const {
    eventsData: { events },
    filteredData,
    dispatch,
  } = useMeetUps();

  return (
    <section className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Meetup Events</h1>
        <div>
          <select
            name=""
            id=""
            onChange={(e) =>
              dispatch({ type: EVENT.FILTER, payload: e.target.value })
            }
          >
            <option value="">select event type</option>
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="both">both</option>
          </select>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {filteredData.map((e) => (
            <EventCard
              key={e.id}
              id={e.id}
              title={e.title}
              startTime={e.eventStartTime}
              image={e.eventThumbnail}
              eventType={e.eventType}
            />
          ))}
        </div>
      ) : (
        <p>No Event Found</p>
      )}
    </section>
  );
}
