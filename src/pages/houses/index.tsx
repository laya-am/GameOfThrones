import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Searchbar from '../../../components/Searchbar';
import Card from '../../../components/Card';

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
    <div>
      <Searchbar data={data} setData={setData} />
    <ul>
      {data.map((house)=>{
        return (
        <li key={house.slug}>
          <Card name={house.name} slug={house.slug} />
        </li>
        )
      })}
    </ul>
    </div>

  )
}
