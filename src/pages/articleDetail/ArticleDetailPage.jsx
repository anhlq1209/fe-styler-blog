import React from "react";

import MainLayout from "../../components/MainLayout";
import BreakCrumbs from "../../components/BreakCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPost from "./container/SuggestedPost";

const breakCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section
        className="
          container
          mx-auto
          max-w-5xl
          flex
          flex-col
          px-5
          py-5
          lg:flex-row
          lg:gap-x-5
          lg:items-start
        "
      >
        <article className="flex-1">
          <BreakCrumbs data={breakCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.Post1Image}
            alt="laptop"
          />
          <Link
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
            to="/blog?category=selectedCategory"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              ullam minima? Voluptates itaque ex repellat quas totam, laudantium
              ea harum cum architecto quia maxime aspernatur, nulla consequuntur
              enim esse deserunt! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nulla iste tempore nihil eos. Incidunt est
              asperiores porro inventore eos nihil velit aperiam voluptatibus
              cupiditate totam! Dolorum reprehenderit cupiditate rerum animi?
            </p>
          </div>
        </article>
        <SuggestedPost
          className="mt-8 lg:mt-0 lg:max-w-xs"
          header="Latest Article"
          posts={postsData}
          tags={tagsData}
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
