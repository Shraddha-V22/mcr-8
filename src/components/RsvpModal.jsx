import { useState } from "react";
import { useMeetUps } from "../contexts/EventProvider";
import { EVENT } from "../utils/reducerTypes";

export default function RsvpModal({ isPaid }) {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [rsvped, setRsvped] = useState(false);

  const handleRSVP = () => {
    if (inputText.name || inputText.email) {
      setRsvped(true);
      setOpen(false);
    } else {
      setErrorMsg("Please fill all the details!");
    }
  };

  return (
    <section className="">
      <button disabled={rsvped} onClick={() => setOpen(true)}>
        {!rsvped ? "RSVP" : "Already RSVPed"}
      </button>
      {open && (
        <section className="fixed left-0 top-0 grid h-[100vh] w-[100vw] place-items-center bg-black/50">
          <div className="flex flex-col gap-4 rounded-md bg-white p-4">
            <div>
              <h1 className="text-lg font-semibold">Complete your RSVP</h1>
              <p>Fill in your personal information</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[60px_1fr]">
                <label htmlFor="">Name: </label>
                <input
                  type="text"
                  className="border outline-blue-500"
                  onChange={(e) =>
                    setInputText((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className="grid grid-cols-[60px_1fr]">
                <label htmlFor="">Email: </label>
                <input
                  type="email"
                  className="border outline-blue-500"
                  onChange={(e) =>
                    setInputText((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              {errorMsg && <p className="text-red-600">{errorMsg}</p>}
              {isPaid && <p>You have to make the payment at the venue</p>}
              <button onClick={handleRSVP} className="border">
                RSVP
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
