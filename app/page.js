"use client";

import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Client, Databases } from "appwrite";

export default function Home() {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64ad05e142768fa53299");
  useEffect(() => {
    {
      document.title = "Blogs";
      const databases = new Databases(client);
      const promise = databases.listDocuments(
        "64ad2d1092b0288e0df6",
        "64ad2d7be1381d851aef"
      );
      promise.then(
        function (response) {
          setPosts(response.documents);
        },
        function (error) {
          console.log(error);
        }
      );
    }
  }, []);

  const [posts, setPosts] = useState([
    {
      title: "Sample Blog Post 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFx1pD-5y61mO3S-e1grpCuf24c6zMIGanYrbzcIwB&s",
      slug: "sample-blog-post-1",
    },
    {
      title: "Sample Blog Post 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFx1pD-5y61mO3S-e1grpCuf24c6zMIGanYrbzcIwB&s",
      slug: "sample-blog-post-2",
    },
  ]);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto mt-20 sm:px-4 md:px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-teal-700  shadow-lg w-72 flex flex-col mx-auto"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto mb-0"
              />
              <div className="p-4 flex-grow text-gray-100">
                <h1 className="text-4xl font-semibold mb-2 line-clamp-3">
                  {post.title}
                </h1>
                <p className="text-medium">{post.metadesc}...</p>
                <div className="text-gray-700 ">{post.content}</div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mx-auto px-4 py-2 my-2 bg-gray-800 text-gray-100 shadow-sm hover:bg-teal-900"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
