import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

function getData() {
	return Promise.resolve([1, 2, 3])
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	const list = await getData()
	return {
		props: {
			allPostsData,
			list
		}
	}
}
export default function Home({ allPostsData, list }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Hello, My name is Xuedao Yuan, a web developer!]</p>
				<p>
					<Link href="/posts/first-post">
						<a>goto post</a>
					</Link>
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
			<>
				{list.map((num) => (
					<div key={num} className="number">
						{num}
					</div>
				))}
			</>
			<style jsx>
				{`
					.number {
						color: red;
					}
				`}
			</style>
		</Layout>
	)
}
