import Head from "next/head";

const MetaData = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="A CRM tailored for insurance agents in Singapore to create ease in managing their clients."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaData;
