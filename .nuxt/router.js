import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _baae59fe = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "pages/article" */))
const _7453852b = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4ff9f5ac = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _0d04609b = () => interopDefault(import('../pages/validate.vue' /* webpackChunkName: "pages/validate" */))
const _2be99ba2 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _42a17314 = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _46963cc6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _baae59fe,
    name: "article"
  }, {
    path: "/contact",
    component: _7453852b,
    name: "contact"
  }, {
    path: "/products",
    component: _4ff9f5ac,
    name: "products"
  }, {
    path: "/validate",
    component: _0d04609b,
    name: "validate"
  }, {
    path: "/blog/:slug?",
    component: _2be99ba2,
    name: "blog-slug"
  }, {
    path: "/products/:id",
    component: _42a17314,
    name: "products-id"
  }, {
    path: "/",
    component: _46963cc6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
