import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import useDarkMode from 'hooks/useDarkMode';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from 'components/Header';
import Maker from 'components/Maker';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px 80px 40px;
`;

const Home: NextPage = props => {
  const { theme, setTheme } = useDarkMode();
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>{'Next.js Boilerplate'}</title>
      </Head>
      <Container>
        <Header />
        <Maker />
      </Container>
    </>
  );
};

export default Home;
