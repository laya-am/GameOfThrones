import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Props {
  fetchData: (param: string) => []
}
type House = {
  slug: string;
  name: string;
  members: {name: string; slug: string}[]
}

export default function housesPage(props:Props) {

  const [data, setData] = useState<House[]>([])
  
  useEffect(() => {
    async function fetch(){
      const houses = await props.fetchData("houses");
      setData(houses)
    }
    fetch()
  }, [])
  
  return (
    <ul>
      {data.map((house)=>{
        return (
        <Link href={`houses/${house.slug}`} key={house.slug}>
        <li>{house.name}</li>
        </Link>
        )
      })}
    </ul>
  )
}
