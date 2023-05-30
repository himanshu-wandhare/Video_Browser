import axios from "axios";

// const KEY = "AIzaSyCVmrIaXeNgjCi-QYx94HgANZ8cZxinapE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: process.env.REACT_APP_YOUTUBEKEY
  }
})