import axios from "axios";

function fetchUsers(query, page) {
  if (!query) {
    return Promise.reject("query should be provided");
  }

  return axios.get("http://localhost:3000/AllProduct", {
    params: {
      q: query
    }
  });
}

export { fetchUsers };