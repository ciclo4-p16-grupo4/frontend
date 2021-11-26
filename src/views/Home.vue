<template>
  <Portada />
  <SectionCiudad />
  <SectionReciente />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Portada from '../components/home/Portada.vue'
import SectionCiudad from '../components/home/CustomSection1.vue'
import SectionReciente from '../components/home/CustomSection2.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Portada,
    SectionCiudad,
    SectionReciente
  }
}
</script>
