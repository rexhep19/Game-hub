import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7e4431c05b9f41d999a5af288cdcdad1",
  },
});
