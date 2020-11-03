// Bars Components Type
export type TypeTopPosts = {
  title?: string;  
  color?: string;
  children: React.ReactNode;
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

// SEO Component Type
export type TypeSEO = {
  title: string;
  desc: string;
  pathname: string;
  article: boolean;
}

// work piece type
export type TypePiece = { 
  title: string;
  date: string;
  tech: string[];
  link: string;
  children: React.ReactNode
}

// layouts type
export type TypeLayout = {
  location?: string
  children: React.ReactNode;
}

// code (in MDX) type
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
