import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons' 
import { useStaticQuery , graphql  } from 'gatsby'
import { motion } from "framer-motion"
import { ImageQuery } from "@@/gatsby-graphql"

library.add(fab)

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
                  qitta
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
      <motion.li  whileHover={{ scale: 1.4 }} >
        <a
          href={`https://twitter.com/${siteMetadata.social.twitter}`}
          target="_blank"  rel="noopener noreferrer"  
        >
          <FontAwesomeIcon icon={['fab', 'twitter']} className="text-blue-400 text-lg"/>
        </a>
      </motion.li>
    )}
    {/* {siteMetadata.social.github && (
      <motion.li  whileHover={{ scale: 1.3 }} >
        <a
          href={`https://qiita.com/${siteMetadata.social.qitta}`}
          target="_blank"  rel="noopener noreferrer" 
        >
          <FontAwesomeIcon icon={['fab', 'quora']}  className="text-red-400 text-lg"/>
        </a>
      </motion.li>
    )} */}
    {siteMetadata.social.github && (
      <motion.li  whileHover={{ scale: 1.3 }} >
        <a href={`https://github.com/${siteMetadata.social.github}`}
        target="_blank"  rel="noopener noreferrer" 
        >
        <FontAwesomeIcon icon={ ['fab','github'] } className="text-indigo-400 text-lg"/>

        </a>
      </motion.li>
    )}
  </div>
  <p className="text-blue-800 text-center tracking-wide text-sm p-1">©2020 {siteMetadata.author} </p>
</ul>
)}

export default Social