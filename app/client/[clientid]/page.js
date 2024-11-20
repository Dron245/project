import Link from 'next/link'
export default function ClientId({params}) {
	
	return (
		<div>
			<h1>клиент id {params.clientid}</h1>
			<Link href="/">Главная</Link><br/>
			<Link href="/client/show">клиент show</Link>
		</div>
	);
 }