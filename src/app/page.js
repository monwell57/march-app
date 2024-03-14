import BlogList from "../components/BlogList";
import Events from "@/components/events/Events";
import Hero from "@/components/Hero";
import { client } from "../lib/sanity";
import { Player } from "@/components/Player";
import Albums from "@/components/albums/Albums";

export async function fetchLocations() {
  const query = `*[_type == "location"] {
    duration,
    city,
  } `;
  const locations = await client.fetch(query);
  return locations;
}

export async function fetchYear() {
  const query = `*[_type == "year"]{
    tourRange,
    tourYear
  } `;
  const year = await client.fetch(query);
  return year;
}
export async function fetchSong() {
  const query = ` *[_type == "featured"] {
    artist,
    featuresong,
    "trackName": track[0].name,
    "fileLocation": track[0].src.asset->url
  }`;
  const song = await client.fetch(query);
  return song;
}

export default async function Home() {
  const data = await fetchLocations();
  const tourYear = await fetchYear();
  const mainSong = await fetchSong();

  return (
    <main className="">
      <Hero data={data} year={tourYear} />
      <Player song={mainSong} />
      <Events />
      <Albums />
      {/* <BlogList /> */}
      <div className="h-[4000px]"> </div>
    </main>
  );
}
