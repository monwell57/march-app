import Link from "next/link";
import { client } from "../lib/sanity";
import React from "react";

export const revalidate = 30;

async function getPosts() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
        title, 
        description,
        "currentSlug": slug.current,
        _createdAt
      }`;
  const data = await client.fetch(query);
  return data;
}

const BlogList = async () => {
  const data = await getPosts();
  // console.log("[Postpage]:", data);
  return (
    <div>
      {data.map((post, index) => (
        <Link href={`/blog/${post.currentSlug}`} key={index}>
          <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
