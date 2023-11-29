import Link from "next/link";

interface Props{
    name: string;
    slug: string;
}

export default function Card({name, slug}: Props) {
  return (
    <div className="card my-4" style={{"width": "30%"}} data-bs-theme="dark">
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="card-body">
    {/* <h5 className="card-title">{name}</h5> */}
    <Link href={`houses/${slug}`} className="card-link .a">{name}</Link>
  </div>
</div>
  )
}
