import Head from "next/head";

interface MetaTypes {
  title?: string;
  keywords?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  indexing?: string;
}

const MetaSEO = ({
  title,
  keywords,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  indexing,
}: MetaTypes) => (
  <Head>
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={ogUrl} />
    <meta name="robots" content={indexing} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <title>{title}</title>
  </Head>
);

export default MetaSEO;
