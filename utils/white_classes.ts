import { color_name }  from './colors'

const prefixes = ['text','bg', 'hover:bg', 'border', ]

export const white_classes: string[] = prefixes.reduce( (acc, cur) => {
   const list = color_name.map( (item) => cur + '-' + item )
   return [...list,...acc]
 },[])

