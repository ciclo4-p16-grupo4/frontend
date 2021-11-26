<template>
  <InmuebleDetail />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import InmuebleDetail from '../components/details/InmuebleDetail.vue'

export default {
  name: 'Details',
  components: {
    HelloWorld,
    InmuebleDetail
  }
}
</script>
