import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Props {
  fetchData: (param: string) => []
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
  
  //what type for event?
  function handleSubmit(e: any){
    e.preventDefault();
    const searchQuery = e.target.elements.searchQuery.value;
    setData(data.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase())))
    e.target.reset();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input name='searchQuery' type="text" />
        <button type='submit'>search</button>
      </form>
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
