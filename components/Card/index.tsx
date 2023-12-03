import Link from "next/link";
import styles from "../../src/styles/Card.module.css"
interface Props{
    person?: string;
    slug: string;
    house: string
}

export default function Card({person, slug, house}: Props) {
  return (
    // <div className="card my-4" style={{"width": "30%"}} data-bs-theme="dark">
  // <img src="..." className="card-img-top" alt="..."> //
//   <div className="card-body">
    // <h5 className="card-title">{name}</h5> //
    <li className={styles.card}>
    {person ?
        <Link href={`persons/${slug}`}>{person} {house && ` of ${house}`}</Link>
        :
        <Link href={`houses/${slug}`}>{house}</Link>
    }
    </li>
  /* </div> */
// </div>
  )
}
