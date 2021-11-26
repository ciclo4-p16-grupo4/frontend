<template>
  <div>
    <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
      <button class="modal__close" @click="showModal=false">
        x
      </button>
      <span v-if="!inmueble.id" class="modal__title">Añadir nuevo inmueble</span>
      <span v-else class="modal__title">Editar inmueble {{inmueble.id}}</span>

      <div class="modal__content">
        <form class="modal__content" v-on:submit.prevent="inmueble.id?edit():send()">
          <label for="titulo">Título</label>
          <input v-model="inmueble.titulo" type="text" name="titulo" id="titulo" placeholder="Título" required>

          <label for="direccion">Dirección</label>
          <input v-model="inmueble.direccion" type="text" name="direccion" id="direccion" placeholder="Dirección" required>

          <label for="ciudad">Ciudad</label>
          <input v-model="inmueble.ciudad" type="text" name="ciudad" id="ciudad" placeholder="Ciudad" required>

          <div class="dos-selects">
            <select v-model="inmueble.poblacion" name="población" id="poblacion" required>
              <option value="null" disabled selected="selected">Población</option>
              <option value="R">Rural</option>
              <option value="U">Urbano</option>
            </select>
            
            <select v-model="inmueble.tipo" name="Tipo" id="tipo" required>
              <option value="null" disabled selected="selected">Tipo</option>
              <option value="CAS">Casa</option>
              <option value="APT">Apartamento</option>
              <option value="LOC">Local</option>
            </select>
          </div>

          <label for="precio">Precio</label>
          <input v-model="inmueble.precio" type="number" name="area" id="precio" placeholder="Precio" required>

          <label for="area">Área</label>
          <input v-model="inmueble.area" type="number" name="area" id="area" placeholder="Área" required>

          <div class="dos-selects">
            <select v-model="inmueble.habitaciones" name="habitaciones" id="habitaciones" required>
              <option value="null" disabled selected="selected">Habitaciones</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            
            <select v-model="inmueble.banos" name="banos" id="banos" required>
              <option value="null" disabled selected="selected">Baños</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="dos-selects">
            <select v-model="inmueble.estrato" name="estrato" id="estrato" required>
              <option value="null" disabled selected="selected">Estrato</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            
            <select v-model="inmueble.contrato" name="contrato" id="contrato" required>
              <option value="null" disabled selected="selected">Contrato</option>
              <option value="ALQ">Alquiler</option>
              <option value="VEN">Venta</option>
            </select>
          </div>

          <textarea v-model="inmueble.descripcion" name="descripcion" id="descripcion" cols="30" placeholder="Descripción" required></textarea>
          <div class="add-imagen-container">
            <input v-model="new_image" type="text" name="imagen" id="imagen" placeholder="https://imagen-url.com/imagen.jpg">
            <button type="button" @click="addImage()"><svg width="22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg></button>
          </div>
          <div class="images">
            <div class="image-box" v-for="imagen in inmueble.imagenes" :key="imagen.id" :style="{backgroundImage: `url(${imagen.url})`}"></div>
          </div>
          <input class="button red-action send" type="submit" value="Guardar">
        </form>
      </div>
	    <!-- <div class="modal__action">
        <button @click="showModal = false">confirm</button>
      </div> -->
    </vue-final-modal>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      new_image: null    
    }
  },
  props: {
	  showModal: false,
    inmueble: Object
  },
  watch:{
    showModal(a) {
      if(a==false) {
        this.$emit('close')
      }
    }
  },
  methods: {
    addImage(d) {
      this.inmueble.imagenes.push({url: this.new_image})
      this.new_image = ''
    },

    /** EDITAR UN INMUEBLE */

    edit() {
      let status_code = null
      const body = {
        titulo: this.inmueble.titulo,
        direccion: this.inmueble.direccion,
        ciudad: this.inmueble.ciudad,
        poblacion: this.inmueble.poblacion,
        tipo: this.inmueble.tipo,
        precio: this.inmueble.precio,
        area: this.inmueble.area,
        habitaciones: this.inmueble.habitaciones,
        banos: this.inmueble.banos,
        estrato: this.inmueble.estrato,
        contrato: this.inmueble.contrato,
        descripcion: this.inmueble.descripcion,
        imagenes: this.inmueble.imagenes
      }
      fetch(`${process.env.VUE_APP_API}inmuebles/${this.inmueble.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${this.$store.state.loguedUser.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(data => {
        status_code = data.status
        return data
      }).then(data => data.json()).then(json => {         
        let message = `status_code: ${status_code}\n`

        switch (status_code) {
          case 401:
            // console.log(json);
            const serverResponse = json.messages?.map(m => m.message).join(', ')              
            message += `Error: Usuario no autenticado\nDetail: ${json.detail}\nServer_Response: ${serverResponse}`
            this.$store.dispatch('refreshToken')
            break
          case 400:
            Object.keys(json).forEach(key => {
              message += `${key}: ${json[key].join(', ')}\n`
              console.log(message);
            })
            this.$emit('reload')
            break
          case 200:
            message += `Actualizado exitosamente`
            this.$emit('reload')
            break
        }
        window.alert(message.toUpperCase())
      })
    },

    /** CREAR UN INMUEBLE */
    send() {
      let status_code = null
      const body = {
        titulo: this.inmueble.titulo,
        direccion: this.inmueble.direccion,
        ciudad: this.inmueble.ciudad,
        poblacion: this.inmueble.poblacion,
        tipo: this.inmueble.tipo,
        precio: this.inmueble.precio,
        area: this.inmueble.area,
        habitaciones: this.inmueble.habitaciones,
        banos: this.inmueble.banos,
        estrato: this.inmueble.estrato,
        contrato: this.inmueble.contrato,
        descripcion: this.inmueble.descripcion,
        imagenes: this.inmueble.imagenes
      }
      fetch(`${process.env.VUE_APP_API}inmuebles`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.$store.state.loguedUser.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(data => {
        status_code = data.status
        return data
      }).then(data => data.json()).then(json => {         
          let message = `status_code: ${status_code}\n`

          switch (status_code) {
            case 401:
              console.log(json);
              const serverResponse = json.messages?.map(m => m.message).join(', ')              
              message += `Error: Usuario no autenticado\nDetail: ${json.detail}\nServer_Response: ${serverResponse}`
              this.$store.dispatch('refreshToken')
              break
            case 400:
              Object.keys(json).forEach(key => {
                message += `${key}: ${json[key].join(', ')}\n`
                console.log(message);
              })
              break
            case 201:
              message += `Inmueble creado con éxito\nid: ${json.data.id}`
              this.$emit('reload')
              break
          }
          window.alert(message.toUpperCase())
      })
    }
  }
}
</script>
<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem 50px;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.modal__content {
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
  width: 400px;
}
.modal__content label{
  margin-bottom: 10px;
}
input,textarea,select {
  font-family: inherit;
}
input:focus,textarea:focus,select:focus {
  border-color: var(--color-principal);
}
textarea {
  height: 50px !important;
}
input,textarea {
  height: 28px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid;
  outline: none;
  font-size: 15px;
  font-weight: 500  ;
  /* color: var(--gray-color); */
}
input[type=submit] {
  height: 50px;
  margin-top: 10px;
  margin-bottom: 0px;

}
.dos-selects {
  display: flex;
  justify-content: space-between;
}
.dos-selects select{
  width: 48%;
  height: 38px;
  border: 1px solid;
  margin-bottom: 20px;
}
.add-imagen-container button:hover {
  cursor:pointer;
}
.add-imagen-container button {
  background-color: var(--color-principal);
  border: none;
  color: var(--oposite-color);
  height: 40px;
  width: 40px;
}
.add-imagen-container {
  display: flex;
  justify-content: space-between;
}
.add-imagen-container input {
  padding: 5px;
  width: 80%;
}
.images {
  max-width: 400px;
  height: 105px;
  display: -webkit-box;
  flex-direction: row;
  overflow: scroll auto;
  padding: 5px 0px;
}

.image-box {
  width: 130px;
  height: 80px;
  background-size: cover;
  margin-right: 10px;
  border: 2px solid var(--color-principal)
}
.send {
  width: 100%;
}
</style>