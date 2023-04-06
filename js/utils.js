const $myBase = function (src) {
  if (/^https?/.test(src)) return src;
  return `https://fang-6g2x00mca935d11b-1305708135.tcloudbaseapp.com/Karl_Doc_vuepress${src}`
}

export {
  $myBase
}