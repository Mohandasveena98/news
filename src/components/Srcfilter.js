import { useEffect, useState } from "react";

export default function Srcfilter(params) {
  //   let [search, setSearch] = useState("");
  //   let [source, setSource] = useState("");
  //   let [categories, setCategories] = useState("");
  //   let [date, setDate] = useState("");
  let [showflr, setshowflr] = useState(false);
  let [selectedOptions, setSelectedOptions] = useState([]);
  //   function add() {
  //     console.log(search + " " + source + " " + categories + " " + date);
  //   }
  const options = [
    { id: 1, label: "Business" },
    { id: 2, label: "Sports" },
    { id: 3, label: "Education" },
    { id: 4, label: "Politics" },
  ];

  const handleCheckboxChange = (event) => {
    console.log(selectedOptions);
    const value = event.target.value;
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(value)) {
        // If already selected, remove it
        params.setcategories(prevSelected.filter((option) => option !== value));
        return prevSelected.filter((option) => option !== value);
      } else {
        // If not selected, add it
        params.setcategories([...prevSelected, value]);
        return [...prevSelected, value];
      }
    });
  };
  return (
    <div>
      <div className="w-[95%] mt-3 box-border h-auto p-4 border-4 justify-self-center">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="search"
          type="text"
          value={params.search}
          onChange={(e) => {
            params.setsearch(e);
          }}
        />
        <div className="flex flex-wrap gap-3 mt-3">
          <button
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={params.submit}
          >
            Submit
          </button>
          <button
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={() => setshowflr(true)}
          >
            Filter
          </button>

          {params.categories.length != 0 && (
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="text-sm font-medium text-slate-700">
                Categories selected:
              </span>
              {params.categories.map((i, a) => (
                <li
                  key={a}
                  className="px-3 py-1 bg-gray-200 rounded-md text-sm"
                >
                  {i}
                </li>
              ))}
            </div>
          )}
          {params.source.length != 0 && (
            <span className="text-sm font-medium text-slate-700 mt-5">
              Source:
              <a className="px-3 py-1 bg-gray-200 rounded-md text-sm ml-3">
                {params.source}
              </a>
            </span>
          )}
        </div>
      </div>

      {showflr && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-lg bg-black/30">
          <div className="bg-white/100 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <button
              id="closeButton"
              className="absolute top-2 right-2 bg-purple-500 font-bold text-white rounded-full px-3 py-05"
              onClick={() => setshowflr(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-black">Filter</h2>
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-3"
              placeholder="Sources"
              type="text"
              value={params.source}
              onChange={(e) => {
                params.setsource(e);
              }}
            />
            <input
              className="cursor-not-allowed w-full bg-grey-900 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-3"
              placeholder="Categories Selected"
              type="text"
              value={params.categories}
              disabled
            />

            <div className="max-w-md mx-auto mt-3">
              <h2>Categories:</h2>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:max-w-lg mt-2">
                {options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <label className="text-gray-700 ">
                      <input
                        className="w-4 h-4"
                        type="checkbox"
                        value={option.label}
                        onChange={handleCheckboxChange}
                        checked={selectedOptions.includes(option.label)} // Check if option is selected
                      />
                      <a className="ml-3">{option.label}</a>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-3"
              type="date"
              value={params.date}
              onChange={(e) => {
                params.setdate(e);
              }}
            />
            <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-3"
              onClick={() => {
                setshowflr(false);
                params.submit();
              }}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
