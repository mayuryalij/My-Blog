import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  // Check if articles is null or not an array
  if (!articles || !Array.isArray(articles)) {
    return null; // or return an error message, or any other appropriate action
  }

  return (
    <>
      {articles.map((article) => (
        <div className="p-4 md:w-1/2" key={article.id}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={article.thumbnail}
                alt="blog"
              />
            </Link>
            <div className="p-6">
              <Link to={`/article/${article.name}`}>
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {article.title}
                </h3>
              </Link>
              <p className="leading-relaxed mb-3">
                {article.content[0].substring(0, 115)}...
              </p>
              <div className="flex items-center flex-wrap">
                <Link
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  to={`/article/${article.name}`}
                >
                  Learn More
                </Link>
                <div className="justify-end flex-1 text-right">
                  {article.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
