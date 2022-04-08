export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625092bf12d65300c79d979f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-97kgr4zp',
                  apiId: 'd02f8c3b-5d55-4e00-afbd-d196448171a6'
                },
                {
                  buildHookId: '625092bfd793540233b7a6d8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-cgucmshj',
                  apiId: 'aa452a7d-6f2c-4ea6-a287-02ad588fb012'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbowcut/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-cgucmshj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
