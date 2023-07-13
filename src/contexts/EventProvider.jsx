import { useReducer } from "react";
import { createContext } from "react";
import { eventReducer } from "../reducers/eventReducer";
import { meetups } from "../data/data";
import { useContext } from "react";
import { useMemo } from "react";

const EventContext = createContext();

const initialEvents = {
  events: [...meetups],
  searchText: "",
  filterBy: "",
};

export default function EventProvider({ children }) {
  const [eventsData, dispatch] = useReducer(eventReducer, initialEvents);

  const filteredData = useMemo(() => {
    let newData = [...meetups];
    if (eventsData.searchText) {
      return eventsData.events.filter(
        ({ title, eventTags }) =>
          title.toLowerCase().includes(eventsData.searchText.toLowerCase()) ||
          eventTags
            .join(",")
            .toLowerCase()
            .includes(eventsData.searchText.toLowerCase())
      );
    }
    if (eventsData.filterBy === "online") {
      newData = newData.filter(
        ({ eventType }) => eventType?.toLowerCase() === "online"
      );
    } else if (eventsData.filterBy === "offline") {
      newData = newData.filter(
        ({ eventType }) => eventType?.toLowerCase() === "offline"
      );
    }
    return newData;
  }, [eventsData]);

  return (
    <EventContext.Provider value={{ eventsData, filteredData, dispatch }}>
      {children}
    </EventContext.Provider>
  );
}

export const useMeetUps = () => useContext(EventContext);
