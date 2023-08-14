import { ReducerFunction } from "@/types";
import { REDUCER_ACTION_TYPE } from "@/types/reducer";

export const reducer: ReducerFunction = (state, { type, payload }) => {
  switch (+type) {
    case REDUCER_ACTION_TYPE.SET_STATISTICS:
      return {
        ...state,
        statistics: [...payload]
      }
    default:
      return state
  }
}