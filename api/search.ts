import { getDataNews } from "shared/services/MixNews";

export const resultSearchApi = async (search: string) => {
  let {
    data: {
      results: { articles, news, videos },
    },
  } = await getDataNews(`search/?search=${search}&limit=30&offset=1`, null);

  return [...news, ...articles, ...videos];
};
