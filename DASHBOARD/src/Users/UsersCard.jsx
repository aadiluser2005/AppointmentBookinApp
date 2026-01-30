import React from "react";

function UsersCard({
  userName,
  date,
  email,
  status,
  isHeader,
  block,
  activate,
}) {
  return (
    <div className={`userCard  ${isHeader ? "text-muted" : ""}`}>
      <div style={{ width: "70%" }} className={`${isHeader ? "" : "fs-5"}`}>
        {userName}
      </div>
      <div style={{ width: "120%" }}>{email}</div>
      <div style={{ width: "80%" }}>{date}</div>
      <div style={{ width: "80%" }}>
        {isHeader ? (
          status
        ) : status ? (
          <div className="activeCapsule">Active</div>
        ) : (
          <div className="inactiveCapsule">inactive</div>
        )}
      </div>
      <div style={{ width: "60%" }} onClick={status ? block : activate}>
        {isHeader ? (
          "Action"
        ) : status ? (
          <i
            class="fa-solid fa-lock"
            title="Block User"
            style={{ color: "red", fontSize: "1.35rem" }}
          ></i>
        ) : (
          <i
            class="fa-solid fa-lock-open"
            title="Unblock User"
            style={{ color: "rgba(62, 236, 39, 1)", fontSize: "1.35rem" }}
          ></i>
        )}
      </div>
    </div>
  );
}

export default UsersCard;
