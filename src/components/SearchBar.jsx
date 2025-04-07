import { useState } from "react";

const SearchBar = ({ onSearch, searchHistory, onHistorySelect }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          list="history"
        />
        <datalist id="history">
          {searchHistory.map((item, index) => (
            <option key={index} value={item} />
          ))}
        </datalist>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
      {searchHistory.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Recent searches:
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {searchHistory.slice(0, 5).map((item, index) => (
              <button
                key={index}
                onClick={() => onHistorySelect(item)}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
