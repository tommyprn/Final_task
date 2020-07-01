import { GET_SONG, POST_SONG } from "../constant/action-types";
import { API, setAuthToken } from "../../config/api";

export const getAllSong = () => {
  return {
    type: GET_SONG,
    payload: async () => {
      try {
        const response = await API.get("/song");

        return response.data.data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const postSong = (song) => {
  return {
    type: POST_SONG,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        const response = await API.post("/song", song);

        return response.data.data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
