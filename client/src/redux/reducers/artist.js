import { GET_ALL_ARTIST, POST_ARTIST } from "../../redux/constant/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const GET_ALL_ARTIST_PENDING = `${GET_ALL_ARTIST}_${ActionType.Pending}`;
const GET_ALL_ARTIST_FULFILLED = `${GET_ALL_ARTIST}_${ActionType.Fulfilled}`;
const GET_ALL_ARTIST_REJECTED = `${GET_ALL_ARTIST}_${ActionType.Rejected}`;

const POST_ARTIST_PENDING = `${POST_ARTIST}_${ActionType.Pending}`;
const POST_ARTIST_FULFILLED = `${POST_ARTIST}_${ActionType.Fulfilled}`;
const POST_ARTIST_REJECTED = `${POST_ARTIST}_${ActionType.Rejected}`;

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ARTIST_PENDING:
    case GET_ALL_ARTIST_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_ARTIST_FULFILLED:
    case GET_ALL_ARTIST_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_ARTIST_REJECTED:
    case GET_ALL_ARTIST_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default artistReducer;
