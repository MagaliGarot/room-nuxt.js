import Vue from 'vue'

const components = {
  Chambres: () => import('../../components/Chambres.vue' /* webpackChunkName: "components/chambres" */).then(c => c.default || c),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Headers: () => import('../../components/Headers.vue' /* webpackChunkName: "components/headers" */).then(c => c.default || c),
  Map: () => import('../../components/Map.vue' /* webpackChunkName: "components/map" */).then(c => c.default || c),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c),
  Notfound: () => import('../../components/Notfound.vue' /* webpackChunkName: "components/notfound" */).then(c => c.default || c),
  Slider: () => import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
