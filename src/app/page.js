import BlogList from "../components/BlogList";
import Events from "@/components/events/Events";
import Hero from "@/components/Hero"
import {client} from '../lib/sanity'


export async function fetchLocations() {
  const query = `*[_type == "location"] {
    tourYear,
    duration,
    tourRange,
    city,
  } ` 
  const locations = await client.fetch(query);
  return locations;
}

export default async function Home() {
  
  const data = await fetchLocations()
  console.log(data)

  return (
    <main className="">
    <Hero data={data} />
     <Events />
      {/* <BlogList /> */}
      <div className='h-[4000px]'> </div>
    </main>
  );
}
