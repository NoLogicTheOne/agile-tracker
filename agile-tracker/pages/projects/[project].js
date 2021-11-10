import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    const project = await getPostData(params.project)
    
    return {
      props: {
        project
      }
    }
}

export default function Project({ project }) {
    return <section>
        <Head>
            <title>{project.project}</title>
        </Head>
        <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
        <Link href='/'>Домой</Link>

        <style jsx>{`
            div {
                color: red;
            }
        `}</style>
    </section>
}
