export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Một Niệm Vãng Sanh',
      description: 'Tín - Nguyện - Hành',
      ogImage: '/tin-nguyen-hanh.png',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Một Niệm Vãng Sanh',
      showTitle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      darkModeToggle: true,
      nav: [
        {
        title: 'Hòa thượng',
        links: [{
          title: 'HÒA THƯỢNG HƯ VÂN',
          to: '/hu-van-nien-pho',
          description: '',
          target: '_self',
        }, {
          title: 'LIÊN TÔNG THẬP TAM TỔ',
          to: '/lien-tong-thap-tam-to',
          description: '',
          target: '_self',
        }, {
          title: 'HÒA THƯỢNG TỊNH KHÔNG',
          to: '/hoa-thuong-tinh-khong',
          description: '',
          target: '_self',
        }, {
          title: 'THIỀN SƯ CHÍ CÔNG',
          to: '/thien-su-chi-cong',
          description: '',
          target: '_self',
        }],
    },
        {
          title: 'Sách',
          links: [{
            title: 'NIỆM PHẬT TÔNG YẾU',
            to: '/niem-phat-tong-yeu',
            description: '',
            target: '_self',
          }, {
            title: 'THỌ KHANG BẢO GIÁM (壽康寶鑒)',
            to: '/tho-khang-bao-giam',
            description: '',
            target: '_self',
          }, {
            title: 'LƯƠNG HOÀNG SÁM',
            to: '/luong-hoang-sam',
            description: '',
            target: '_self',
          }, {
            title: 'SƠN AM TẠP LỤC',
            to: '/son-am-tap-luc',
            description: '',
            target: '_self',
          }],
        },
        {
          title: 'Video',
          links: [
            {
              title: 'NHẬN THỨC PHẬT GIÁO',
              to: '/nhan-thuc-phat-giao',
              target: '_blank',
            },
            {
              title: 'TRĂM NĂM HƯ VÂN LÃO HÒA THƯỢNG',
              to: 'https://ph.tinhtong.vn/Home/Video/phim-tram-nam-hu-van-lao-hoa-thuong_00000f',
              description: '',
              target: '_blank',
            },
            {
              title: 'NIỆM PHẬT THÀNH PHẬT',
              to: '/niem-phat-thanh-phat',
              description: '',
              target: '_blank',
            },
          ],
        },
        {
          title: '48 NGUYỆN',
          to: '/48-nguyen-cua-duc-phat-a-di-da',
          target: '_blank',
        },
        {
          title: 'TRUYỆN TRANH',
          links: [
            {
              title: '48 Nguyện của A Di Đà Phật',
              to: '/truyen-tranh/48-nguyen-cua-duc-phat-a-di-da',
              target: '_blank',
            },
            {
              title: 'Đức Phật A Di Đà',
              to: '/truyen-tranh/duc-phat-a-di-da',
              description: '',
              target: '_blank',
            },
            {
              title: 'Kinh A Di Đà',
              to: '/truyen-tranh/kinh-a-di-da',
              description: '',
              target: '_blank',
            },
            {
              title: 'Đại Thế Chí Bồ Tát Niệm Phật Viên Thông Chương',
              to: '/truyen-tranh/dai-the-chi-bo-tat-niem-phat-vien-thong-chuong',
              target: '_blank',
            },
            {
              title: 'Thập Thiện Nghiệp Đạo Kinh',
              to: '/truyen-tranh/thap-thien-nghiep-dao-kinh',
              description: '',
              target: '_blank',
            },
            {
              title: 'Thái Thượng Cảm Ứng Thiên',
              to: '/truyen-tranh/thai-thuong-cam-ung-thien',
              description: '',
              target: '_blank',
            },
            {
              title: 'Nhân Quả Cảm Ứng',
              to: '/truyen-tranh/nhan-qua-cam-ung',
              description: '',
              target: '_blank',
            },
            {
              title: 'Niệm Phật Thành Phật',
              to: '/truyen-tranh/niem-phat-thanh-phat',
              description: '',
              target: '_blank',
            },
            {
              title: 'Kinh Địa Tạng - Trọn Bộ',
              to: '/truyen-tranh/kinh-dia-tang-tron-bo',
              description: '',
              target: '_blank',
            },
            {
              title: 'Liễu Phàm Tứ Huấn',
              to: '/truyen-tranh/lieu-pham-tu-huan',
              description: '',
              target: '_blank',
            },
            {
              title: 'Du Tịnh Ý Công Gặp Táo Thần',
              to: '/truyen-tranh/du-tinh-y-cong-gap-tao-than',
              description: '',
              target: '_blank',
            },
            {
              title: 'Văn Xương Đế Quân Âm Chất Văn',
              to: '/truyen-tranh/van-xuong-de-quan-am-chat-van',
              description: '',
              target: '_blank',
            },
            {
              title: 'Đệ Tử Quy 2022 - Đạo Làm Con',
              to: '/truyen-tranh/de-tu-quy-2022',
              description: '',
              target: '_blank',
            },
            {
              title: 'Đức Dục Khải Mông',
              to: '/truyen-tranh/duc-duc-khai-mong',
              description: '',
              target: '_blank',
            },
          ],

        },
      ],
      links: [
        {
          icon: 'lucide:download',
          to: '/download-mp3',
          target: '_blank',
        },
        {
          icon: 'lucide:headphones',
          to: 'https://ph.tinhtong.vn/Home/MP3?p=MP3*-+PS+Tinh+Khong',
          target: '_blank',
        },
        {
          icon: 'lucide:headphones',
          to: 'https://ph.tinhtong.vn/Home/MP3?p=MP3+tinhkhongphapngu',
          target: '_blank',
        },
        {
          icon: 'lucide:film',
          to: 'https://ph.tinhtong.vn/Home/Videos',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {
      credits: '',
      links: [
        /*{
          title: 'shadcn-vue',
          to: 'https://www.shadcn-vue.com/',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },*/
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
     /* links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
        target: '_blank',
      }],*/
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
