import React from "react";

function TeamMember({ name, email, role }) {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <h4>{role}</h4>
      <h4>{email}</h4>
    </div>
  );
}

export default TeamMember;
