import React from "react";
import { useEffect, useState } from "react";
import Chip from "./components/Chip";
import { Heart } from "lucide-react";

export default function Newsfeed() {
  let [read, setRead] = useState(false);
  let [author, setAuthor] = useState([]);
  let [source, setSource] = useState([]);
  let [categorie, setCategorie] = useState([]);
  let [news, setNews] = useState([]);
  let [no, setNo] = useState(0);
  let [datas, setDatas] = useState([]);
  const [liked, setLiked] = useState(false);
  const data = {
    id: 285124728,
    title:
      "RFK Jr has NFL star Aaron Rodgers' full support ahead of confirmation hearing",
    text: 'Robert F. Kennedy Jr. will face a Senate confirmation hearing on Wednesday on Capitol Hill as he looks to take over as President Donald Trump’s Health and Human Services secretary. New York Jets quarterback Aaron Rodgers has been one of the loudest and proudest supporters of Kennedy, as he has been entangled in the political process, starting with the initial bid for president. Kennedy broached Rodgers to be his running mate during the 2024 presidential election – a moment that was captured on the Netflix docuseries "Enigma." SIGN UP FOR TUBI AND STREAM SUPER BOWL LIX FOR FREE "Retire and go into politics or play two or three more years," he said. "I definitely envisioned a life without football, and it wasn’t scary. I felt comfort in being able to move on at some point. But I love football. I want to keep playing. And I hated the way last year went. There’s still some unfinished business in New Jersey." Still, Rodgers was strong in his support of Kennedy. He said on "The Pat McAfee Show" earlier this month that senators who were going to question Kennedy had better be ready. "Like, please, somebody try and get after him and just watch him absolutely mop the floor with any of these senators," Rodgers said. "You better come ready senators, come ready and try and see if you can pull one over on my boy, Bobby, because Bobby’s f------ smart, dude. And no notes, off the cuff, can handle his own pretty well, so excited for him to – and honestly so should everybody." CLICK HERE FOR MORE SPORTS COVERAGE ON FOXNEWS.COM Rodgers touched on Kennedy’s initiative to "Make America Healthy Again." The movement appeared to be kick-started this week when the Food and Drug Administration banned red food dye due to potential cancer risk. "Like, if you spend a minute researching ingredients in products in the states compared to overseas, it’s disgusting," the star quarterback said. "It’s disgusting what they allow here, the levels that they allow here, products that are terrible for you, products they know are carcinogenic. So it’s going to [be] as he’s doing a service to everybody if you just let him and get the hell out of the way and stop trying to label him as whatever the f--- they want to label him these days. "He just wants to make sure that everything that’s being given to our kids is safe, everything that we’re ingesting on a day-to-day basis is safe, and he’s going to ‘Make America Healthy Again’ or is going to freaking die trying." CLICK HERE TO GET THE FOX NEWS APP Rodgers has not made any more statements ahead of Kennedy’s hearing on Wednesday, but all signs indicate he will be watching. Follow Fox News Digital’s sports coverage on X, and subscribe to the Fox News Sports Huddle newsletter.',
    summary:
      "New York Jets star Aaron Rodgers has been in Robert F. Kennedy Jr.&apos;s corner for quite some time and has expressed support for his endeavor as Health and Human Services secretary.",
    url: "https://www.foxnews.com/sports/rfk-jr-has-nfl-star-aaron-rodgers-full-support-ahead-confirmation-hearing",
    image:
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/12/931/523/rfk-rodgers.jpg?ve=1&tl=1",
    video: null,
    publish_date: "2025-01-29 13:04:53",
    author: null,
  };
  useEffect(() => {
    let url =
      "https://api.worldnewsapi.com/search-news?api-key=f9430072c55e42db93574f1beed3d3e6&language=en";
    if (author.length != 0) {
      url = url + "&authors=" + author;
    }
    if (source.length != 0) {
      url = url + "&news-sources=" + source;
    }
    if (categorie.length != 0) {
      url = url + "&text=" + categorie;
    }
    console.log("url=> ", url);
    setNews(data);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.news[0]);
        setDatas(json.news);
        setNews(json.news[0]);
      });
  }, [author, source, categorie]);

  const nextClick = (event) => {
    event.stopPropagation(); // Stops event from propagating to parent elements
    console.log("Button Clicked");
    setNo(no++);
    setLiked(false);
    setNews(datas[no]);
    console.log(no);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <Chip title={"Author"} set={setAuthor} />
        <Chip title={"Source"} set={setSource} />
        <Chip title={"Category"} set={setCategorie} />
      </div>
      {news && (
        <div>
          <div className=" w-[95%] mx-auto flex flex-col md:flex-row h-auto md:h-96 mt-3">
            <div className="my-auto w-full md:w-1/2 p-4">
              <div>
                <div className="text-center text-gray-600 text-right">
                  {news.publish_date}
                </div>
              </div>
              <div className="text-center text-xl font-bold mt-2">
                {news.title}
              </div>

              <div className="text-justify mt-5">{news.summary}</div>
            </div>

            <div className="w-full md:w-1/2 text-white flex justify-center items-center p-4">
              <img src={news.image} />
            </div>
          </div>
          <div className="w-[95%] mx-auto">
            {read && <div className="text-justify mt-5">{news.text}</div>}
            <div className="flex justify-center">
              <div className="mr-2 mt-0.5">
                <button
                  onClick={() => setLiked(!liked)}
                  className="focus:outline-none text-right"
                >
                  <Heart
                    size={32} // Adjust icon size
                    className={`transition-colors  duration-300 ${
                      liked ? "text-purple-500" : "text-gray-400"
                    }`}
                    fill={liked ? "purple" : "none"} // Fill heart when liked
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => setRead(!read)}
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  {read ? " ↑" : " ↓"}
                </button>
              </div>
            </div>
            <div className="text-right">
              <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-3">
                <a href={news.url}> Visit Source</a>
              </button>
              <button
                onClick={nextClick}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-3 ml-3"
              >
                <a> Next</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
