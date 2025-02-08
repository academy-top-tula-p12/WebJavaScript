import Link from "next/link";


export default function Page(){
    return(
        <div>
            <h1 className="text-red-500 underline">Blog page</h1>
            <Link href="blog/post-11">Post 11</Link>
        </div>
    );
}