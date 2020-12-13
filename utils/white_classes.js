const  {color_name } = require('./colors')

const prefixes = ['text','bg', 'hover:bg', 'border', ]

exports.white_classes = prefixes.reduce( (acc, cur) => {
   const list = color_name.map( (item) => cur + '-' + item )
   return [...list,...acc]
 },[])
