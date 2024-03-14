"use client";
import AlbumSlider from "./AlbumSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import SectionHeader from "../SectionHeader";

const Albums = () => {
  return (
    <section id="discgraphy">
      <div className="container mx-auto">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        <div>
          <AlbumSlider />
        </div>
      </div>
    </section>
  );
};

export default Albums;
