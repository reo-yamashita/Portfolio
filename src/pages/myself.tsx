import React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import Layout from '@layouts/main-layout'
import SEO from '@components/SEO'
import Img from 'gatsby-image'

const Myself: React.FC = () => {
  
  const Interesting = [
    {title:'日向坂46',color: 'blue-500'},
    {title:'クラシック音楽',color: 'teal-500'},
    {title:'ヴァイオリン',color: 'purple-500'}
  ]
  
  const data = useStaticQuery(graphql`
    query myselfPic {
      logo1: file(relativePath: {eq: "images/logo1.png"}) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      },
        hinata: file(relativePath: {eq: "images/hinata.jpg"}) {
        childImageSharp {
          fluid( quality: 50, maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (
  <Layout>
      <SEO
      title={'About me'}
      desc={'自己紹介'}
      pathname={'/myself/'}
      article={false}
     />
    <div className="pt-12 w-full">
      <div className="w-full sm:w-10/12  mx-auto px-4 md:pl-40 md:pr-8 md:pb-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-blue-800">About me</h2>
      </div>
    </div> 
    <div className="pt-4">
      <div className="w-full sm:w-10/12 mx-auto px-4 md:pl-40 md:pr-8 max-w-6xl">
        <div className="mb-12 fadeIn_animation mx-auto">
          <div className="pt-4 flex sm:flex-row flex-col-reverse">
            <div className="max-w-sm">
              <h3 className="text-2xl  font-semibold text-gray-800">Handle Name</h3>
              <p className="mt-6 pr-6 tracking-wide fontpalt">
                ハンドルネームは <span className="bg-indigo-100 px-1">なーこぉ</span> といいます。<br/>
                2020年4月からHTML / CSS / JavaScript の勉強を始め、同年9月にこのブログを開設しました。<br/>
                とにかく学ぶことが大好きです。 <br/>
              </p>
            </div>
            <div className="mx-auto my-8 sm:mx-0 sm:ml-12">
              <div className="w-40">
                <Img fluid={data.logo1.childImageSharp.fluid}  alt="My logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-10/12 mx-auto px-4 md:pl-40 md:pr-8 max-w-6xl">
        <div className="mb-24 fadeIn_animation mx-auto">
          <div className="pt-4 flex">
            <div className="max-w-sm  flex-grow">
              <h3 className="text-2xl  font-semibold text-gray-800">Skill</h3>
              <p className="mt-6 pr-6 fontpalt tracking-wide">
                React周りが得意です。<br/>
                JavaScript / HTML / CSS (SASS) 周辺も得意です。 <br/>
                このブログはGatsbyJSのテンプレートテーマを使用せずに、デザイン、スタイリングから構築、デプロイまですべて<span className="bg-indigo-100 px-1">なーこぉ</span>が作りました。
              </p>
              <div className="mt-4 text-red-700 transition-all duration-200 py-1 px-3
              hover:bg-indigo-700 hover:text-white inline-block rounded-lg">
                <a href="https://github.com/nako0215/new-nako-blog"  target="_blank"  rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                    className="h-6 inline-block" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                  <p className="leading-none ml-2 h-4 text-sm inline-block">コードはこちら</p>
                </a>
              </div>
            </div>
            <div className="ml-8 hidden sm:block flex-grow">
              <div className="list-disc flex flex-wrap space-x-6 sm:pl-8 my-8 ">
                <div>
                  <p>HTML5</p>
                  <p>CSS3</p>
                  <p>JavaScript</p>
                </div>
                <div className="list-disc list-inside ">
                  <p>jQuery</p>
                  <span className="text-indigo-800"><p>React</p></span>
                  <p>Vue</p>
                  <p>Svelte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-10/12 mx-auto px-4 md:pl-40 md:pr-8 max-w-6xl">
        <div className="mb-8 fadeIn_animation mx-auto">
          <div className="pt-4">
            <div className="max-w-full">
              <h3 className="text-2xl  font-semibold text-gray-800">I'm into ...</h3>
              <div className="mt-6 pr-6 tracking-wide fontpalt">
                <ul className=" flex flex-wrap">
                  {Interesting.map( (item) => {
                    return(
                      <li  key={`${item.title}`} className={`select-none tracking-wide fontpalt m-1 text-sm rounded-md px-3 py-1 bg-${item.color} text-white`}>
                        {item.title}
                      </li>
                  )})}
                </ul>
                <div className="p-2">
                  <p className="mb-3">小学3年生のころからヴァイオリンを習っています。</p>
                  <p className="mb-3">マーラー、ベートーベン、パガニーニなどをよく聴きます。</p>
                  <p className="mb-3">ベルリンフィルの元コンサートマスター、ガイ・ブランシュタイン(Guy Braunstein)さんの演奏が特に好きです。</p>
                </div>
              </div>
            </div>
          </div>  
          <div className="mt-8">
            <p　className="mb-3">日本のアイドルグループ、日向坂46(ひなたざか46)さんが好きです。</p>
            <p　className="mb-3">丹生明里さん推しです !</p>
          </div>
          <div className="w-56">
            <Img fluid={data.hinata.childImageSharp.fluid}  alt="Hinatazaka"/>
            <p className="text-sm leading-tight mt-1 px-4">初めて東京に行ったときに、麻布十番の近くにある日向坂(ひゅうがざか)にて撮影.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Myself