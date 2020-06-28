import {
  GET_TRANSACTION,
  POST_TRANSACTION,
  PATCH_TRANSACTION,
} from "../constant/action-types";
import { API } from "../../config/api";

export const getTransaction = () => {
  return {
    type: GET_TRANSACTION,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        const {
          data: { data },
        } = await API.get("/transaction");

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

export const addTransaction = (transaction) => {
  return {
    type: POST_TRANSACTION,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        const {
          data: { data },
        } = await API.post("/transaction", transaction);

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

export const patchTransaction = (status, id) => {
  return {
    type: PATCH_TRANSACTION,
    payload: async () => {
      try {
        const formData = new FormData();
        formData.append("status", status);
        setAuthToken(localStorage.getItem("token"));

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const {
          data: { data },
        } = await API.patch("/transaction/" + id);

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
