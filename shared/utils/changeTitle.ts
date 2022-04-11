export const changeTitle = (text: string): string => {
    return text
      .trim()
      .toLowerCase()
      .replace(/ə/g, "e")
      .replace(/ü/g, "u")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c");
  };
  