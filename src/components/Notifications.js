import React from "react";
import { useState } from "react";
import { notifications } from "../data";

export default function Notifications() {
  const [list, setList] = useState([]);

  return (
    <>
      <button className="button" onClick={() => setList(notifications)}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {list.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </section>
    </>
  );
}

