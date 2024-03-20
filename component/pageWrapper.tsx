import Head from 'next/head';

import styles from '@/styles/common.module.scss';
import Script from 'next/script';

type PropsType = {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
  children: JSX.Element | JSX.Element[];
};
const PageWrapper = ({
  title,
  desc = '',
  css = '',
  js = '',
  children,
}: PropsType) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <main className={styles.main}>{children}</main>
      <Script id="layout">{js}</Script>
    </>
  );
};

export default PageWrapper;
