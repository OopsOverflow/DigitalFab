import Aside from "./components/Aside";


export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Digital Fabrication',
    }
  },
  logo: <span>Digital Fab Journey</span>,
  project: {
    link: 'https://github.com/OopsOverflow/digitalfab',
  },
  docsRepositoryBase: 'https://github.com/OopsOverflow/DigitalFab',
  toc: {
    float: true,
  },
  sidebar: {
    toggleButton: true,
  },
  components: {
    Aside: Aside,
  },
  footer: {
    text: <span>{new Date().getFullYear()} © Houssem Mahmoud</span>
  }
};
