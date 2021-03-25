export { default as Chambres } from '../../components/Chambres.vue'
export { default as Headers } from '../../components/Headers.vue'
export { default as Navigation } from '../../components/Navigation.vue'

export const LazyChambres = import('../../components/Chambres.vue' /* webpackChunkName: "components/chambres" */).then(c => c.default || c)
export const LazyHeaders = import('../../components/Headers.vue' /* webpackChunkName: "components/headers" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c)
