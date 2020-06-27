import {
  GET_TRANSACTION,
  POST_TRANSACTION,
  PATCH_TRANSACTION,
} from "../constant/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: {},
  loading: true,
  error: null,
};

const GET_TRANSACTION_PENDING = `${GET_TRANSACTION}_${ActionType.Pending}`;
const GET_TRANSACTION_FULFILLED = `${GET_TRANSACTION}_${ActionType.Fulfilled}`;
const GET_TRANSACTION_REJECTED = `${GET_TRANSACTION}_${ActionType.Rejected}`;

const POST_TRANSACTION_PENDING = `${POST_TRANSACTION}_${ActionType.Pending}`;
const POST_TRANSACTION_FULFILLED = `${POST_TRANSACTION}_${ActionType.Fulfilled}`;
const POST_TRANSACTION_REJECTED = `${POST_TRANSACTION}_${ActionType.Rejected}`;

const PATCH_TRANSACTION_PENDING = `${PATCH_TRANSACTION}_${ActionType.Pending}`;
const PATCH_TRANSACTION_FULFILLED = `${PATCH_TRANSACTION}_${ActionType.Fulfilled}`;
const PATCH_TRANSACTION_REJECTED = `${PATCH_TRANSACTION}_${ActionType.Rejected}`;

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TRANSACTION_PENDING:
    case GET_TRANSACTION_PENDING:
    case PATCH_TRANSACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case POST_TRANSACTION_FULFILLED:
    case GET_TRANSACTION_FULFILLED:
    case PATCH_TRANSACTION_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_TRANSACTION_REJECTED:
    case GET_TRANSACTION_REJECTED:
    case PATCH_TRANSACTION_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
