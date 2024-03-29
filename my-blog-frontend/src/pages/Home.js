import React from "react";

const Home = () => {
  return (
    <div className="mb-50 font-text-black ">
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900 animate-bounce">
        Welcome to my Blog!
      </h1>
      <img
        src="/images/welcome.jpg"
        alt="Girl in a jacket"
        width="500"
        height="600"
        className="animate-pulse"
      />
      <p className="mx-auto leading-relaxed text-base mb-4 font-bold animate-fadeIn">
        "Welcome the challenges. Look for the opportunities in every situation
        to learn and grow in wisdom." — Brian Tracy
      </p>

      <p className="font-bold animate-slideInUp">
        "We must welcome the future, remembering that soon it will be the past;
        and we must respect the past, remembering that it was once all that was
        humanly possible." — George Santayana
      </p>
    </div>
  );
};

export default Home;
