import React from "react";
// import { getEvents } from "../../lib/data";
import EventBox from "./EventBox";
import { client } from "@/lib/sanity";



    async function getEvents() {
      const query = `*[_type == 'event'] {
        _id,
        name,
        date,
        priceRange,
        location {
            city,
            country,
            venue
          }
        }     
        `;
      const data = await client.fetch(query);
      return data;
    }    

const Events = async () => {
  const events = await getEvents();
  console.log(events);
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;