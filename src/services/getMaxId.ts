import _isArray from "lodash/isArray";

export const getMaxIdByKey = (key, array) => {
  if (!_isArray(array)) {
    throw new Error("array parameter should be an array");
  }
  const maxId =
    array.reduce((acc, item) => {
      return acc > item[key] ? acc : item[key];
    }, 0) || 0;

  return maxId;
};
