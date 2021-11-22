/**
 * @RecordType
 * Method parse cookie will return an object with strings
 */
export const parseCookie = (str: string | null = null): Record<string, string> => {
  // Inferece types
  if (str === null) {
    return {};
  }

  return str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
};

export const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
