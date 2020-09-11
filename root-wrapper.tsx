import React from 'react'
import { Link,  GatsbyBrowser } from "gatsby"
import {MDXProvider} from '@mdx-js/react'
import Code from '@components/code'
import TopBar from "@components/bars/top"
import InfoBar from "@components/bars/info"
import SolidBar from "@components/bars/solid"
import LeftBar from "@components/bars/left"
import Title from "@components/bars/title"
import List from "@components/bars/list"
import Caution from "@components/bars/caution"
import { TypePre, TypeComponents  } from '@@/allTypes/gatsby-type'

const BasicComponents: TypeComponents = {    
  pre: ({ children }: TypePre )=> { 
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
      }else return <pre></pre>
    },
  h1: (props:any) => {
    return (
      <h1 id={encodeURI(props.children.replace( /\s+/g , '-').toLowerCase().replace(/[!.]/g , ''))}
      className="vpoint" {...props} > {props.children }</h1>
    )},
  h2:(props:any) =>
    <h2 id={props.children.replace( /\s+/g , '-').toLowerCase().replace(/[!.]/g , '')} 
    className="vpoint" {...props} >{props.children }</h2>,
  p: (props:any)  => 
    <p style={{marginBottom: '1.5rem'}} {...props} />,
  ul:(props:any) => 
    <ul style={{marginLeft: ' 1.5rem'}} {...props} />,
  ol: (props: any)  =>
    <ol style={{marginLeft: '1.5rem'}} {...props} />,
  li: (props: any)  => 
    <li style={{marginBottom: 'calc(1.5rem / 2)'}} {...props} />,
}

const BarsComponents = {
  Link: Link,
  TopBar: TopBar, 
  InfoBar: InfoBar, 
  SolidBar: SolidBar, 
  LeftBar: LeftBar, 
  Title: Title, 
  List: List, 
  Caution: Caution, 
}

const Root: GatsbyBrowser["wrapRootElement"] = ({ element }) => {

    return (
        <MDXProvider components={{...BarsComponents, ...BasicComponents}} >
            {element}
        </MDXProvider>
    )
}

export default Root