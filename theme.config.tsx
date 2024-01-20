import { useConfig } from "nextra-theme-docs"

export default {
  logo: <span>ZkNoid Project</span>,
  project: {
    link: 'https://github.com/ZkNoid'
  },
  docsRepositoryBase: 'https://github.com/ZkNoid/docs',
  head: () => {
    const config = useConfig();
    const title = `${config.title} – ZkNoid`;
    return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={"/favicon.ico"}
      />
      <meta property="og:title" content={title} />
    </>
  )},
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://zknoid.io/" target="_blank">
          ZkNoid
        </a>
        .
      </span>
    )
  },
  useNextSeoProps: () => ({
    titleTemplate: '%s – ZkNoid'
  }),
}

