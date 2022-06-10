export const converSlug = (slug: any) => {
    let query = slug.split("=");
    let url = `/${query[0]}/${query[1]}`;
    return url;
  };
  