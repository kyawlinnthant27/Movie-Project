import React from "react";
import { useParams } from "react-router-dom";

const ProfileScreen = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default ProfileScreen;
