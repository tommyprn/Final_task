import { GET_ALL_ARTIST, POST_ARTIST } from "../constant/action-types";
import { API, setAuthToken } from "../../config/api";

export const getAllArtist = () => {
  return {
    type: GET_ALL_ARTIST,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.get("/artist");

        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const postArtist = (artist) => {
  return {
    type: POST_ARTIST,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        const {
          data: { data },
        } = await API.post("/artist", artist);

        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
