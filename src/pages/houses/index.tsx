import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface Props {
  fetchData: (param: string) => []
}
export default function housesPage(props:Props) {
  type House = {
    slug: string;
    name: string;
    members: {name: string; slug: string}[]
  }

  const [data, setData] = useState<House[]>([])
  console.log(data);
  
  useEffect(() => {
    async function fetch(){
      const data = await props.fetchData("houses");
      setData(data)
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
