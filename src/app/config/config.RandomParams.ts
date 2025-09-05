interface RandomParams {
  MIN: number;
  MAX: number;
  name: string;
}

const paramsList: RandomParams[] = [
  { MIN: 1, MAX: 100, name: "A" },
  { MIN: 10, MAX: 200, name: "B" },
];

const paramsMap: { [key: string]: RandomParams } = {
  first: { MIN: 1, MAX: 100, name: "A" },
  second: { MIN: 10, MAX: 200, name: "B" },
};

export const RandomParams: RandomParams[] = paramsList;
export const RandomParamsMap: { [key: string]: RandomParams } = paramsMap;
