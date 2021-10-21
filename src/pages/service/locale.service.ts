export const renderLanguage = (locale: string | undefined) => {
  if (locale === "en") {
    return "Home page";
  }
  if (locale === "pl") {
    return "Strona glowna";
  }
  return null;
};
