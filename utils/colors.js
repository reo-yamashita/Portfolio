const color_name = ['blue-500','teal-500','teal-400','purple-500','blue-400','gray-500','red-400','red-500','indigo-100','blue-100']
exports.color_name = color_name

exports.Colors = ( category ) => {

  if(category === 'react' || category === 'typescript'){
    return color_name[0]
  }else if(category === 'vue'){
    return  color_name[1]
  }else if(category === 'nuxt'){
    return color_name[2]
  }else if(category=== 'gatsby'){
    return color_name[3]
  }else if(category=== 'tailwind' || category=== 'sapper'){
    return color_name[4]
  }else if(category=== 'svelte'){
    return color_name[6]
  }else if(category=== 'rollup'){
    return color_name[7]
  }else {
    return color_name[5]
  }
}
