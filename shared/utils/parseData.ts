export const parseData = (obj: any) => {
  if (!obj) return;

  return Object.entries(obj)
    .map((comment: any[]) => {
      return {
        id: comment[0],
        ...comment[1],
      };
    })
    .reverse();
};
