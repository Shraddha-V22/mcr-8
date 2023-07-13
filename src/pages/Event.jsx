import React from "react";
import { useParams } from "react-router-dom";
import { useMeetUps } from "../contexts/EventProvider";
import RsvpModal from "../components/RsvpModal";

export default function Event() {
  const {
    eventsData: { events },
  } = useMeetUps();
  const { eventId } = useParams();

  const event = events?.find(({ id }) => id === eventId);

  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    eventThumbnail,
    additionalInformation,
    price,
  } = event;

  return (
    <section className="grid grid-cols-2 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="flex flex-col">
          Hosted By: <span>{hostedBy}</span>
        </p>
        <img src={eventThumbnail} alt="" className="max-w-[400px] rounded-md" />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Details: </h2>
          <p>{eventDescription}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Additional Information:</h2>
          <div>
            <p>
              <strong>Dress code: </strong>
              {additionalInformation.dressCode}
            </p>
            <p>
              <strong>Age restrictions: </strong>
              {additionalInformation.ageRestrictions}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Event tags:</h2>
          <div className="flex gap-2">
            {eventTags.map((tag) => (
              <p className="w-fit rounded-md bg-orange-600 px-2 py-1 capitalize text-white">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-auto flex flex-col gap-4">
        <div className="flex flex-col gap-2 rounded-md border bg-white p-4">
          <div>
            <p>{eventStartTime} to</p>
            <p>{eventEndTime}</p>
          </div>
          <div>
            <p>{location}</p>
            <p>{address}</p>
          </div>
          {isPaid && <p>₹{price}</p>}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Speakers: ({speakers.length})</h2>
          <div className="flex gap-4">
            {speakers.map((sp) => (
              <div className="flex h-[auto] w-fit flex-col items-center gap-1 rounded-md border p-4">
                <img
                  src={sp.image}
                  alt=""
                  className="h-[60px] w-[60px] rounded-full"
                />
                <div>
                  <h3>{sp.name}</h3>
                  <p>{sp.designation}</p>
                </div>
              </div>
            ))}
          </div>
          {!isPaid && <RsvpModal />}
        </div>
      </div>
    </section>
  );
}
