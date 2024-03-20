import Link from "next/link";
import { client, urlFor } from "../../lib/sanity";
import Image from "next/image";

export const revalidate = 30;

async function getPosts() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
     ...,
        title, 
        description,
        "currentSlug": slug.current,
        createdAt
      }`;
  const data = await client.fetch(query);
  return data;
}

const Blog = async () => {
  const data = await getPosts();
  return (
    <div>
      {data.map((post, index) => (
        <Link href={`/blog/${post.currentSlug}`} key={index}>
          <div>
            <div className="w-full mx-auto mt-8">
              <Image
                src={urlFor(post.mainImage.asset).url()}
                width={800}
                height={800}
                alt="title image"
                priority
                className="rounded-lg mt-8 block mx-auto"
              />
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.createdAt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
