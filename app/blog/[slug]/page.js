"use client";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import { Client, Databases, Query } from "appwrite";
import { useEffect, useState } from "react";

export default function BlogPage({ params }) {
  const [posts, setPosts] = useState();
  const { slug } = params;
  useEffect(() => {
    const client = new Client();
    client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("64ad05e142768fa53299");
    document.title = "Blogs";
    const databases = new Databases(client);
    const promise = databases.listDocuments(
      "64ad2d1092b0288e0df6",
      "64ad2d7be1381d851aef",
      [Query.equal("slug", slug)]
    );
    promise.then(
      function (response) {
        console.log("res", response.documents);

        setPosts(response.documents[0]);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);


  return (
    <>
      <Head>
        <title>{posts?.title}</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img
            src={posts?.image}
            alt={posts?.title}
            className="w-full h-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{posts?.title}</h1>
          <p className="text-gray-700" dangerouslySetInnerHTML={{__html:posts?.Content}}></p>
        </div>
      </div>
    </>
  );
}
