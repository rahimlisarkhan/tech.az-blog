import { useRouter } from "next/router";

export const useLangChange = () => {
  const { asPath, locale, replace } = useRouter();

  const langChange = (lang: string) => {
    replace(asPath, asPath, { locale: lang });
  };

  return { lang: locale, langChange };
};
