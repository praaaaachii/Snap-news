import React from "react";

// news categories
const categories = [
  "General",
  "Science",
  "Sports",
  "Technology",
  "Health",
  "Business",
  "Entertainment",
];

const NavBar = ({ category, setCategory }) => {
  return (
    <div className="flex justify-between pt-3 pb-1 mb-3 bg-slate-950 fixed w-screen drop-shadow-lg">
      <div className="ml-6">
        <div className="flex font-extrabold text-3xl text-gray-300">
          Snap News
        </div>
        <div className="text-sm text-gray-400">
          Read all your news in a snap
        </div>
      </div>
      <div className="mr-8 flex float-end">
        {categories.map((currentCategory) => (
          <button
            key={currentCategory}
            className={`${
              category == currentCategory
                ? "text-gray-200"
                : "text-gray-500 hover:text-gray-200"
            } px-4 py-2 text-lg font-medium`}
            onClick={() => setCategory(currentCategory)}
          >
            {currentCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
