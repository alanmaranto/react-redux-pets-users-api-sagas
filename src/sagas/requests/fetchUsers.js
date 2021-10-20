import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = async () => {
  try {
    const { data } = await axios({
      method: "GET",
      url,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchGetUsers;
