import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Searchbar from '../../../components/Searchbar';
import Card from '../../../components/Card';
import styles from '../../styles/Card.module.css';

interface Props {
  fetchData: (param: string) => Promise<Person[]>;
}
type Person = {
  slug: string;
  name: string;
  house: {name: string; slug: string};
  quotes: string[]
}

export default function PersonsPage({ fetchData }:Props) {

  const [data, setData] = useState<Person[]>([])
  console.log({data})
  useEffect(() => {
    async function fetch(){
      const characters = await fetchData("characters");
      setData(characters)
    }
    fetch()
  }, [])
  
  return (
    <div className={styles.container}>
      <Searchbar data={data} setData={setData} />
      <ul className={styles.cardContainer}>
        {data.map((person) => (
          <Card key={person.slug} slug={person.slug} person={person.name} house={person.house?.name} />
        ))}
      </ul>
    </div>
  );
}
