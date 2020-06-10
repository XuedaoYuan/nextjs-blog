import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/Alert/index'
export default function FirstPost() {
	return (
		<Layout home={false}>
			<Head>
				<title>First Post</title>
			</Head>
			<h1 className="h1h1">First Post</h1>
			<h2>
				<Link href="/">
					<a>back to home!</a>
				</Link>
			</h2>
			<div>
				<img src="/imgs/test.png" alt="" />
			</div>
			<div>
				<Alert type="success">alert test</Alert>
			</div>

			<style jsx>
				{`
					.h1h1 {
						color: red;
					}
				`}
			</style>
		</Layout>
	)
}
