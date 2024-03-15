"use client";

import { useState } from "react";

import useSWR from "swr";
import { AudioPlayer } from "react-audio-play";
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { fetchAlbum } from "@/app/page";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { calcLength } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const AlbumSlider = () => {
  const { data, error } = useSWR("/api/albums", fetchAlbum);

  if (error) return "Failed to fetch ";
  if (!data) return "loading...";
  return (
    <>
      <Swiper>
        {data.map((album) => {
          return (
            <SwiperSlide key={album._id} className="mb-12">
              <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden ">
                  <Image
                    src={urlFor(album.img).url()}
                    alt={album.name}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 w-full h-[500px]">
                  <div className="flex-1 flex flex-col xl:px-12">
                    {album.tracks.map((track) => (
                      <div key={track.name}>
                        <div>{track.name}</div>
                        <div>
                          <AudioPlayer
                            style={{
                              background: "transparent",
                              boxShadow: "none",
                              width: "100%",
                            }}
                            src={track.src}
                            loop
                            preload="none"
                            color="#fff"
                            volume={40}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col">
                {album.tracks.map((track, index) => (
                  <div key={index} className="flex items-center mt-4">
                    <p className="mr-4">{track.name}</p>
                    <audio controls>
                      <source src={track.src} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ))}
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper>Thumb Slider</Swiper>
    </>
  );
};

export default AlbumSlider;
