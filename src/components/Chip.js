import { useState, useEffect } from "react";

export default function Chip(params) {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    params.set(chips);
    //setChips(...chips, params.ch);
  }, [chips]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeChip = (index) => {
    setChips(chips.filter((_, i) => i !== index));
    params.set(chips);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow">
      <div className="text-lg font-semibold mb-2">
        Customize feed by {params.title}
      </div>

      <div className="flex flex-wrap gap-2 p-2 border rounded">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center bg-purple-200 text-purple-700 px-3 py-1 rounded-full"
          >
            {chip}
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => removeChip(index)}
            >
              ✕
            </button>
          </div>
        ))}

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter"
          className="flex-1 p-1 outline-none"
        />
      </div>
    </div>
  );
}
