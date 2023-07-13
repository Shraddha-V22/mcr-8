import { useNavigate } from "react-router-dom";

export default function EventCard({ id, image, title, startTime, eventType }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/event/${id}`)}
      className="relative h-[250px] w-[200px] cursor-pointer"
    >
      <img
        src={image}
        alt=""
        className="h-[200px] w-[200px] rounded-md object-cover"
      />
      <div className="mt-1 flex flex-col">
        <p className="text-xs text-gray-500">{startTime}</p>
        <h2 className="font-semibold">{title}</h2>
      </div>
      <p className="absolute left-2 top-2 rounded-md bg-white px-2 py-1">
        {eventType}
      </p>
    </div>
  );
}
