import React, { useEffect, useState } from 'react'
import Searchbar from '../../../components/Searchbar';
import Card from '../../../components/Card';
import styles from "../../styles/Card.module.css"
interface Props {
  fetchData: (param: string) => Promise<House[]>
}
type House = {
  slug: string;
  name: string;
  members: {name: string; slug: string}[]
}

export default function HousesPage({ fetchData }:Props) {

  const [data, setData] = useState<House[]>([])
  
  useEffect(() => {
    async function fetch(){
      const houses = await fetchData("houses");
      setData(houses)
    }
    fetch()
  }, [])
  
  return (
    <div className={styles.container}>
      <Searchbar data={data} setData={setData} />
      <ul className={styles.cardContainer}>
        {data.map((house)=>{
          return (
            <Card house={house.name} slug={house.slug} key={house.slug} />
          )
        })}
      </ul>
    </div>

  )
}
