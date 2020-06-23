import { LOGIN, REGISTER, GET_USER } from "../constant/action-types";
import { API, setAuthToken } from "../../config/api";

export const login = (user) => {
  return {
    type: LOGIN,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/login", user);

        localStorage.setItem("token", data.token);
        setAuthToken(data.token);

        const ids = data.id;
        const {
          data: { data: dataUser },
        } = await API.get("/user/" + ids);

        localStorage.setItem("role", dataUser.role);
        localStorage.setItem("id", dataUser.id);

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

export const getUser = (id) => {
  return {
    type: GET_USER,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.get("/user/" + id);

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
