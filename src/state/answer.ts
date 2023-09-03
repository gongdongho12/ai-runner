import { atom } from "recoil";

const answerState = atom<boolean[]>({
  key: 'answerState',
  default: []
});

export default answerState