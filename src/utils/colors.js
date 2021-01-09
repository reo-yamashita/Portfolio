const color_name = [
  { bg: "bg-blue-400", text: "text-blue-400" },
  { bg: "bg-teal-400", text: "text-teal-400" },
  { bg: "bg-emerald-400", text: "text-emerald-400" },
  { bg: "bg-indigo-500", text: "text-indigo-500" },
  { bg: "bg-lightblue-400", text: "text-lightblue-400" },
  { bg: "bg-gray-400", text: "text-gray-400" },
  { bg: "bg-red-400", text: "text-red-400" },
  { bg: "bg-rose-400", text: "text-rose-400" },
]
exports.color_name = color_name

exports.Colors = (category) => {
  if (category === "react" || category === "typescript") {
    return color_name[0]
  } else if (category === "vue") {
    return color_name[1]
  } else if (category === "nuxt") {
    return color_name[2]
  } else if (category === "gatsby") {
    return color_name[3]
  } else if (category === "tailwind" || category === "sapper") {
    return color_name[4]
  } else if (category === "svelte") {
    return color_name[6]
  } else if (category === "rollup") {
    return color_name[7]
  } else {
    return color_name[5]
  }
}
