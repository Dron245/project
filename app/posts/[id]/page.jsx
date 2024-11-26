import Post from '@/app/components/Post/Post';

async function fethdata(id) {
	const resp = await fetch('https://dummyjson.com/posts/' + id);
	const data = await resp.json();
	return data;
}

const PostPage = async ({ params }) => {
	const post = await fethdata(params.id);
	console.log(params);
	return <Post post={post} />;
};

export default PostPage;
