import Link from 'next/link';
import './post.scss';
const Post = ({ post }) => {
	return (
		<div className='post'>
			<div className='post__container'>
				<Link className='post__link' href='/'>
					Назад
				</Link>
				<br />
				<div className='post__title'>{post.title}</div>
				<div className='post__body'>{post.body}</div>
				<div className='post__info'>
					<ul className='post__tags tags'>
						<p className='tags__text'>Теги:</p>
						{post.tags.map((tag, index) => (
							<li className='tags__item' key={index}>
								{tag}
							</li>
						))}
					</ul>
					<div className='post__reactions reactions'>
						<div className="reactions__item">
							<span className="post__text">Лайков:</span>
							<span>{post.reactions.likes}</span>
						</div>
						<div className="reactions__item">
							<span className="post__text">Дизлайков:</span>
							<span>{post.reactions.dislikes}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
