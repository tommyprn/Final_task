import { GET_SONG, POST_SONG } from "../constant/action-types";
import { API } from "../../config/api";

export const getAllSong = () => {
  return {
    type: GET_SONG,
    payload: async () => {
      try {
        const response = await API.get("/song");

        return response.data.songs;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const postSong = () => {
  return {
    type: POST_SONG,
    payload: async () => {
      try {
        const response = await API.get("/song");

        return response.data.songs;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
