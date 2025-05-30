import { EMPTY_STRING } from '@constants';

export const isEmptyObject = (obj: object | null | undefined) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
};

export const isEmptyValueObject = (obj: any): boolean => {
  if (obj === null || obj === undefined || obj === EMPTY_STRING) return true;
  if (typeof obj !== 'object') {
    return !obj && obj !== 0;
  }
  for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    if (!isEmptyValueObject(obj[key])) {
      return false;
    }
  }
  return true;
};
