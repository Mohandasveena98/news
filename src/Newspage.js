import { useEffect, useState } from "react";
import Srcfilter from "./components/Srcfilter";
import Newsrc from "./components/Newsrc";
import "./styles.css";

export default function Newspage() {
  let [search, setSearch] = useState("");
  let [source, setSource] = useState("");
  let [categories, setCategories] = useState([]);
  let [date, setDate] = useState("");
  let [datas, setDatas] = useState();

  useEffect(() => {
    const formatDate = (date) => {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Add leading zero for single digits
      const day = d.getDate().toString().padStart(2, "0"); // Add leading zero for single digits
      return `${year}-${month}-${day}`;
    };
    const previousDay = new Date(new Date());
    previousDay.setDate(new Date().getDate() - 1); // Subtract one day
    const formatted = formatDate(previousDay);
    console.log("Previous Day's Date:", formatted);
    setDatas(data);
    console.log("data :", datas);
    fetch(
      "https://api.worldnewsapi.com/top-news?api-key=f9430072c55e42db93574f1beed3d3e6&source-country=us&language=en&date=" +
        formatted
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.top_news[0].news);
        setDatas(json.top_news[0].news);
      });
    //console.log(process.env.API_KEY);
    //   "https://api.mediastack.com/v1/news?access_key=548832914293a171a53ade3a4527f289&sources=cnn,bbc&date=2020-01-01&keywords=tennis"
    //console.log("the cat ", categories);
  }, []);
  function srcflr() {
    let url =
      "https://api.worldnewsapi.com/search-news?api-key=f9430072c55e42db93574f1beed3d3e6";
    if (search != "") {
      url = url + "&text=" + search;
      if (categories.length != 0) {
        url = url + "," + categories;
      }
    }
    if (search == "") {
      if (categories.length != 0) url = url + "&text=" + categories;
    }
    if (date != "") {
      url = url + "&earliest-publish-date=" + date;
    }
    if (source != "") {
      url = url + "&news-sources=" + source;
    }
    // if (categories != "") {
    //   url = url + "&categories=" + categories;
    // }
    console.log("url: " + url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.news);
        setDatas(json.news);
      });
  }
  let data = [
    {
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
    },
    {
      id: 285136074,
      title: "RFK Jr. Faces Confirmation Hearing",
      text: "President Donald Trump’s administration is gearing up for another round of confirmation battles.\n\nSo far, four of his nominees have cleared the confirmation process. Secretary of State Marco Rubio sailed through with unanimous bipartisan support.\n\nCIA Director John Ratcliffe and Department of Homeland Security Secretary Kristi Noem were also confirmed with relative ease.",
      summary:
        "Trump's nominee for Health and Human Services Secretary will appear for his first nomination hearing before the Senate Finance Committee.",
      url: "https://www.theepochtimes.com/us/rfk-jr-faces-confirmation-hearing-5800611",
      image:
        "https://img.theepochtimes.com/assets/uploads/2025/01/29/id5800592-RFK-Jr-GettyImages-2192993870-300x180.jpg",
      video: null,
      publish_date: "2025-01-29 13:22:55",
      author: null,
    },
    {
      id: 285136960,
      title:
        "RFK Jr. Set To Face Scrutiny From Dems And Republicans In Confirmation Hearing",
      text: "Robert F. Kennedy Jr., President Trump’s nominee to lead the Department of Health and Human Services, is facing questions from senators today in a confirmation hearing held by the Senate Finance Committee. The hearing will begin at 10:00 a.m. ET.Kennedy’s openly anti-vaccine stance, as well as his history of embracing and spreading conspiracy theories and disinformation, has sparked outrage from science and medical communities across the country. And his nomination has raised alarms among Democrats and some Republicans alike, with some Trump allies appalled that Kennedy — who has held a wide spectrum of positions on abortion, among other health care issues — is even being considered for a position that oversees many of the country’s health agencies, including the Food and Drug Administration and the Centers for Disease Control and Prevention.Kennedy is expected to be grilled on Wednesday on numerous topics, including his stances on vaccines, abortion, climate change and food and nutrition.We’re covering his hearing from Capitol Hill. Follow our live updates below:\n\nRobert F. Kennedy Jr., President Trump’s nominee to lead the Department of Health and Human Services, is facing questions from senators today in a confirmation hearing held by the Senate Finance Committee. The hearing will begin at 10:00 a.m. ET.Kennedy’s openly anti-vaccine stance, as well as his history of embracing and spreading conspiracy theories and disinformation, has sparked outrage from science and medical communities across the country. And his nomination has raised alarms among Democrats and some Republicans alike, with some Trump allies appalled that Kennedy — who has held a wide spectrum of positions on abortion, among other health care issues — is even being considered for a position that oversees many of the country’s health agencies, including the Food and Drug Administration and the Centers for Disease Control and Prevention.Kennedy is expected to be grilled on Wednesday on numerous topics, including his stances on vaccines, abortion, climate change and food and nutrition.We’re covering his hearing from Capitol Hill. Follow our live updates below",
      summary:
        "Robert F. Kennedy Jr., President Trump&#8217;s nominee to lead the Department of Health and Human Services, is facing questions from...",
      url: "https://talkingpointsmemo.com/live-blog/rfk-jr-set-to-face-scrutiny-from-dems-and-republicans-in-confirmation-hearing",
      image:
        "https://talkingpointsmemo.com/wp-content/uploads/2025/01/GettyImages-2188901885.jpg",
      video: null,
      publish_date: "2025-01-29 13:57:05",
      author: null,
    },
  ];

  return (
    <div>
      <Srcfilter
        setsearch={(e) => {
          setSearch(e.target.value);
        }}
        setsource={(e) => {
          setSource(e.target.value);
        }}
        setcategories={(e) => {
          setCategories(e);
        }}
        setdate={(e) => {
          setDate(e.target.value);
        }}
        search={search}
        source={source}
        categories={categories}
        date={date}
        submit={() => srcflr()}
      />
      {datas &&
        datas.map((item, id) => (
          // <li key={index}>{item}</li>
          <Newsrc key={id} data={item} />
        ))}
    </div>
  );
}
