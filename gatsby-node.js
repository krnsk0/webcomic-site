const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)

  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allPagesJson(limit: $limit) {
          edges {
            node {
              image
              date
              body
              page_number
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allPagesJson.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `/page/${node.page_number}`,
        component: pageTemplate,
        context: {
          image: node.image,
          date: node.date,
          body: node.body,
          page_number: node.page_number,
        },
      })
    })
  })
}
