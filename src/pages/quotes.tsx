import React, { useEffect, useState } from 'react'

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
                <p>{info.character.name}</p>
            </li>
            )
            })}
        </ul>
        <button onClick={()=> setFetchTrigger(fetchTrigger=> fetchTrigger+1)}>shuffle</button>
    </div>
  )
}
