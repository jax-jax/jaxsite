// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/Watson/jaxsite/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/Watson/jaxsite/.cache/dev-404-page.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/Watson/jaxsite/src/pages/about.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/Users/Watson/jaxsite/src/pages/contact.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/Watson/jaxsite/src/pages/index.js"),
  "component---src-pages-new-page-js": require("gatsby-module-loader?name=component---src-pages-new-page-js!/Users/Watson/jaxsite/src/pages/new-page.js"),
  "component---src-pages-work-js": require("gatsby-module-loader?name=component---src-pages-work-js!/Users/Watson/jaxsite/src/pages/work.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/Watson/jaxsite/.cache/json/layout-index.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/Watson/jaxsite/.cache/json/my-second-post.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/Watson/jaxsite/.cache/json/hi-folks.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/Watson/jaxsite/.cache/json/hello-world.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/Watson/jaxsite/.cache/json/dev-404-page.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/Watson/jaxsite/.cache/json/about.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/Watson/jaxsite/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/Watson/jaxsite/.cache/json/index.json"),
  "new-page.json": require("gatsby-module-loader?name=path---new-page!/Users/Watson/jaxsite/.cache/json/new-page.json"),
  "work.json": require("gatsby-module-loader?name=path---work!/Users/Watson/jaxsite/.cache/json/work.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/Watson/jaxsite/.cache/layouts/index.js")
}