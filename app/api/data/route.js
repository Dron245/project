export async function GET() {
	const data = {
		name : 'Andrey',
		age : 37
	}
	return new Response(JSON.stringify(data))
}
export async function POST(responce) {
	
	return new Response(responce.body)
}