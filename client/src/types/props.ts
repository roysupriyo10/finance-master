import { ReducerAction, Statistic } from ".";

export interface Props {
  statistics: Statistic[],
  dispatch: React.Dispatch<ReducerAction>
}