import React from "react";

const NewsList = ({ news }) => {
  return (
    <div className="p-4">
      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.objectID}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.title || "No Title"}
            </a>
            <p className="text-gray-600">Author: {item.author || "Unknown"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
