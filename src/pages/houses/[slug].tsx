import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

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
      
      useEffect(() => {
        async function fetch(){
        if(slug){
          const data = await props.fetchData(`house/${slug}`);
          setData(data)
        }
        }
        fetch();
      }, [slug])
      
      return (
        <ul>
          {data[0]?.members.map((member)=>{
            return (
            <Link href={`/persons/${member.slug}`} key={member.slug}>
              <li>{member.name}</li>
            </Link>
            )}
            )}
        </ul>
      )
}
