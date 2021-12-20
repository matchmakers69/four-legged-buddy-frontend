// import { LocalStorageValues } from "../constants/LocalStorageItems";

export const LOCAL_STORAGE_KEYS = {
  auth: "auth",
} as const;

export type LocalStorageItems = {
  [LOCAL_STORAGE_KEYS.auth]: any; // make sure you put your auth obj schema
};

type LocalStorageKeys = keyof typeof LOCAL_STORAGE_KEYS;

export type LocalStorageValues = typeof LOCAL_STORAGE_KEYS[LocalStorageKeys];

abstract class LocalStorage {
  public static saveItem<T>(key: LocalStorageValues, item: T) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  public static getItem<T>(key: LocalStorageValues): T {
    const jsonWithData = localStorage.getItem(key)!;

    return jsonWithData ? JSON.parse(jsonWithData) : {};
  }
}

export default LocalStorage;
