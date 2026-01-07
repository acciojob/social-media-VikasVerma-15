import React, { useState } from "react";

export default function Notifications() {
  const [list, setList] = useState([]);

  return (
    <>
      <button className="button" onClick={() => setList(["One", "Two"])}>
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
