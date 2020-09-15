import React from 'react'
import { Link,  GatsbyBrowser } from "gatsby"
import { MDXProvider } from '@mdx-js/react'
import Code from '@components/code'
import { Caution, InfoBar, LeftBar, List, SolidBar, Title, TopBar } from "@components/bars"
import {  TypePre } from './allTypes/gatsby-type'

const BasicComponents = {    
  pre: ({ children }: TypePre)=> { 
    const child = children.props
      if (child.mdxType === 'code') {
        return (
          <Code
            codeString={child.children.trim()}
            language={child.className.replace('language-', '')}
            title={child.title}
            highlight={child.highlight}
            live={child.live}
            light={child.light}
          />
        )
      }else return null
  },
  p: (props: any)  => 
    <p style={{marginBottom: '1.5rem'}} {...props} />,
  ul:(props: any) => 
    <ul style={{marginLeft: ' 1.5rem'}} {...props} />,
  ol: (props: any)  =>
    <ol style={{marginLeft: '1.5rem'}} {...props} />,
  li: (props: any)  => 
    <li style={{marginBottom: 'calc(1.5rem / 2)'}} {...props} />,
}

const BarsComponents = {
  Link,
  TopBar, 
  InfoBar, 
  SolidBar, 
  LeftBar, 
  Title, 
  List, 
  Caution, 
}

const Root: GatsbyBrowser["wrapRootElement"]  = ({ element }) => {

  return (
  <MDXProvider components={{...BarsComponents, ...BasicComponents}} >
    {element}
  </MDXProvider>
)}


export default Root