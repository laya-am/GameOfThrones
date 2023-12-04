import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/HousesSlugPage.module.css"
import { log } from 'console';

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
console.log(data);

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
        <div className={styles.container}>
        <h1 className={styles.title}>{data[0]?.name}</h1>
        <Image src={`/assets/sigils/${slug}.jpeg`} width="120" height="120" alt={`sigil of ${data[0]?.name}`} className={styles.sigil} />
        <ul className={styles.membersList}>
          {data[0]?.members.map((member)=>{
            return (
            <li key={member.slug}>
              <Link href={`/persons/${member.slug}`} className={styles.person}>
                <Image src={`/assets/characters/${member.slug}.jpeg`} width="120" height="120" alt={`${member.name}'s image'`} className={styles.personImage} />
                <h3 className={styles.personName}>
                  {member.name}
                </h3>
              </Link>
            </li>
            )}
            )}
        </ul>
        </div>
      )
}
