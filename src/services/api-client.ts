import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba9f13853f05427dbd82b1ecc2d31e59"
  }
});