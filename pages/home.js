import Head from "next/head";
import NavigationBarStateProvider from "../contexts/NavigationBarStateProvider";
import SpotDataStateProvider from "../contexts/SpotDataStateProvider";
import MainDisplay from "../components/MainDisplay";
import BottomNavigationBar from "../components/BottomNavigationBar";

function Home() {
  return (
    <>
      <NavigationBarStateProvider>
        <SpotDataStateProvider>
          <Head>
            <title>MOMENT</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MainDisplay />
          <BottomNavigationBar />
        </SpotDataStateProvider>
      </NavigationBarStateProvider>
    </>
  );
}

export default Home;