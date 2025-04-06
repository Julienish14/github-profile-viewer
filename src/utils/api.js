import axios from "axios";

const GITHUB_API = "https://api.github.com";

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRepos = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
