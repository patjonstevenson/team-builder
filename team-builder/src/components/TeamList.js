import React from "react";
import TeamMember from "./TeamMember";

function TeamList({ team }) {
  return team.map(member => <TeamMember {...member} />);
}

export default TeamList;
