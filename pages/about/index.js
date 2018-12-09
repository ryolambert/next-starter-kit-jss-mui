import React from 'react'
import Head from 'next/head'
import Page from '../../containers/Page'
import Link from '../../components/Link'

const About = () => (
  <Page>
    <Head>
      <title>About - Next Start Kit</title>
    </Head>

    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, atque
      sit quaerat aspernatur. Perferendis soluta quas dolorum porro enim
      reprehenderit molestiae odit odio! Dolore et dolor distinctio corporis,
      impedit voluptatem.
    </p>
    <p>
      <Link href="/">Go to back home</Link>
    </p>
  </Page>
)

export default About