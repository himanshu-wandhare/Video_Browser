import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  params: {
    part: "snippet",
    type: "video",
    key: process.env.REACT_APP_YOUTUBEKEY
  }
})