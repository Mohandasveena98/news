import { useEffect, useState } from "react";
// import Srcfilter from "./components/Srcfilter";
// import Newsrc from "./components/Newsrc";
import Newspage from "./Newspage";
import Newsfeed from "./Newsfeed";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        <nav className="bg-white p-4 shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-purple-700 text-xl font-bold">NEWS App</h1>

            <div className="hidden md:flex justify-center gap-4 text-purple-700 flex-grow">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/feed" className="hover:underline">
                Feed
              </Link>
            </div>

            <button
              className="md:hidden text-purple-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "X" : "Menu"}
            </button>
          </div>
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
            <Link
              to="/"
              className="block py-2 text-purple-700 hover:bg-purple-100 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Home
            </Link>
            <Link
              to="/feed"
              className="block py-2 text-purple-700 hover:bg-purple-100 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Feed
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Newspage />} />
          <Route path="/feed" element={<Newsfeed />} />
          <Route path="*" element={<Newsfeed />} />
        </Routes>
      </div>
    </Router>
  );
}
