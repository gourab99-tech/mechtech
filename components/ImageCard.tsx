import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoVerified } from "react-icons/go";
import { BsPlay } from "react-icons/bs";

import { Video } from "./../types";

interface IProps {
  post: Video;
  isShowingOnHome?: boolean;
}

const ImageCard: NextPage<IProps> = ({
  post: { caption, postedBy, video, _id, likes },
  isShowingOnHome,
}) => {
  if (!isShowingOnHome) {
    return (
      <div>
        <Link href={`/detail/${_id}`}>
          <img
            src={video.asset.url}
            className="w-[250px] md:w-full rounded-xl cursor-pointer"
          ></img>
        </Link>
        <div className="flex gap-2 -mt-8 items-center ml-4">
          <p className="text-white text-lg font-medium flex gap-1 items-center">
            <BsPlay className="text-2xl" />
            {likes?.length || 0}
          </p>
        </div>
        <Link href={`/detail/${_id}`}>
          <p className="mt-5 text-md text-gray-800 cursor-pointer">{caption}</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded ">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href={`/profile/${postedBy?._id}`}>
              <>
                <Image
                  width={62}
                  height={62}
                  className=" rounded-full"
                  src={postedBy?.image}
                  alt="user-profile"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href={`/profile/${postedBy?._id}`}>
              <div className="flex items-center gap-2">
                <p className="flex gap-2 items-center md:text-md font-bold text-primary">
                  {postedBy.userName}{" "}
                  <GoVerified className="text-blue-400 text-md" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block">
                  {postedBy.userName}
                </p>
              </div>
            </Link>
            <Link href={`/detail/${_id}`}>
              <p className="mt-2 font-normal">{caption}</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:ml-20 flex gap-4 relative">
        <div className="rounded-3xl">
          <Link href={`/detail/${_id}`}>
            <img
              src={video.asset.url}
              className="lg:w-[600px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
