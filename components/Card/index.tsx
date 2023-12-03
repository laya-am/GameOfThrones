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
    <li className={styles.card}>
    {person ?
        <>
        <Image src={`/assets/characters/${slug}.jpeg`} width="120" height="120" alt="char" className={styles.image} />
        <Link href={`persons/${slug}`}>{person} <br/> {house && ` of ${house}`}</Link>
        </>
        :
        <Link href={`houses/${slug}`}>{house}</Link>
    }
    </li>
  )
}
