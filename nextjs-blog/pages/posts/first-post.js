import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <main>
            <Script 
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            } />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home !</Link>        
            </h2>
            <div>
            <YourComponent/>
            </div>
        </main>
    </Layout>
    
  );}

  const YourComponent = () => (
    <Image
    src="/images/PP2.jpg"
    height={300}
    width={300}
    alt = "Hadrien Landemarre"/>
  );