import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import cn from 'classnames'

import { Layout } from '../../../components/Layout'

import { getSortedPostsData } from '../../../lib/posts'

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  console.log({ context: context.req.headers })

  return {
    props: {
      allPostsData
    }
  }
}

import styles from './project.module.scss'

export default function Project({ allPostsData }) {
    return (<Layout>
        <Head>
            <title className>Проект</title>
        </Head>
        <h1 className={cn(styles.Title)}>Проекты</h1>
        
        <section>
          <h2 >Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={'/projects/' + id}>
                <li key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                </li>
              </Link>
            ))}
          </ul>
        </section>
        <Link href='/'>Домой</Link>
    </Layout>)
}