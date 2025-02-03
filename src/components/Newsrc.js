export default function Newsrc(params) {
  function dateTime(t) {
    const dateObj = new Date(t); // Convert to Date object

    // Extract values in words
    const day = dateObj
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase(); // "Monday"
    const month = dateObj
      .toLocaleDateString("en-US", { month: "short" })
      .toUpperCase(); // "December"
    const date = dateObj.getDate(); // 25
    const year = dateObj.getFullYear(); // 2023
    return day + " " + month + " " + date + " " + year;
  }
  return (
    <div className=" w-[95%] mx-auto box-border border-2 flex flex-col md:flex-row h-auto md:h-96 mt-3 hover:bg-gray-300 hover:border-black">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 my-auto">
        <div className="text-center text-gray-600 text-right">
          {dateTime(params.data.publish_date)} | {params.data.author}
        </div>
        <div className="text-center text-xl font-bold mt-2">
          {params.data.title}
        </div>
        <div className="text-justify mt-5">{params.data.summary}</div>
        <div className="text-right">
          <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-3">
            <a href={params.data.url}> Read more</a>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 text-white flex justify-center items-center p-4 overflow-hidden">
        <img className="w-full h-full object-cover" src={params.data.image} />
      </div>
    </div>
  );
}
