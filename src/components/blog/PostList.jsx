"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const PostList = ({ posts }) => {
  const firstThreePosts = posts.slice(0, 3);
  console.log(firstThreePosts.length);
  return (
    <div>
      <div>
        {firstThreePosts.map((post) => {
          console.log(post);
          const { _id, _createdAt, title, description } = post;
          return (
            <div>
              {" "}
              {new Date(_createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;

// body
// :
// (3) [{…}, {…}, {…}]
// currentSlug
// :
// "harbor-point-ice-fest"
// description
// :
// "Food truck eats from Shareef’s Grill Wraps, Fuzzies Burgers, and Lattimore Funnel Cake"
// mainImage
// :
// {_type: 'image', asset: {…}}
// slug
// :
// {current: 'harbor-point-ice-fest', _type: 'slug'}
// title
// :
// "Harbor Point Ice Fest"
// _createdAt
// :
// "2024-01-24T05:54:04Z"
// _id
// :
// "f2f1bf91-e869-4970-af29-ac2f19af7811"
// _rev
// :
// "YZDTfZCd9Sx4xq41jYthdz"
// _type
// :
// "post"
// _updatedAt
// :
// "2024-03-08T20:11:44Z"
