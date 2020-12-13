import React from 'react'
import { useStaticQuery , graphql  } from 'gatsby'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Social = () => {
  const data = useStaticQuery(graphql`
    query  Image  {
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

const {siteMetadata } = data.site

return (
<ul className="mx-2 mt-2">
  <div className="flex justify-center space-x-6">
    {siteMetadata.social.twitter && (
      <li className="hover:scale-150">
        <a
          href={`https://twitter.com/${siteMetadata.social.twitter}`}
          target="_blank"  rel="noopener noreferrer"
        >
          <TwitterIcon  className="text-blue-400"/>
        </a>
      </li>
    )}
    {siteMetadata.social.github && (
      <li>
        <a href={`https://github.com/${siteMetadata.social.github}`}
        target="_blank"  rel="noopener noreferrer" 
        >
          <GitHubIcon className="text-gray-600"  />
        </a>
      </li>
    )}
  </div>
  <p className="text-blue-800 text-center tracking-wide text-xs p-1 mt-2">©2020 {siteMetadata.author} </p>
</ul>
)}

export default Social