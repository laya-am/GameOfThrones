import React, { useEffect, useState } from 'react'
import Link from 'next/link';
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
    <div>
        <ul>
            {data.map((info)=>{
            return (
            <li key={info.sentence}>
                <h3>"{info.sentence}"</h3>
                <Link href={`/persons/${info.character.slug}`}><p>{info.character.name}</p></Link>
            </li>
            )
            })}
        </ul>
        <button className="btn btn-outline-light" onClick={()=> setFetchTrigger(fetchTrigger=> fetchTrigger+1)}>shuffle</button>
    </div>
  )
}
