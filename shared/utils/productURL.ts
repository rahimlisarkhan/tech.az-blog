export const productURL = () => {
  let productURL = document.URL;

  let newURL = !productURL.includes("en")
    ? productURL.split("")
    : productURL.split("/en")[0];

    if(Array.isArray(newURL)){
        newURL.pop()
        return newURL.join("")
    }
  return newURL;
};
