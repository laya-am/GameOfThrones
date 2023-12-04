import Link from "next/link";
import styles from "../../src/styles/Card.module.css"
import Image from "next/image";
interface Props{
    person?: string;
    slug: string;
    house: string
}

export default function Card({person, slug, house}: Props) {
  return (
    <li className={styles.listItem}>
    {person ?
        <Link href={`persons/${slug}`} className={styles.card}>
        <Image src={`/assets/characters/${slug}.jpeg`} width="120" height="120" alt={`${person}'s image'`} className={styles.image} />
        <h3 className={styles.text}>{person} <br/> {house && ` of ${house}`}</h3>
        </Link>
        :
        <Link href={`houses/${slug}`} className={styles.card}>
        <Image src={`/assets/sigils/${slug}.jpeg`} width="120" height="120" alt="char" className={styles.image} />
        <h3 className={styles.text}>{house}</h3>
        </Link>
    }
    </li>
  )
}
