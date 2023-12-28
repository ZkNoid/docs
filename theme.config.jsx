export default {
  logo: <span>ZkNoid Project</span>,
  project: {
    link: 'https://github.com/ZkNoid'
  },

  head: (
    <>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={"/favicon.ico"}
      />
      </>
  ),
  footer: {
    text: (
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

