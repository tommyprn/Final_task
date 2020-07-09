import {
  REGISTER,
  LOGIN,
  LOGOUT,
  GET_USER,
  GET_ALL_USER,
} from "../constant/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  isLogin: false,
  data: {},
  loading: false,
  error: {},
};

const REGISTER_PENDING = `${REGISTER}_${ActionType.Pending}`;
const REGISTER_FULFILLED = `${REGISTER}_${ActionType.Fulfilled}`;
const REGISTER_REJECTED = `${REGISTER}_${ActionType.Rejected}`;

const LOGIN_PENDING = `${LOGIN}_${ActionType.Pending}`;
const LOGIN_FULFILLED = `${LOGIN}_${ActionType.Fulfilled}`;
const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;

const GET_USER_PENDING = `${GET_USER}_${ActionType.Pending}`;
const GET_USER_FULFILLED = `${GET_USER}_${ActionType.Fulfilled}`;
const GET_USER_REJECTED = `${GET_USER}_${ActionType.Rejected}`;

const GET_ALL_USER_PENDING = `${GET_ALL_USER}_${ActionType.Pending}`;
const GET_ALL_USER_FULFILLED = `${GET_ALL_USER}_${ActionType.Fulfilled}`;
const GET_ALL_USER_REJECTED = `${GET_ALL_USER}_${ActionType.Rejected}`;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
    case REGISTER_PENDING:
    case LOGIN_PENDING:
    case GET_ALL_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_FULFILLED:
    case GET_ALL_USER_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case REGISTER_FULFILLED:
    case LOGIN_FULFILLED:
      return {
        ...state,
        isLogin: true,
        loading: false,
        data: action.payload,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case GET_USER_REJECTED:
    case REGISTER_REJECTED:
    case LOGIN_REJECTED:
    case GET_ALL_USER_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
