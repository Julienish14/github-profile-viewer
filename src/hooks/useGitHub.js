import { useState, useEffect } from "react";
import { getUser, getRepos } from "../utils/api";

export const useGitHub = (username) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [userData, reposData] = await Promise.all([
          getUser(username),
          getRepos(username),
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "User not found"
            : "Error fetching data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { user, repos, loading, error };
};
