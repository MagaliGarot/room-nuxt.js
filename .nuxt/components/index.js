export { default as Chambres } from '../../components/Chambres.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Headers } from '../../components/Headers.vue'
export { default as Map } from '../../components/Map.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Notfound } from '../../components/Notfound.vue'
export { default as Slider } from '../../components/Slider.vue'

export const LazyChambres = import('../../components/Chambres.vue' /* webpackChunkName: "components/chambres" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeaders = import('../../components/Headers.vue' /* webpackChunkName: "components/headers" */).then(c => c.default || c)
export const LazyMap = import('../../components/Map.vue' /* webpackChunkName: "components/map" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c)
export const LazyNotfound = import('../../components/Notfound.vue' /* webpackChunkName: "components/notfound" */).then(c => c.default || c)
export const LazySlider = import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => c.default || c)
