import { useState } from "react";
import { Profile } from "../../utils/utils.type";

const Card = ({ data }: { data: Omit<Profile, "gender" | "phone"> }) => {
  console.log("card Render");
  const [count, setCount] = useState(0);
  return (
    <div className="min-w-lg max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src={data.profilePhoto === "" ? undefined : data.profilePhoto}
        alt="profile image"
      />
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name || "Name "}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data.email}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {data.address}
      </p>
      <a
        // href=""
        onClick={() => setCount((count) => count + 1)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        -- {count}
      </a>
    </div>
  );
};

export default Card;
