import React from "react";
import Logo from "./Logo";
import { useMeetUps } from "../contexts/EventProvider";
import { EVENT } from "../utils/reducerTypes";

export default function Header() {
  const { dispatch } = useMeetUps();

  return (
    <div className="flex justify-between">
      <Logo />
      <div>
        <input
          className="border"
          type="texts"
          placeholder="Search Events by Name or Tags..."
          onChange={(e) =>
            dispatch({ type: EVENT.SEARCH, payload: e.target.value })
          }
        />
      </div>
    </div>
  );
}
