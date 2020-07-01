import {
  GET_TRANSACTION,
  POST_TRANSACTION,
  PATCH_TRANSACTION,
} from "../constant/action-types";
import { API, setAuthToken } from "../../config/api";

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

export const addTransaction = (transaction, id) => {
  return {
    type: POST_TRANSACTION,
    payload: async () => {
      try {
        setAuthToken(localStorage.getItem("token"));

        const formData = new FormData();

        formData.append("userId", id);
        formData.append("attachment", transaction);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        const {
          data: { data },
        } = await API.post("/transaction", formData, config);
        console.log(data);
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
        setAuthToken(localStorage.getItem("token"));

        const {
          data: { data: dataUser },
        } = await API.patch(`/transactions/${id}`, status);

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
