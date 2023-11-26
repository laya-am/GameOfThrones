import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

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
        <div>
            <h2>{data[0]?.name}</h2>
            <h4>{data[0]?.house && data[0]?.house.name}</h4>
            <ul>
            {data[0]?.quotes.map((quote, index)=> {
                return <li key={index}>{quote}</li>}
                )}
            </ul>
        </div>
      )
}
