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

  const goToProfile = (castId) => {
    navigate(`/actors/${castId}`);
  };

  const getMovieTrailerVideoKey = (videosList) => {
    if (videosList && videosList.length > 0) {
      const trailers = videosList.filter(
        ({ type, official }) => type.toLowerCase() === "trailer" && official
      );
      return trailers.length > 0 ? trailers.at(-1).key : videosList.at(-1).key;
    }
    return null;
  };

  const trailerKey = getMovieTrailerVideoKey(detail?.data?.videos?.results);
  console.log(trailerKey);

  return (
    <div className="flex bg-slate-50 justify-center items-center flex-col justify-between">
      <div
        key={detail?.data?.id}
        className="w-[200px] h-[100px] m-10 flex flex-col"
      >
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

      <div className="p-5 flex flex-row scroll-m-1">
        {detail?.data?.credits?.cast?.map((item) => (
          <div key={item?.cast_id} className="my-10 w-[200px] h-[100px]">
            <img
              onClick={() => goToProfile(item?.id)}
              src={`${base_url}${item?.profile_path}`}
              alt="character"
              className="w-full h-full object-cover hover:opacity-10 cursor-pointer"
            />
          </div>
        ))}
      </div>
      {trailerKey && (
        <iframe
          autoPlay
          title="Trailer"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          allow="autoplay"
        />
      )}
    </div>
  );
};

export default MovieInformationScreen;
