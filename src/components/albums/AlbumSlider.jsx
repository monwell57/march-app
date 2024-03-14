"use client";

import { useState } from "react";

import useSWR from "swr";
import { AudioPlayer } from "react-audio-play";
import { Swiper, SwiperSlider } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const fetcher = (url) => fetch(url).then((res) => res.json());

const AlbumSlider = () => {
  return <div>AlbumSlider</div>;
};

export default AlbumSlider;
