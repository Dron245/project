import Post from '@/app/components/Post/Post';
// export async function generateStaticParams() {
// 	const posts = await fetch('https://dummyjson.com/posts', {
// 		cache: 'force-cache'
// 	})
// 	.then((res) => res.json());

// 	return posts.map((post) => ({
// 		id: post.id.toString(),
// 	}));
// }
export async function generateMetadata(props) {
	const params = await props.params;
	const id = await params.id;
	const post = await fethdata(id);
	return {
		title: post.title,
		description: post.body,
	};
}

async function fethdata(id) {
	const resp = await fetch('https://dummyjson.com/posts/' + id);
	const data = await resp.json();
	// console.log(data);
	return data;
}

const PostPage = async ({ params }) => {
	const { id } = await params;
	const post = await fethdata(id);
	// console.log(params);
	return <Post post={post} />;
};

export default PostPage;
