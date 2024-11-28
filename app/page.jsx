import Link from 'next/link';
import Image from 'next/image';
import img from '@img/benefits.jpg';
async function fethdata() {
	const resp = await fetch('https://dummyjson.com/posts?limit=4');
	const data = await resp.json();
	return data;
}
export default async function Home() {
	const resp = await fethdata();
	const {posts} = resp;

	return (
		<>
			<div className='posts__container'>
				<h1 className='title'>Привет</h1>
				<Image src={img} alt='Picture of the author' />
				{posts.map((post) => (
					<div key={post.id} className='posts'>
						<h2 className='posts__title'>{post.title}</h2>
						<p className='posts__text'>{post.body}</p>
						<Link className='posts__link' href={'/posts/' + post.id}>
							Подробнее
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
