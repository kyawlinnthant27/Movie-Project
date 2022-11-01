import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getActor, base_url, getMovieByActor } from "../utils/tmdbApi";

const ProfileScreen = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: profileData,
  } = useQuery(["profile", id], () => getActor(id));

  const { data: movieList } = useQuery(["list", { id, page }], () =>
    getMovieByActor({ id, page })
  );

  console.log(movieList?.data?.results);
  return (
    <div>
      <div className="w-[200px] h-[100px]">
        <img
          src={`${base_url}${profileData?.data?.profile_path}`}
          alt="profile"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="font-bold text-3xl p-5 mb-5">{profileData?.data?.name}</h1>
      <p className="flex flex-col max-w-[300px] justify-between items-center">
        <span className="p-2 font-medium text-base">
          {profileData?.data?.biography || "No Biography"}
        </span>
      </p>
      {movieList?.data?.results?.map((item) => (
        <div className="w-full h-30 p-5 bg-gray-300 justify-center items-center">
          <h1>{item?.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProfileScreen;
