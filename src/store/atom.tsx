import {atom} from 'recoil';
import {ListProp} from '../component/AddItem';

export const sessionStorageEffect = (key: string) =>
  // @ts-ignore
  ({setSelf, onSet}): void => {
    const savedValue = sessionStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any) => {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  };


export const listValue = atom<Array<ListProp>>({
    key: 'list',
    default: [],
    // @ts-ignore
    effects_UNSTABLE: [
      sessionStorageEffect('list')
    ]
  }
);

export const filterListValue = atom<string>({
  key: 'filterListValue',
  default: ''
});