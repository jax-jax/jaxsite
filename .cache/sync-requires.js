// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/Watson/jaxsite/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/Watson/jaxsite/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Watson/jaxsite/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Watson/jaxsite/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/Watson/jaxsite/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Watson/jaxsite/src/pages/index.js")),
  "component---src-pages-new-page-js": preferDefault(require("/Users/Watson/jaxsite/src/pages/new-page.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/Watson/jaxsite/src/pages/work.js"))
}

exports.json = {
  "layout-index.json": require("/Users/Watson/jaxsite/.cache/json/layout-index.json"),
  "hello-world.json": require("/Users/Watson/jaxsite/.cache/json/hello-world.json"),
  "my-second-post.json": require("/Users/Watson/jaxsite/.cache/json/my-second-post.json"),
  "hi-folks.json": require("/Users/Watson/jaxsite/.cache/json/hi-folks.json"),
  "dev-404-page.json": require("/Users/Watson/jaxsite/.cache/json/dev-404-page.json"),
  "about.json": require("/Users/Watson/jaxsite/.cache/json/about.json"),
  "contact.json": require("/Users/Watson/jaxsite/.cache/json/contact.json"),
  "index.json": require("/Users/Watson/jaxsite/.cache/json/index.json"),
  "new-page.json": require("/Users/Watson/jaxsite/.cache/json/new-page.json"),
  "work.json": require("/Users/Watson/jaxsite/.cache/json/work.json")
}