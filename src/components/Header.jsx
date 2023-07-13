import React from "react";
import Logo from "./Logo";
import { useMeetUps } from "../contexts/EventProvider";
import { EVENT } from "../utils/reducerTypes";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useMeetUps();

  const searchHandler = (e) => {
    if (location?.pathname !== "/") {
      navigate("/");
    }
    dispatch({ type: EVENT.SEARCH, payload: e.target.value });
  };

  return (
    <div className="flex justify-between px-4 py-2 shadow-lg">
      <Logo />
      <div>
        <input
          className="rounded-md border p-2 px-4 outline-none"
          type="texts"
          placeholder="Search Events by Name or Tags..."
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}
