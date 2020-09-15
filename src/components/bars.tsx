import { TypeCaution, TypeInfoBar, TypeLeftBar, TypeList, TypeSolidBar, TypeTitle, TypeTopBar } from '@@/allTypes/gatsby-type'
import React  from 'react'

const Caution = ({ conclution, children }: TypeCaution) => {
  return(
  <div role="alert" className="inline-block">
    <div className="bg-red-500 text-white font-bold rounded-t px-4 py-1">
    Attention !!
    </div>
    <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700 
    　　text-sm sm:text-base">
      <p className="px-1 pb-3 pt-2 text-base tracking-wide">{conclution}</p>
      <p className="px-4 text-sm text-orange-800 tracking-wider">{children}</p>
    </div>
  </div>
)}

const InfoBar= ({ title, details }: TypeInfoBar) => {
  return(
  <div className="select-none bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 m-2" role="alert">
    <p className="font-bold">{title}</p>
    <p className="text-sm">{details}</p>
  </div>
)}

const LeftBar = ({ title, details }: TypeLeftBar) => {
  return(
  <div className="select-none bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 m-2" role="alert">
    <p className="font-bold">{title}</p>
    <p>{details}</p>
  </div>
)}

const List = ({ list_item }: TypeList) => {
  return(
  <ul className="inline-block rounded-lg list-inside border border-blue-300 px-4 py-3 mx-5 mb-4 space-y-2">
    {list_item.map( item => {
      return (
        <li key={item}>{item}</li>
      )
    })}
  </ul>
)}

const SolidBar = ({ children }: TypeSolidBar) => {
  return(
  <div className="select-none flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 m-2" role="alert">
  <div  className="py-1"> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      className="h-8 text-teal-500 mr-4 text-xl" />
    </svg>
  </div>
  <p>
    {children}
  </p>
  </div>
)}

const Title = ({ children }: TypeTitle) => {
  return(
  <div className="select-none my-8 border-l-4 border-indigo-800">
    <p className="text-2xl text-blue-900 tracking-wide pl-3">{children}</p>
  </div>
)}

const TopBar = ({ title, details }: TypeTopBar) => { 

  return(
  <div className="select-none bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md m-2" role="alert">
    <div className="flex">
      <div  className="py-1"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="h-8 text-teal-500 mr-4 text-xl" />
        </svg>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm">{details}</p>
      </div>
    </div>
  </div>
)}

export  { Caution, InfoBar, LeftBar, List, SolidBar, Title, TopBar }