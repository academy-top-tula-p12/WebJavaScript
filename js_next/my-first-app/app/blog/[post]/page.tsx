import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{post: string}>
}){
    const post = (await params).post
    return(
        <h1>Post {post}</h1>
    )
}
