import {MMKV} from 'react-native-mmkv';
import {ICardInputFrom} from 'types/card.types';
import {
  StorageKeys,
  StorageMethods,
  StorageMethodsKeys,
  TFunctionalMethod,
} from 'types/local-storage.types';

const storage = new MMKV();

export class LocalStorage {
  private static set(
    key: StorageKeys,
    method: StorageMethodsKeys,
    data?: StorageMethods,
  ) {
    if (['string', 'number', 'boolean'].includes(method)) {
      storage.set(key, data as string | number | boolean);
      return;
    }

    if (['object', 'array'].includes(method)) {
      storage.set(key, JSON.stringify(data));
      return;
    }

    throw Error('Not supported local storage method');
  }

  public static clean(key: StorageKeys | StorageKeys[] | 'all') {
    if (key === 'all') {
      return storage.clearAll();
    }

    if (Array.isArray(key)) {
      key.forEach(k => storage.delete(k));
      return;
    }

    storage.delete(key);
  }

  public static cards(method: TFunctionalMethod, data?: ICardInputFrom[]) {
    if (method === 'get') {
      const cards = storage.getString(StorageKeys.cards);
      return cards ? JSON.parse(cards) : null;
    }
    this.set(StorageKeys.cards, 'array', data);
  }
}
