export const data = JSON.parse("{\"key\":\"v-5281cefe\",\"path\":\"/category1/2018/121501.html\",\"title\":\"first page in category1\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"first page in category1\",\"date\":\"2018/12/15\",\"tags\":[\"tag1\"],\"categories\":[\"category1\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"category1/2018/121501.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
