import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  async function fetchData(param: string) {
    try {
      const response = await fetch(`https://api.gameofthronesquotes.xyz/v1/${param}`);
      
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error("An Error occurred");
    }
  }
  return <Component {...pageProps} fetchData={fetchData} />
}
