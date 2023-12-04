import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/PersonsSlugPage.module.css"

interface Props {
    fetchData: (param: string) => []
  }

  type Person = {
    slug: string;
    name: string;
    house: {name: string; slug: string};
    quotes: string[]
  }

export default function Persons(props:Props) {
    const router = useRouter();
    const {slug} = router.query
    
      const [data, setData] = useState<Person[]>([])
      
      useEffect(() => {
        async function fetch(){
        if(slug){
          const data = await props.fetchData(`character/${slug}`);
          setData(data)
        }
        }
        fetch();
      }, [slug])
      
      return (
        <div className={styles.pageContainer}>
          <div className={styles.infoSection}>
            <div className={styles.titlesSection}>
              <h2>{data[0]?.name}</h2>
              {data[0]?.house &&
              <Link href={`/houses/${data[0]?.house.slug}`} className={styles.house}>
              {data[0]?.house.name}
              </Link>}
            </div>
            <Image src={`/assets/characters/${slug}.jpeg`} width="150" height="150" alt={`${data[0]?.name}'s image'`} className={styles.image} />
          </div>
            <ul className={styles.list}>
            {data[0]?.quotes.map((quote, index)=> {
                return <li key={index}>"{quote}"</li>}
                )}
            </ul>
        </div>
      )
}
