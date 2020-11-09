import React from 'react'

import Layout from '../templates/layout'
import HeroTitle from '../components/hero-title'
import Content from '../templates/content'
import SEO from '../components/seo'

const NotFound = () => {
  const pageTitle = 'Not Found'
  return (
    <Layout>
      <SEO title={pageTitle} />
      <HeroTitle
        title={pageTitle}
      />
      <Content>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Content>
    </Layout>
  )
}

export default NotFound
