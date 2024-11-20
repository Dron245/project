export default function RootLayout({ children }) {
	return (
	  <>
	  	<div className="test">
			<p style={{color:'red'}}>это клиент</p>
			{children}
		</div>
	  </>
	);
 }