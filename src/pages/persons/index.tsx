import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Searchbar from '../../../components/Searchbar';

interface Props {
  fetchData: (param: string) => Promise<Person[]>;
}
type Person = {
  slug: string;
  name: string;
  house: {name: string; slug: string};
  quotes: string[]
}

export default function PersonsPage(props:Props) {

  const [data, setData] = useState<Person[]>([])
  console.log({data})
  useEffect(() => {
    async function fetch(){
      const characters = await props.fetchData("characters");
      setData(characters)
    }
    fetch()
  }, [])
  
  return (
    <div>
      <Searchbar data={data} setData={setData} />
    <ul>
      {data.map((person)=>{
        return (
        <Link href={`persons/${person.slug}`} key={person.slug}>
        <li>{person.name} {person.house && `of ${person.house.name}`}</li>
        </Link>
        )
      })}
    </ul>
    </div>
  )
}
