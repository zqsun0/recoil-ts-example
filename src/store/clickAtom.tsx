import {atom} from 'recoil';
import {sessionStorageEffect} from './atom';

export const clickAccount = atom<number>({
  key: 'clickAccount',
  default: 0,
  // @ts-ignore
  effects_UNSTABLE: [
    sessionStorageEffect('clickAccount')
  ]
});