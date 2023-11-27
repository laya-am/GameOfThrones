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

  useEffect(() => {
    async function fetch(){
      const quotes = await props.fetchData("random/5");
      setData(quotes)
    }
    fetch()
  }, [])

  return (
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
  )
}
