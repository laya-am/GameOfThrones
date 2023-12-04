import React from 'react';
import styles from "../../src/styles/Searchbar.module.css";

interface Props<T> {
  data: T[];
  setData: React.Dispatch<React.SetStateAction<T[]>>;
}

// interface Data {
//   slug: string;
//   name: string;
// }

// interface Person extends Data {
//   house: { name: string; slug: string };
//   quotes: string[];
// }

// interface House extends Data {
//   members: { name: string; slug: string }[];
// }

export default function Searchbar<T>({ data, setData }: Props<T>) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const searchQuery = (e.target as any).elements.searchQuery.value;
    setData(
      data.filter((info) => {
        if (typeof info === 'object' && info !== null) {
          const objectInfo = info as { name?: string };
          return objectInfo.name && objectInfo.name.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
      })
    );
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name='searchQuery' type="text" className={styles.input} />
      <button className={styles.btn} type='submit'>search</button>
    </form>
  );
}
