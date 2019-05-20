export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ce33f1f8d75b2b812fc154b',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-9zjnpa68',
                  apiId: '549b3387-5c01-441d-8643-568cfdfd0ba1'
                },
                {
                  buildHookId: '5ce33f1f7abde98e897aa94a',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-sakarxcq',
                  apiId: 'd01a5f40-f778-4fe3-b72a-40455259d994'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jekrb/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-sakarxcq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
