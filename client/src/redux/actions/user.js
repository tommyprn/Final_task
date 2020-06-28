import {
  LOGIN,
  REGISTER,
  GET_USER,
  GET_ALL_USER,
} from "../constant/action-types";
import { API, setAuthToken } from "../../config/api";

export const login = (users) => {
  return {
    type: LOGIN,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/login", users);

        localStorage.setItem("id", data.id);
        localStorage.setItem("token", data.token);
        setAuthToken(data.token);

        const ids = data.id;
        const {
          data: { data: dataUser },
        } = await API.get("/user/" + ids);
        localStorage.setItem("role", dataUser.role);

        return dataUser;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const register = (user) => {
  return {
    type: REGISTER,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/register", user);

        localStorage.setItem("token", data.token);
        setAuthToken(data.token); //Set header token

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

export const getUser = () => {
  return {
    type: GET_USER,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        const {
          data: { data },
        } = await API.get("/user/");

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

export const getAllUser = () => {
  return {
    type: GET_ALL_USER,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));
        const {
          data: { data },
        } = await API.get("/user");

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
