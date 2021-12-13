<template>
  <section class="details" v-if="inmueble">
	  <div class="top-section">
      <div class="meta-title">
        <h1>{{inmueble.titulo}}</h1>
        <div>
          <h2>{{Intl.NumberFormat('es-CO',{style: 'currency', currency: 'COP'}).format(inmueble.precio)}}</h2>
        </div>
      <div class="in-details">
				<div class="detail">
					<div class="detail-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bed" class="svg-inline--fa fa-bed fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"/></svg></div>
					<span>{{inmueble.habitaciones}} Habi</span>
				</div>
				<div class="detail">
					<div class="detail-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bath" class="svg-inline--fa fa-bath fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"/></svg></div>
					<span>{{inmueble.banos}} Bañ.</span>
				</div>
        <div class="detail">
					<div class="detail-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg></div>
					<span>Estrato {{inmueble.estrato}}</span>
				</div>
				<div class="detail">
					<div class="detail-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clone" class="svg-inline--fa fa-clone fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"/></svg></div>
					<span>{{inmueble.area}} m²</span>
				</div>
			</div>
        <div class="detail loc">
            <div class="detail-icon"><svg width="10px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg></div>
            <span>{{inmueble.direccion}}</span>
        </div>
      </div>
      <div class="image-gallery">
        <Gallery :imagenes="inmueble.imagenes" />
        <h4>Ubicación</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31812.93796188539!2d-74.10404450950797!3d4.662142452854003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1639119945081!5m2!1ses!2sco" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
	  </div>
    <div class="bottom-section">
      <br>
      <h4>Descripción</h4>
      <p>{{inmueble.descripcion}}</p>
    </div>

  <div class="contact-form">   
    <h1 id="tituloFormulario">¿Estas interesado?</h1>
    <p>envia el formulario y nos pondremos en contacto</p>
    <form v-on:submit.prevent="contactoAsesorLog" id="formulario" target="_blank">

      <label>Nombre y Apellido</label>
      <input v-model="contactoAsesor.name"  type="text" placeholder="Nombre Apellido" class="formularioCampos">

      <label>Correo</label>
      <input  v-model="contactoAsesor.email" type="email" placeholder="correo@email.com" class="formularioCampos">

      <label>Telefono</label>
      <input  v-model="contactoAsesor.phone" type="tel" placeholder="3201234567" class="formularioCampos">

      <select v-model="contactoAsesor.asunto" class="formularioCampos" placeholder="Asunto">
          <option value="" disabled hidden selected>Selecciona un asunto</option>
          <option>Quiero comprar</option>
          <option>Quiero más información</option>
      </select>

      <textarea v-model="contactoAsesor.message"  id="" cols="60" rows="7" placeholder="Mensaje" class="formularioCampos"></textarea>

      <button type="submit" class="button red-action formularioBoton">Enviar</button>
    </form>
  </div>

  </section> 
  <section v-else class="loading">
    <img src="@/assets/loading.svg" alt="">
  </section>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Gallery from './Gallery.vue'
import gql from 'graphql-tag'

export default {
  name: 'Details',
  data: function() {
    return {
      inmueble: null,
      inmuebleId: Number(this.$route.params.id),
      contactoAsesor: {
        name: "",
        email: "",
        phone_number: "",
        asunto:"",
        message:""
      },
    }
  },
  components: {
    HelloWorld,
    Gallery
  },
  apollo: {
    inmuebleById: {
      query: gql`
        query InmuebleById($inmuebleId: Int!) {
          inmuebleById(inmuebleId: $inmuebleId) {
            id
            likes
            titulo
            direccion
            ciudad
            poblacion
            tipo
            precio
            area
            banos
            habitaciones
            estrato
            contrato
            descripcion
            coordenadas
            imagenes {
              url
            }
          }
        }
      `,
      variables() {
        return {
          inmuebleId: this.inmuebleId
        }
      },
      result ({ data, loading }) {
				if (!loading) {
					this.inmueble = data.inmuebleById
				}
			},
    }
  }
}
</script>


<style scoped>
.loading {
  text-align: center;
  padding: 160px;
}

#tituloFormulario{
  margin-bottom:5px;
}
#formulario{
  display:flex;
  flex-direction:column;
  font-size: 18px;
  width: 100%;
}

.formularioCampos{
  padding: 10px;
  border: 1px solid var(--color-principal);
  margin-bottom:15px;
  margin-top: 10px;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
}

.formularioBoton{
  width: 100%;

}
.contact-form p {
  max-width: 100%;
}
.contact-form {
  max-width: 40%;
  margin-top: 150px;
}


.loc {
  margin-top: 50px;
}
:root {
  --fontColor : #000;
  --baseColor: #000;
}
p {
  max-width: 40%;
}
.details {
	padding: 0 100px;
}
.top-section {
  display: flex;
  justify-content: space-between;
}
.meta-title {
  /* background-color: aqua; */
  width: 40%;
}
.image-gallery {
  /* background-color: blue; */
  width: 50%;
  height: 500px;
}

h1 {
  font-size: 50px;
  font-weight: 500;
}
h2 {
  font-size: 50px;
  color: var(--color-principal);
}
.detail-icon {
  margin-right: 11px;
}
.detail {
  display: flex;
  align-items: center;
}

.detail {
	/* margin-right: 17px; */
	font-size: 15px;
	color: var(--gray-color)
}
.in-details {
  display: grid;
  grid-template-columns: repeat(3, auto);
  /* grid-template-rows: repeat(2, 451px); */
  row-gap: 30px;
}

.detail svg{
	width: 25px;
}
.action-icon {
	padding: 5px;
	background-color: var(--oposite-color);
	border-radius: 100px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	cursor: pointer;
}
</style>