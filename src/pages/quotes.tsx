import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import styles from "../styles/QuotesPage.module.css"

interface Props {
    fetchData: (param: string) => Promise<Quote[]>;
  }
type Quote = {
    sentence: string;
    character: {
        name: string;
        slug: string;
        house: {
            name: string | null;
            slug: string | null
        }
    }
}

export default function Quotes(props:Props) {

  const [data, setData] = useState<Quote[]>([])
  console.log({data})
  const [fetchTrigger, setFetchTrigger] = useState<number>(0);


  useEffect(() => {
    async function fetch(){
      const quotes = await props.fetchData("random/5");
      setData(quotes)
    }
    fetch()
  }, [fetchTrigger])

  return (
    <div className={styles.quoteContainer}>
        <ul className={styles.list}>
            {data.map((info)=>{
            return (
            <li key={info.sentence} className={styles.listItem}>
                <h3 className={styles.quote}>"{info.sentence}"</h3>
                <Link href={`/persons/${info.character.slug}`} className={styles.character}>{info.character.name}</Link>
            </li>
            )
            })}
        </ul>
        <button className={styles.btn} onClick={()=> setFetchTrigger(fetchTrigger=> fetchTrigger+1)}>shuffle</button>
    </div>
  )
}
