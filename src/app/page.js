import BlogList from "../components/BlogList";
import Events from "@/components/events/Events";
import Hero from "@/components/Hero"
import {client} from '../lib/sanity'


export async function fetchLocations() {
  const query = `*[_type == "location"] {
    duration,
    city,
  } ` 
  const locations = await client.fetch(query);
  return locations;
}

export async function fetchYear() {
  const query = `*[_type == "year"]{
    tourRange,
    tourYear
  } ` 
  const year = await client.fetch(query);
  return year;
}

export default async function Home() {
  
  const data = await fetchLocations()
  const tourYear = await fetchYear()
  console.log(tourYear)

  return (
    <main className="">
    <Hero data={data}  year={tourYear}/>
     <Events />
      {/* <BlogList /> */}
      <div className='h-[4000px]'> </div>
    </main>
  );
}
