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
    eventEndDate,
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
    <section className="grid grid-cols-2">
      <div>
        <h1>{title}</h1>
        <p>
          Hosted By: <span>{hostedBy}</span>
        </p>
        <img src={eventThumbnail} alt="" />
        <div>
          <h2>Details: </h2>
          <p>{eventDescription}</p>
        </div>
        <div>
          <h2>Additional Information:</h2>
          <p>
            <strong>Dress code: </strong>
            {additionalInformation.dressCode}
          </p>
          <p>
            <strong>Age restrictions: </strong>
            {additionalInformation.ageRestriction}
          </p>
        </div>
        <div>
          <h2>Event tags:</h2>
          <p>{eventTags.join(" ,")}</p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>{eventStartTime} to</p>
            <p>{eventEndDate}</p>
          </div>
          <div>
            <p>{location}</p>
            <p>{address}</p>
          </div>
          {isPaid && <p>₹{price}</p>}
        </div>
        <div>
          <h2>Speakers: {speakers.length}</h2>
          <div>
            {speakers.map((sp) => (
              <div className="h-[auto] w-[auto]">
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
          {/* <button className="">RSVP</button> */}
          <RsvpModal />
        </div>
      </div>
    </section>
  );
}
