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
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      const context = {
        page_number: edge.node.frontmatter.page_number,
        image: edge.node.frontmatter.image.slice(1),
        date: edge.node.frontmatter.date,
        body: edge.node.html,
        total_count: result.data.allMarkdownRemark.totalCount,
      }

      // make /page/page_number
      createPage({
        path: `/page/${edge.node.frontmatter.page_number}`,
        component: pageTemplate,
        context,
      })

      // if the last page, also make homepage
      if (
        result.data.allMarkdownRemark.totalCount ===
        edge.node.frontmatter.page_number
      ) {
        createPage({
          path: `/`,
          component: pageTemplate,
          context,
        })
      }
    })
  })
}
