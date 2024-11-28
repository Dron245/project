import Link from 'next/link'
export default async function ClientId({params}) {
	const { clientId } = await params
	return (
		<div>
			<h1>клиент id {clientId}</h1>
			<Link href="/">Главная</Link><br/>
			<Link href="/client/show">клиент show</Link>
		</div>
	);
 }