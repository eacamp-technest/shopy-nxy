import {IUser} from 'types/user';
import {MMKV} from 'react-native-mmkv';
import {ICardInputFrom} from 'types/card.types';
import {
  StorageKeys,
  StorageMethods,
  StorageMethodsKeys,
  TFunctionalMethod,
} from 'types/local-storage.types';

const storage = new MMKV();

export const LocalStorage = {
  set(key: StorageKeys, method: StorageMethodsKeys, data?: StorageMethods) {
    if (['string', 'number', 'boolean'].includes(method)) {
      storage.set(key, data as string | number | boolean);
      return;
    }

    if (['object', 'array'].includes(method)) {
      storage.set(key, JSON.stringify(data));
      return;
    }

    throw Error('Not supported local storage method');
  },

  clean(key: StorageKeys | StorageKeys[] | 'all') {
    if (key === 'all') {
      return storage.clearAll();
    }

    if (Array.isArray(key)) {
      key.forEach(k => storage.delete(k));
      return;
    }

    storage.delete(key);
  },

  cards(method: TFunctionalMethod, data?: ICardInputFrom[]) {
    if (method === 'get') {
      const cards = storage.getString(StorageKeys.cards);
      return cards ? JSON.parse(cards) : null;
    }
    this.set(StorageKeys.cards, 'array', data);
  },

  user(method: TFunctionalMethod, data?: IUser) {
    if (method === 'get') {
      const user = storage.getString(StorageKeys.user);
      return user ? JSON.parse(user) : null;
    }

    this.set(StorageKeys.user, 'object', data);
  },
};
