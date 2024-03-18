import Link from "next/link";
import { client } from "../../lib/sanity";
import SectionHeader from "../SectionHeader";
import PostList from "./PostList";

export const revalidate = 30;

async function getPosts() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
    ...,
        title, 
        description,
        "currentSlug": slug.current,
        _createdAt
      }`;
  const data = await client.fetch(query);
  return data;
}

const Blog = async () => {
  const data = await getPosts();
  console.log("[Postpage]:", data);
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        <PostList posts={data} />
      </div>
      {/* {data.map((post, index) => (
        <Link href={`/blog/${post.currentSlug}`} key={index}>
          <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        </Link>
      ))} */}
    </section>
  );
};

export default Blog;
