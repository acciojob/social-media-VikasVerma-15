import React, { useState } from "react";
import { notifications } from "../data";

export default function Notifications() {
  const [list, setList] = useState([]);

  return (
    <div>
      <button className="button" onClick={() => setList(notifications)}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {list.map((n) => (
          <div key={n.id}>{n.message}</div>
        ))}
      </section>
    </div>
  );
}

