import Link from "next/link";
async function fethdata () {
		const resp = await fetch('https://dummyjson.com/posts?limit=4')
		const data = await resp.json()
		return data
	
}
export default async function Home() {
	const resp = await fethdata()
	const posts = resp.posts

	return (
		<div className="container test">
			<h1>Привет</h1>
			{/* <Link href="/client">Клиент</Link><br/> */}
			{/* <Link href="/client/show">show</Link> */}
			  {posts.map(post=>(
				<div key={post.id} className="posts">
					<h2 className="posts__title">{post.title}</h2>
					<p className="posts__text">{post.body}</p>
					<Link className="posts__link" href={`/posts + ${post.id}`}>Подробнее</Link>
				</div>
			))}  
		</div>
	);
}