export const shortText = (text: string, maxSymbolNumber: number): string => {
  return `${text.slice(0, maxSymbolNumber)}...`;
};
