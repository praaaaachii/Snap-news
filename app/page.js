"use client";

import React from "react";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import NewsCard from "@/Components/NewsCard";
import NavBar from "@/Components/NavBar";
import BallTriangle from "react-loading-icons/dist/esm/components/ball-triangle";

// defining api stuff
const newsAPIKey = "9de97eb485074374827886d2c683f1b1";
const newsApiLink = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${newsAPIKey}`;

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setNewsCategory] = useState("all");

  //use effect for api fetching
  useEffect(() => {
    const query = category === "all" ? "" : `&category=${category}`;

    //fetching the news data from api
    fetch(newsApiLink + query)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="min-h-screen flex flex-col justify-normal items-start bg-slate-200">
      <Head>
        <title>News App</title>
        <meta
          name="description"
          content="Simple news app built using next.js and tailwind css"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main>
        <NavBar category={category} setCategory={setNewsCategory} />
        {/* <div className="flex items-center justify-center w-full content-center"> */}
          <div className="mt-28 ml-28 grid grid-cols-4 overflow-x-auto gap-8 content-center w-full justify-center items-center">
            {loading ? (
              <div className="text-4xl ml-80 mt-64 w-full justify-center items-center text-red-900 flex">
                <BallTriangle/>
                <p className="ml-8">Loading...</p>
              </div>
            ) : news && news.length > 0 ? (
              news.map((article) => (
                <Link href={article.url} key={article.url}>
                  <NewsCard article={article} />
                </Link>
              ))
            ) : (
              <p>No news available for the selected category</p>
            )}
          </div>
        {/* </div> */}
      </main>
    </div>
  );
};

export default HomePage;
