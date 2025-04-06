import { FiStar, FiGitBranch } from "react-icons/fi";

const RepositoryItem = ({ repo }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold dark:text-white">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {repo.name}
            </a>
          </h3>
          {repo.description && (
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {repo.description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {repo.language && (
            <span className="px-2 py-1 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {repo.language}
            </span>
          )}
          <span className="flex items-center text-gray-600 dark:text-gray-400">
            <FiStar className="mr-1" /> {repo.stargazers_count}
          </span>
          <span className="flex items-center text-gray-600 dark:text-gray-400">
            <FiGitBranch className="mr-1" /> {repo.forks_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
