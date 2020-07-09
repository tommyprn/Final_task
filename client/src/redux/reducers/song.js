import {
  GET_SONG,
  POST_SONG,
  GET_ALL_SONG,
} from "../../redux/constant/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const GET_ALL_SONG_PENDING = `${GET_ALL_SONG}_${ActionType.Pending}`;
const GET_ALL_SONG_FULFILLED = `${GET_ALL_SONG}_${ActionType.Fulfilled}`;
const GET_ALL_SONG_REJECTED = `${GET_ALL_SONG}_${ActionType.Rejected}`;

const GET_SONG_PENDING = `${GET_SONG}_${ActionType.Pending}`;
const GET_SONG_FULFILLED = `${GET_SONG}_${ActionType.Fulfilled}`;
const GET_SONG_REJECTED = `${GET_SONG}_${ActionType.Rejected}`;

const POST_SONG_PENDING = `${POST_SONG}_${ActionType.Pending}`;
const POST_SONG_FULFILLED = `${POST_SONG}_${ActionType.Fulfilled}`;
const POST_SONG_REJECTED = `${POST_SONG}_${ActionType.Rejected}`;

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SONG_PENDING:
    case GET_SONG_PENDING:
    case GET_ALL_SONG_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_SONG_FULFILLED:
    case GET_SONG_FULFILLED:
    case GET_ALL_SONG_FULFILLED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case POST_SONG_REJECTED:
    case GET_SONG_REJECTED:
    case GET_ALL_SONG_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
