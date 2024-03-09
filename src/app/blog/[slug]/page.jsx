import Image from "next/image";
import { client, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;

async function getData(slug) {
  const query = `*[_type == 'post' && slug.current == "${slug}"] {
    "currentSlug": slug.current,
      title,
    mainImage,
      description,
      body,
      _createdAt
  } [0]
        
    `;
  const data = await client.fetch(query);
  return data;
}

async function BlogArticle({ params }) {
  const data = await getData(params.slug);
  console.log(data);
  return (
    <div className="min-w-full mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8">{data.title}</h1>
      <div className="w-full mx-auto mt-8">
        <Image
          src={urlFor(data.mainImage).url()}
          width={800}
          height={800}
          alt="title image"
          priority
          className="rounded-lg mt-8 block mx-auto"
        />
      </div>
      <div className="mt-8 mx-auto prose prose-headings:text-white prose-lg text-white prose-a:text-yellow-200">
        <PortableText value={data.body} onMissingComponent={false} />
      </div>
    </div>
  );
}

export default BlogArticle;
