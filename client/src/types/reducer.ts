interface Statistic {
  end_year: string;
  intensity: number;
  sector: string;
  topic: string;
  insight: string;
  url: string;
  region: string;
  start_year: string;
  impact: string;
  added: string;
  published: string;
  country: string;
  relevance: number;
  pestle: string;
  source: string;
  title: string;
  likelihood: number;
  _id: string
}

export const enum REDUCER_ACTION_TYPE {
  SET_STATISTICS
}

interface GlobalState {
  statistics: Statistic[]
}

interface ReducerAction {
  type: REDUCER_ACTION_TYPE,
  payload: Statistic[]
}

type ReducerFunction = (state: GlobalState, action: ReducerAction) => GlobalState

export type {
  ReducerFunction,
  GlobalState,
  Statistic,
  ReducerAction,
}