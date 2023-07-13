import { EVENT } from "../utils/reducerTypes";

export const eventReducer = (state, { type, payload }) => {
  switch (type) {
    case EVENT.RSVP:
      return {
        ...state,
        events: state.events.map((ev) =>
          payload === ev.id ? { ...ev, rsvp: true } : ev
        ),
      };
    case EVENT.SEARCH:
      return {
        ...state,
        searchText: payload,
      };
    case EVENT.FILTER:
      return {
        ...state,
        filterBy: payload,
      };
    default:
      return state;
  }
};
