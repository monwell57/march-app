import BlogList from "../components/BlogList";
import Events from "@/components/events/Events";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Events />
      <BlogList />
      
    </main>
  );
}
