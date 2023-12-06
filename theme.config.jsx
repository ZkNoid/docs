export default {
  logo: <span>ZkNoid Project</span>,
  project: {
    link: 'hhttps://github.com/aii23/MinaZKanoid'
  },

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

