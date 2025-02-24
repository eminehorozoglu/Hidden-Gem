import Link from "next/link"
export default function Header(){
    return(
        <>
       <nav >
        <Link href={"/"}>Home   </Link>
        <Link href={"/foods"}>foods Page  </Link>
        <Link href={"/"}>link2 </Link>

       

      </nav>
        </>
    )
}