import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: '700',
	style:'italic',
	 subsets: ['latin'] 
	})

export default function RootLayout({ children }) {
	console.log(children);
	
  return (
      <div >
			<h1 className={`${roboto.className}`} >qweqweqwe</h1>
        {children}
      </div>
  );
}