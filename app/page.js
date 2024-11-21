import Link from "next/link";
export default function Home() {
	return (
		<div className="container test">
			<h1>Привет</h1>
			<Link href="/client">Клиент</Link><br/>
			<Link href="/client/show">show</Link>
		</div>
	);
}