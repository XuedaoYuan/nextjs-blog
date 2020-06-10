import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>

			<br />
			{postData.id}
			<br />
			{postData.date}
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</Layout>
	)
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getAllPostIds()
	// 这里必须使用params 作为key
	/* {
		paths: [
			{
				params: {
					id: 'ssg-ssr'
				}
			},
			{
				params: {
					id: 'pre-rendering'
				}
			}
		]
	} */
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}
