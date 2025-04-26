import { useState } from "react";
import { useGitHub } from "./hooks/useGitHub";
import { useLocalStorage } from "./hooks/useLocalStorage";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import Repositories from "./components/Repositories";
import LoadingSpinner from "./components/LoadingSpinner";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [username, setUsername] = useState("");
  const [searchHistory, setSearchHistory] = useLocalStorage(
    "githubSearchHistory",
    []
  );
  const { user, repos, loading, error } = useGitHub(username);

  const handleSearch = (newUsername) => {
    setUsername(newUsername);
    setSearchHistory((prev) => {
      const newHistory = [
        newUsername,
        ...prev.filter((item) => item !== newUsername),
      ];
      return newHistory.slice(0, 5);
    });
  };

  const handleHistorySelect = (selectedUsername) => {
    setUsername(selectedUsername);
    handleSearch(selectedUsername);
  };

  return (
    <div className="min-h-screen bg-blue-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">
          GitHub Profile Viewer
        </h1>

        <SearchBar
          onSearch={handleSearch}
          searchHistory={searchHistory}
          onHistorySelect={handleHistorySelect}
        />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <UserProfile user={user} />
            <Repositories repos={repos} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
