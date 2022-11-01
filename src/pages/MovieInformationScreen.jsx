import React from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail, base_url } from "../utils/tmdbApi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MovieInformationScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    error,
    data: detail,
  } = useQuery(["movieDetail", id], () => getMovieDetail(id));

  if (isLoading)
    return <p className="h-full w-full absolute inset-0">Loading...</p>;

  console.log(detail?.data?.credits?.cast?.map((item) => item.character));

  const goToProfile = (castId) => {
    navigate(`/profile/${castId}`);
  };

  return (
    <div className="flex bg-slate-50 justify-center items-center flex-col max-w-[300px] pt-20 h-auto">
      <div key={detail?.data?.id} className="w-[200px] h-[100px] flex flex-col">
        <img
          src={`${base_url}${detail?.data?.backdrop_path}`}
          alt="cover"
          className="w-full h-full object-contain"
        />
        <h1 className="text-2xl font-medium text-black pb-5">
          {detail?.data?.title}
        </h1>
        <p className="font-base text-gray-500">{detail?.data?.overview}</p>
        <Link to="/">Close</Link>
      </div>

      <div className="w-50 h-30 p-5">
        {detail?.data?.credits?.cast?.map((item) => (
          <img
            onClick={() => goToProfile(item?.cast_id)}
            src={`${base_url}${item?.profile_path}`}
            alt="character"
            className="w-full h-full object-contain hover:opacity-50 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieInformationScreen;
