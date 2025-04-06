import { FiGithub, FiUsers, FiMapPin, FiUser } from "react-icons/fi";

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl font-bold dark:text-white">
              {user.name || user.login}
            </h1>
            {user.name && (
              <span className="text-gray-500 dark:text-gray-400">
                @{user.login}
              </span>
            )}
          </div>

          {user.bio && (
            <p className="text-gray-700 dark:text-gray-300 mb-4">{user.bio}</p>
          )}

          <div className="flex flex-wrap gap-4 mb-4">
            {user.location && (
              <span className="flex items-center text-gray-600 dark:text-gray-400">
                <FiMapPin className="mr-1" /> {user.location}
              </span>
            )}
            <span className="flex items-center text-gray-600 dark:text-gray-400">
              <FiUsers className="mr-1" /> {user.followers} followers ·{" "}
              {user.following} following
            </span>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FiGithub className="mr-2" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
