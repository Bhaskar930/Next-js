import Link from "next/link";

export default function Home(){
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">

     
      Todo Application
      <br />
      <Link href="/signin" >Sign In to Todo App</Link>
      <br />
      <Link href="/signup">Sign Up to t </Link>

    </div>
     </div>
  );
}