import React from 'react'
import { useStaticQuery , graphql  } from 'gatsby'
import { ImageQuery } from "@@/gatsby-graphql"

const Social = () => {
  const data = useStaticQuery<ImageQuery>(graphql`
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
  <div className="flex justify-center space-x-8">
    {siteMetadata.social.twitter && (
      <li className="hover:scale-150">
        <a
          href={`https://twitter.com/${siteMetadata.social.twitter}`}
          target="_blank"  rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  
               className="text-blue-400 text-lg h-6 transitio duration-200 origin-center transform hover:scale-125">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </a>
      </li>
    )}
    {siteMetadata.social.github && (
      <li>
        <a href={`https://github.com/${siteMetadata.social.github}`}
        target="_blank"  rel="noopener noreferrer" 
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
             className="text-indigo-400 text-lg h-6 transitio duration-200 origin-center transform hover:scale-125">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        </a>
      </li>
    )}
  </div>
  <p className="text-blue-800 text-center tracking-wide text-xs p-1">©2020 {siteMetadata.author} </p>
</ul>
)}

export default Social