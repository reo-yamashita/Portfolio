export type TypeTopPosts = {
  title?: string;  
  color?: string;
  children: React.ReactChild;
}

export type TypeCaution = {
  conclution: string;
  children: React.ReactNode;
}

export type TypeInfoBar = {
  title: string;
  details: string;
}

export type TypeLeftBar = {
  title: string;
  details: string;
}

export type TypeList = {
  list_item: string[];
}

export type TypeSolidBar = {
  children: React.ReactNode;
}

export type TypeTitle = {
  children: React.ReactNode;
}

export type TypeTopBar = {
  title: string;
  details: string;
}
///////////////////////////////////////

export type TypeSEO = {
  title: string;
  desc: string;
  pathname: string;
  article: boolean;
}
//////////////////

export type TypePiece = { 
  title: string;
  date: string;
  tech: string[];
  link: string;
  children: React.ReactNode
 }
 
 export type TypePin = {
  name?: string;
  color?: string;
}

export type TypeLayout = {
  location?: string
  children: React.ReactNode;
}

export type TypeCode = {
  codeString:string;
  language?: string; 
  title?:string; 
  highlight?:string; 
  light? :boolean;
  svelte?: boolean;
}

export type TypePre = {
  children: {
   props?: {
     mdxType?: string;
     className?: string;
     children?: string;
     title?: string;
     highlight?: string
     light?: boolean;
     svelte?: boolean;
   }
  }
 }
 
 type ComponentType =
| 'a'
| 'blockquote'
| 'code'
| 'delete'
| 'em'
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'hr'
| 'img'
| 'inlineCode'
| 'li'
| 'ol'
| 'p'
| 'pre'
| 'strong'
| 'sup'
| 'table'
| 'td'
| 'thematicBreak'
| 'tr'
| 'ul'
 
export type TypeComponents = {
[key in ComponentType]?: React.ComponentType<{children: React.ReactNode}> ;
}
