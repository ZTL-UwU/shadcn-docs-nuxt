interface DefaultConfig {
  site: {
    name: string;
    description: string;
    ogImage: string;
  };
  theme: {
    customizable: boolean;
    color: Color;
    radius: number;
  };
  header: {
    title: string;
    showTitle: boolean;
    border: boolean;
    logo: {
      light: string;
      dark: string;
    };
    showTitleInMobile: boolean;
    darkModeToggle: boolean;
    nav: ({
      title: string;
      to: string;
      target: string;
      links: ({
        title: string;
        to: string;
        target: string;
        description: string;
      })[];
    })[];
    links: ({
      icon: string;
      to: string;
      target: string;
    })[];
  };
  aside: {
    useLevel: boolean;
    collapse: boolean;
  };
  main: {
    breadCrumb: boolean;
    showTitle: boolean;
    codeCopyToast: boolean;
    codeIcon: {
      [key: string]: string;
    };
    padded: boolean;
  };
  footer: {
    credits: string;
    links: ({
      icon: string;
      title: string;
      to: string;
      target: string;
    })[];
  };
  toc: {
    enable: boolean;
    enableInMobile: boolean;
    title: string;
    links: ({
      icon: string;
      title: string;
      to: string;
      target: string;
    })[];
  };
  search: {
    enable: boolean;
    inAside: boolean;
    style: 'input' | 'button';
  };
}

type Color =
  | 'zinc'
  | 'slate'
  | 'stone'
  | 'gray'
  | 'neutral'
  | 'red'
  | 'rose'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'violet';
