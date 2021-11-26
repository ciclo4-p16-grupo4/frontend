<template>
  <section class="gallery">
    <div v-if="imagenes.length" class="selected-image" :style="{backgroundImage: `url(${selected?.url || imagenes[0].url})`}">
    </div>
    <div v-else class="selected-image no-image">
    </div>
    <div v-if="imagenes.length" class="others-thumbnails">
      <div v-if="imagenes[0]" @click="selected = imagenes[0]" class="thumbnail" :style="{backgroundImage: `url(${imagenes[0].url})`}"></div>
      <div v-if="imagenes[1]" @click="selected = imagenes[1]" class="thumbnail" :style="{backgroundImage: `url(${imagenes[1].url})`}"></div>
      <div v-if="imagenes[2]" @click="selected = imagenes[2]" class="thumbnail" :style="{backgroundImage: `url(${imagenes[2].url})`}"></div>
      <div v-if="imagenes[3]" class="thumbnail" :style="{backgroundImage: `url(${imagenes[3].url})`}">
        <span>+{{imagenes.length-4}}</span>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Gallery',
  props: {
    imagenes: Array,
    selected: Object
  },
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.selected-image {
  background-color: rgba(131, 131, 131, 0.445);
  height: 528px;
  width: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
}
.gallery {
  display: flex;
}
.others-thumbnails {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
}
.thumbnail:hover{
  box-shadow: 0px 0px 0px 2px red;
}
.thumbnail:hover {
  cursor: pointer;
}
.thumbnail {
  width: 127px;
  height: 86px;
  background-color:  rgba(131, 131, 131, 0.445);
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 50px;
  color: var(--oposite-color);
  background-repeat: no-repeat;
}
</style>