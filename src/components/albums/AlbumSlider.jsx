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
              <div>
                <Image
                  src={urlFor(album.img).url()}
                  alt={album.name}
                  width={300}
                  height={300}
                />
              </div>
              <div>Track Container</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper>Thumb Slider</Swiper>
    </>
  );
};

export default AlbumSlider;
