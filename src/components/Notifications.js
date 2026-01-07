import React, { useState } from "react";
import { notifications } from "../data";

export default function Notifications() {
  const [list, setList] = useState([]);

  return (
    <div>
      <button className="button" onClick={() => setList(notifications)}>
        Refresh Notifications
      </button>

      {list.map((n) => (
        <p key={n.id}>{n.message}</p>
      ))}
    </div>
  );
}
