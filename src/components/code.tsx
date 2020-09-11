import React , { useState ,useCallback} from 'react'
import Highlight, { defaultProps, Prism }  from 'prism-react-renderer'
import theme   from '@@/config/prismStyle'
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import copyToClipboard from '@@/utils/copy-board'
import {
  LiveProvider,
// LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { TypeCode } from '@@/allTypes/gatsby-type';

const range = (start: number, end: number) => { 
  let list = [];
  for (let i = start; i <= end; i++ ) {
    list.push(i)
  }
  return list;
}

const HighlightClassName = ' highlight-line'

const LinesToHighlight = (light: string, index: number): boolean => {
  const Try = /([\d,-]+)/
  if (Try.test(light)) { 
    const lineNumbers= Try.exec(light)[1]
    const result = lineNumbers.split(/,/)

    let allselectedNum: number[] = []
    result.forEach(( num ) => {
      if((/-/).test(num)) {
        const PairNum = num.split('-').map(Number)
        const NumResultLong = range(PairNum[0] , PairNum[1])
        allselectedNum = [...NumResultLong]
          }else{
              const AloneNum = Number(num)
              allselectedNum.push(AloneNum) 
          }
      })

    const finalnums =[...new Set(allselectedNum)]
    return finalnums.includes(index + 1)
  }else return false
}

let highlightFlag = false

const isHighlightedLine = (lineArray: {content: string}[]) =>{ 
let flag = false
  lineArray.forEach( (line) => {
    const content = line.content
      if( (/\/\/highlight$/).test(content) ){ 
        flag = true
      }else if( (/\/\/highlight-start$/).test(content)){
        highlightFlag = true
      }else if (highlightFlag && (/\/\/highlight-end$/).test(content)){
        flag = true
        highlightFlag = false
      }
    line.content = content.replace( /\/\/highlight(.*)/g , '' )
  })
  
  return (highlightFlag || flag)   
}

const Code = ({ 
    codeString,
    language, 
    title, 
    highlight, 
    light ,
    live,
  }: TypeCode) => {
    
const [value, setValues] = useState<[string, boolean]>(['Copy', false]) 
  const handleClick = useCallback(() => {
    copyToClipboard(codeString)   
    setValues(['Copied', true])
      setTimeout( () => { 
        setValues(['Copy', false])
      },5000)
  },[codeString])

return (
<Highlight
 theme={theme}
 Prism={Prism}
  code={codeString}
  language={language}
>
  {({className,
    tokens,
    getLineProps,
    getTokenProps
  }) => { 
  return(
    <div className="mb-3">
      <div className="gatsby-title">
        {title && (
          <div className="code-surface-spread  px-5 py-3 leading-none bg-orange-100 rounded-t-md border-b border-orange-200">
            <p className="text-orange-900 text-sm px-3 select-none leading-none">{title}</p> 
          </div>
        )}
      </div>
      <div className={`${className} gatsby-highlight code-surface-spread  bg-orange-100 relative`} data-language={language} >
        <pre  className={`language-${language}`}  >
          <div className="px-0 pt-10 pb-6 overflow-auto scrolls">
            <button 
              onClick={handleClick} 
              className={`${title} : ${value[0]} to clipboard mx-4  focus:outline-none
                focus absolute top-0 right-0 text-orange-700 mt-1`}
              disabled={value[1]}
            >
              <p className="rounded-lg hover:bg-indigo-700 hover:text-white font-sans text-sm py-1 px-2 
              transition duration-300 ease-in-out">
                {value[0]}
              </p>
            </button>
            <div className="font-mono text-sm sm:text-sm text-blue-900 tracking-normal px-6 float-left block min-w-full">
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index })  

               if(isHighlightedLine(line) && light) {  lineProps.className += HighlightClassName }
               if(LinesToHighlight(highlight, index) ) { lineProps.className += HighlightClassName }

                return(
                  <div {...lineProps} >
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({token, key: key})
                      return(
                        <span {...tokenProps} />
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </pre>
      </div>
      {live 
      ? 
      <div className="code-surface-spread rounded-b-lg border-b border-r border-l border-orange-300  p-2 mb-8">
        <LiveProvider code={codeString.replace( /\/\/h(.*)/g , '' )} scope={{Highlight, defaultProps, nightOwl }}>
          <LiveError />
          <div className="my-3 mx-4">
            <LivePreview />
          </div>
        </LiveProvider> 
      </div>
      : null}
    </div>
  )}}
</Highlight>
)}

export default Code