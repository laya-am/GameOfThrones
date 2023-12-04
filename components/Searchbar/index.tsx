import React from 'react'
import styles from "../../src/styles/Searchbar.module.css"
interface Props {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
}

interface Data {
  slug: string;
  name: string;
  house?: {name: string; slug: string};
  quotes?: string[]
  members?: {name: string; slug: string}[]

}

// interface Person extends Data {
//   house: {name: string; slug: string};
//   quotes: string[]
// }

// interface House extends Data{
//   members: {name: string; slug: string}[]
// }

export default function Searchbar({data, setData}: Props) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const searchQuery = (e.target as any).elements.searchQuery.value;
        setData(data.filter((info: Data) => info.name.toLowerCase().includes(searchQuery.toLowerCase())))
        e.currentTarget.reset();
      }
  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
          <input name='searchQuery' type="text"  className={styles.input} />
          <button className={styles.btn} type='submit'>search</button>
      </form>
      )
}
