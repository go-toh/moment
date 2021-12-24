import Head from 'next/head';
import NavigationBarStateProvider from '../contexts/NavigationBarStateProvider';
import MainDisplay from '../components/MainDisplay';
import BottomNavigationBar from '../components/BottomNavigationBar';

function Home() {
  return (
    <>
      <NavigationBarStateProvider>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainDisplay />
        <BottomNavigationBar />
      </NavigationBarStateProvider>
    </>
  );
}

export default Home;