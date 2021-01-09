import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"

const Social = () => {
  const data = useStaticQuery(graphql`
    query Image {
      site {
        siteMetadata {
          title
          description
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  return (
    <>
      <ul className="flex justify-center space-x-6">
        {siteMetadata.social.twitter && (
          <li className="hover:scale-150">
            <a
              href={`https://twitter.com/${siteMetadata.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="text-lightblue-300 hover:text-lightblue-400 transition-colors" />
            </a>
          </li>
        )}
        {siteMetadata.social.github && (
          <li>
            <a
              href={`https://github.com/${siteMetadata.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="text-gray-400 hover:text-gray-500 transition-colors" />
            </a>
          </li>
        )}
      </ul>
      <p className="select-none text-lightblue-700 text-center tracking-wide text-xs mt-2">
        ©2021 {siteMetadata.author}
      </p>
    </>
  )
}

export default Social
