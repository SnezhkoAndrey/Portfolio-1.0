import Head from "next/head";

interface PropsType {
  title: string;
  children: React.ReactNode;
}

const MainLayout = ({ title, children }: PropsType) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
