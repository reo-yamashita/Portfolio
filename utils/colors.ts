export const color_name = ['blue-500','teal-500','teal-400','purple-500','blue-400','gray-500','red-400','indigo-100','blue-100' ]

export const Colors = ( category:string ) => {

  if(category === 'react'){
    return color_name[0]
  }else if(category === 'vue'){
    return  color_name[1]
  }else if(category === 'nuxt'){
    return color_name[2]
  }else if(category=== 'gatsby'){
    return color_name[3]
  }else if(category=== 'tailwind'){
    return color_name[4]
  }else {
    return color_name[5]
  }
}

