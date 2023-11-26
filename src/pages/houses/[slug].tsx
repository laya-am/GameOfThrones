import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

interface Props {
    fetchData: (param: string) => []
  }

type House = {
    slug: string;
    name: string;
    members: {name: string; slug: string}[];
}

export default function Members(props:Props) {
    const router = useRouter();
    const {slug} = router.query
    
      const [data, setData] = useState<House[]>([])
      console.log("data", data);
      
      useEffect(() => {
        async function fetch(){
          const data = await props.fetchData(`house/${slug}`);
          setData(data)
        }
        fetch()
      }, [])
      
      return (
        <ul>
          {data[0]?.members.map((member)=>{
            return <li>{member.name}</li>}
            )}
        </ul>
      )
}
