import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "@layouts/main-layout"
import SEO from "@components/SEO"
import Img from "gatsby-image"

const Myself = () => {
  const Interesting = [
    {
      title: "日向坂46",
      color: "bg-lightblue-300",
      hover: "hover:bg-lightblue-400",
    },
    {
      title: "櫻坂46",
      color: "bg-pink-300",
      hover: "hover:bg-pink-400",
    },
    { title: "乃木坂46", color: "bg-indigo-400", hover: "hover:bg-indigo-500" },
  ]

  const data = useStaticQuery(graphql`
    query myself_img {
      logo: file(relativePath: { eq: "Near_Closer_.png" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hinata: file(relativePath: { eq: "hinata.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={"About me"}
        desc={"introduce myself"}
        pathname={"/myself/"}
        article={false}
      />
      <div className="px-2 max-w-6xl mx-auto">
        <div className="pt-12">
          <div className="sm:w-10/12  mx-auto px-4 lg:pl-40 lg:pr-8 md:pb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-blue-300">
              About <span className="text-lightblue-300">me</span>
            </h2>
          </div>
        </div>
        <div className="pt-4">
          <div className="sm:w-10/12 mx-auto px-4 lg:pl-40 md:pr-8">
            <div className="mb-12 fadeIn_animation mx-auto">
              <div className="pt-4 flex sm:flex-row flex-col-reverse justify-center">
                <div className="max-w-sm pr-6">
                  <h3 className="text-2xl  font-semibold tracking-wide text-red-400">
                    Handle Name
                  </h3>
                  <p className="mt-6 tracking-wide fontpalt leading-9">
                    ハンドルネームは{" "}
                    <span className="bg-lightblue-50 px-2 py-1 rounded-md">
                      なーこぉ
                    </span>{" "}
                    といいます。
                    <br />
                    2020年4月から本格的にJavaScript等の勉強を始め、同年9月にこのサイトを開設しました。
                    <br />
                    <span className="text-orange-500 px-1">Udemy</span>
                    <span className="text-red-500 px-1">YouTube</span>
                    <span className="text-blue-500 px-1">Google検索</span>
                    をフル活用して日々学習しています。
                  </p>
                </div>
                <div className="sm:mx-auto my-8">
                  <div className="w-52 mx-0 sm:ml-12 opacity-80 rounded-full overflow-hidden shadow-md">
                    <Img
                      fluid={data.logo.childImageSharp.fluid}
                      alt="My logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-10/12 mx-auto px-4 lg:pl-40 md:pr-8">
            <div className="mb-12 fadeIn_animation mx-auto">
              <div className="pt-4 flex">
                <div>
                  <h3 className="text-2xl  font-semibold tracking-wide text-lightblue-400">
                    Skill
                  </h3>
                  <div className="max-w-md">
                    <p className="mt-6 fontpalt leading-9">
                      JavaScript / HTML / CSS (SASS) の基礎的な部分は扱えます。
                      <br />
                      分からないことがあった時や、上手くコードが動かないときの調査力(検索力)とグリットは人一倍自信があります。
                    </p>
                    <p className="mt-6 fontpalt leading-9">
                      このブログはGatsbyJSのテンプレートテーマを使用せずに、デザイン、スタイリングから構築、デプロイまですべて{" "}
                      <span className="bg-lightblue-50 px-2 py-1 rounded-md">
                        なーこぉ
                      </span>{" "}
                      が作りました。
                    </p>
                  </div>
                  <div className="mt-2 ml-3 px-3 py-1 text-red-200 hover:bg-lightblue-300 hover:text-white rounded-lg inline-block transition-colors cursor-pointer">
                    <a
                      href="https://github.com/NearCloser/ts-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-sm">コードはこちら</p>
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex justify-center flex-grow ml-8">
                  <div className="mt-8 grid grid-rows-3 grid-flow-col gap-4 sm:gap-8 opacity-80 hover:opacity-95 p-8 shadow-lg rounded-xl transition-opacity select-none">
                    <div className="space-y-1">
                      <p>HTML5</p>
                      <p>CSS3</p>
                      <p>JavaScript</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-blue-800">
                        <p>React</p>
                      </span>
                      <p>Vue</p>
                      <p>Git</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-lightblue-800">
                        <p>Tailwindcss</p>
                      </span>
                      <p>Material-ui</p>
                      <p>Vuetify</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-indigo-800">
                        <p>GatsbyJS</p>
                      </span>
                      <p>NuxtJS</p>
                      <p>NextJS</p>
                    </div>
                    <div className="space-y-1">
                      <p>Firebase</p>
                      <p>Firestore</p>
                      <p>Firestorage</p>
                    </div>
                    <div className="space-y-1">
                      <p>Svelte</p>
                      <p>Sapper</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-10/12 mx-auto px-4 lg:pl-40 md:pr-8">
            <div className="mb-8 fadeIn_animation mx-auto">
              <div className="pt-4">
                <div className="max-w-full">
                  <h3 className="text-2xl font-semibold tracking-wide text-blue-400">
                    I'm into ...
                  </h3>
                  <div className="mt-6 pr-6">
                    <ul className=" flex flex-wrap">
                      {Interesting.map((item) => {
                        return (
                          <li
                            key={`${item.title}`}
                            className={`select-none rounded-md tracking-widest fontpalt m-1 px-4 py-1 text-sm text-white ${item.color} ${item.hover} transition-colors`}
                          >
                            {item.title}
                          </li>
                        )
                      })}
                    </ul>
                    <div className="mt-6 max-w-2xl">
                      <p className="mb-6 fontpalt leading-9">
                        日向坂の推しは丹生明里(にぶあかり)さんです！
                        <br />
                        丹生ちゃんの笑顔をみるとなんだか幸せな気持ちになれます！{" "}
                        <br />
                        日向坂の曲で一番好きなのは、{` `}
                        <span className="bg-lightblue-50">
                          「アザトカワイイ」
                        </span>{" "}
                        {` `}
                        <span className="bg-lightblue-50">
                          「ドレミソラシド」
                        </span>
                        {` `}
                        <span className="bg-yellow-50">「まさか、偶然」</span>
                        {` `}です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-56">
                <Img
                  fluid={data.hinata.childImageSharp.fluid}
                  alt="Hinatazaka"
                />
                <p className="text-sm leading-tight mt-1 px-4">
                  初めて東京に行ったときに、麻布十番の近くにある日向坂(ひゅうがざか)にて撮影.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Myself
