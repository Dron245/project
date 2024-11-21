import Link from 'next/link';
import '../globals.css';
import './style.css'
const Header = () => {
	return (
		<header className="header">
			<div className='container header__wrapper'>
				<Link href='/'>
					<strong>Logo company</strong>
				</Link>
				<Link href='/about'>About</Link>
			</div>
		</header>
	);
};

export default Header;
