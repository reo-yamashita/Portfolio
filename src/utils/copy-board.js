const copyToClipboard = (str) => {
  var newStr = str.replace(/\/\/h(.*)/g, "")
  const clipboard = window.navigator.clipboard
  //console.log(newStr)
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   *
   */

  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`)
    textarea.value = str
    textarea.setAttribute(`readonly`, "true")
    textarea.setAttribute(`contenteditable`, "true")
    textarea.style.position = `absolute`
    textarea.style.left = `-9999px`
    document.body.appendChild(textarea)
    textarea.select()
    const range = document.createRange()
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand(`copy`)
    document.body.removeChild(textarea)
    return Promise.resolve(true)
  }

  return clipboard.writeText(newStr)
}

export default copyToClipboard
