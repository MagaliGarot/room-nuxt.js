import Vue from 'vue'

const components = {
  Chambres: () => import('../../components/Chambres.vue' /* webpackChunkName: "components/chambres" */).then(c => c.default || c),
  Headers: () => import('../../components/Headers.vue' /* webpackChunkName: "components/headers" */).then(c => c.default || c),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
