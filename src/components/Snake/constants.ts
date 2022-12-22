import { XY } from "./types";

export const WIDTH = 30;
export const HEIGHT = 50;
export const RESOLUTION = 8;

export const DEFAULT_STATE: XY[] = [
  ...new Array(10).fill([]).map(
    (_, i) => [12, 13 + i] as XY
  ),

  ...new Array(7).fill([]).map(
    (_, i) => [12 + i, 23] as XY
  ),

  ...new Array(7).fill([]).map(
    (_, i) => [19, 23 + i] as XY
  ),
  // [0, 50]
];