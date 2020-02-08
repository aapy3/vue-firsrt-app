import Vue from 'vue';
import HelloWord from './components/HelloWorld.vue';

const components = {
    HelloWord
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
})

export default components;