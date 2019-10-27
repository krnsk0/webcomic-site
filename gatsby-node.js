const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)

  return graphql(
    `
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/.*/data/pages/.*/" } }
        ) {
          edges {
            node {
              frontmatter {
                image
                date
                page_number
              }
              html
            }
          }
          totalCount
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/page/${edge.node.frontmatter.page_number}`,
        component: pageTemplate,
        context: {
          page_number: edge.node.frontmatter.page_number,
          image: edge.node.frontmatter.image,
          date: edge.node.frontmatter.date,
          body: edge.node.html,
          total_count: result.data.allMarkdownRemark.totalCount,
        },
      })
    })
  })
}
