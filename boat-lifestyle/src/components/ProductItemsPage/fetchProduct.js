import axios from "axios";

function fetchUsers(query, page) {
  if (!query) {
    return Promise.reject("query should be provided");
  }

  return axios.get("https://mighty-reef-32699.herokuapp.com/AllProduct", {
    params: {
      q: query
    }
  });
}

export { fetchUsers };