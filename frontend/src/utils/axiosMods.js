import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

const axiosHandle401 = axios.create({
  withCredentials: true,
})

// Function to handle errors selectively
const handleRequestError = (error) => {
  if (error.response && error.response.status === 401) {
    // Don't log 401 error
    return Promise.resolve();  // Resolve the promise to prevent it from showing in the console
  } else {
    return Promise.reject(error);  // Reject all other errors normally
  }
};

// Intercepting responses to handle errors selectively
axiosHandle401.interceptors.response.use(
  response => response,  // Pass response as is
  handleRequestError      // Handle errors selectively
);

export { axiosWithCredentials, axiosHandle401 };
