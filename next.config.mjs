import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})
 
export default withNextra({
  redirects: () => [
    {
      source: '/',
      destination: '/docs/',
      statusCode: 301
    },
  ]
})
