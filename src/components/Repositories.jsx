import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import RepositoryItem from "./RepositoryItem";

const Repositories = ({ repos }) => {
  const [sortBy, setSortBy] = useState("stars");
  const [languageFilter, setLanguageFilter] = useState("all");

  if (!repos || repos.length === 0) return null;

  const languages = [
    "all",
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];
  const languages = [
    "all",
    ...new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ];

  const sortedRepos = [...repos]
    .sort((a, b) => {
      if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "updated")
        return new Date(b.updated_at) - new Date(a.updated_at);
      return 0;
    })
    .filter(
      (repo) => languageFilter === "all" || repo.language === languageFilter
    )
    .slice(0, 10);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold dark:text-white">Repositories</h2>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <FiFilter className="mr-2 text-gray-500" />
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="stars">Sort by stars</option>
            <option value="name">Sort by name</option>
            <option value="updated">Sort by updated</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {sortedRepos.length > 0 ? (
          sortedRepos.map((repo) => (
            <RepositoryItem key={repo.id} repo={repo} />
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No repositories found with the selected language.
          </p>
        )}
      </div>
    </div>
  );
};

export default Repositories;
