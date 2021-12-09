<template>
	<section class="admin">
		<div class="nav-tab">
			<div class="search">
				<!-- <form action="">
					<input type="search" name="" id="">
					<input type="submit" value="Buscar">
				</form> -->
			</div>
			<div class="add">
				<button class="button btn-add-new" v-on:click="s=!s;selectedInmueble=newInmueble" >Añadir Nuevo</button>
			</div>
		</div>
		<div class="table">
			<table v-if="inmuebles">
				<tr class="table-header">
					<th>Id</th>
					<th>Titulo</th>
					<th>Dirección</th>
					<th>Ciudad</th>
					<th>Población</th>
					<th>Tipo</th>
					<th>Precio</th>
					<th>Área</th>
					<th>Habitaciones</th>
					<th>Baños</th>
					<th>Estrato</th>
					<th>Contrato</th>
					<th>Ver</th>
					<th>Editar</th>
					<th>Eliminar</th>
				</tr>
				<tr v-for="inmueble in inmuebles" :key="inmueble.id" class="table-body">
					<td>{{inmueble.id}}</td>
					<td>{{inmueble.titulo}}</td>
					<td>{{inmueble.direccion}}</td>
					<td>{{inmueble.ciudad}}</td>
					<td>{{inmueble.poblacion=='U'?'Urbano':'Rural'}}</td>
					<td>
            <span v-if="inmueble.tipo == 'CAS'">Casa</span>
            <span v-else-if="inmueble.tipo == 'APT'">Apartamento</span>
            <span v-else-if="inmueble.tipo == 'LOC'">Local</span>
          </td>
					<td>{{Intl.NumberFormat('es-CO',{style: 'currency', currency: 'COP'}).format(inmueble.precio)}}</td>
					<td>{{inmueble.area}} m²</td>
					<td>{{inmueble.habitaciones}}</td>
					<td>{{inmueble.banos}}</td>
					<td>{{inmueble.estrato}}</td>
					<td>
            <span v-if="inmueble.contrato == 'VEN'">Venta</span>
            <span v-else>Alquiler</span>
          </td>
					<td class="ver"><a :href="`../details/${inmueble.id}`" target="_blank"><svg height="15" width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"/></svg><br>Ver</a></td>
					<td><button @click="selectedInmueble=inmueble; s=true" class="action-button edit"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg><br>Editar</button></td>
					<td><button @click="eliminar(inmueble.id)" class="action-button delete"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg><br>Eliminar</button></td>
				</tr>
        <!-- <pre>{{inmuebles}}</pre> :reload="getAll()"-->
			</table>
		</div>
		<CustomModal :showModal="s" v-on:close="s=false" :inmueble="selectedInmueble" />

	</section>
</template>
<script>
import CustomModal  from './CustomModal.vue'

export default {
  name: "AdminComponent",
  components: {
	CustomModal
  },
  data() {
	return {
		s: false,
    inmuebles: Array,
    token: this.$store.state.loguedUser.access_token,
    newInmueble: {
      id: null,
      titulo: null,
      direccion: null,
      ciudad: null,
      poblacion: null,
      tipo: null,
      precio: null,
      area: null,
      habitaciones: null,
      banos: null,
      estrato: null,
      contrato: null,
      descripcion: null,
      creado: null,
      actualizado: null,
      imagenes: [
      ]
    },
		selectedInmueble: {
      id: null,
      titulo: null,
      direccion: null,
      ciudad: null,
      poblacion: null,
      tipo: null,
      precio: null,
      area: null,
      habitaciones: null,
      banos: null,
      estrato: null,
      contrato: null,
      descripcion: null,
      creado: null,
      actualizado: null,
      imagenes: [
      ]
    }
	}
  },
  created(){
  },
  methods: {
	  fs() {
		  console.log('a');
	  },
	  getAll() {
      let status_code = null
      fetch(`${process.env.VUE_APP_API}inmuebles/?order_by=creado&sort=DESC&limit=10000`).then(data => {
        status_code = data.status
        return data
      }).then(data => data.json()).then(json => {
        this.inmuebles = json.results
      })    
	  },
    eliminar(id) {
      let status_code = null
      fetch(`${process.env.VUE_APP_API}inmuebles/${id}/`,{
        method: 'DELETE',
        headers:{
          'Authorization': `Bearer ${this.token}`,
        }
      }).then(data => {
        status_code = data.status
        return data
      }).then(data => data.json()).then(json => {
        let message = `status_code: ${status_code}\n`
        switch (status_code) {
            case 401:
              console.log(json)
              const serverResponse = json.messages?.map(m => m.message).join(', ')              
              message += `Error: Usuario no autenticado\nDetail: ${json.detail}\nServer_Response: ${serverResponse}`
              break
            case 400:
              Object.keys(json).forEach(key => {
                message += `${key}: ${json[key].join(', ')}\n`
                console.log(message);
              })
              this.$emit('reload')
              break
            case 201:
              message += `Inmueble creado con éxito\nid: ${json.data.id}`
              break
            case 200:
              message += `Eliminado exitosamente`
              this.getAll()
              break
          }
          // console.log(json);
          window.alert(message.toUpperCase())
      })
    }
  },
  mounted() {
    this.getAll()
  }
}
</script>
<style scoped>
.action-button,path {
  background-color: transparent;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  color: var(--font-color);
  border: 2px solid  transparent;
  fill: var(--font-color)
}

.edit:hover path {
  fill: #233750;
}
.edit:hover {
  color: #233750;
  border-color: #233750;
}

.delete:hover path {
  fill: var(--color-principal);
}
.delete:hover {
  border-color: var(--color-principal);
  color: var(--color-principal);
  fill: var(--color-principal);
}
.delete {
  border: 2px solid transparent;
  color: var(--font-color)
}
.ver path {
  fill: var(--font-color)
}
.ver a:hover path {
  color: var(--color-principal);
  fill: var(--color-principal);
}
.ver a:hover {
  color: var(--color-principal);
  fill: var(--color-principal);
}
.ver a {
  color: var(--font-color);
}
.admin {
	padding: 10px 100px;
	
}
.table {
	overflow: auto hidden;
	border-radius: 20px;
}
table {
	width: 100%;
}
table, td, th {
	border-collapse: collapse;
}
tr:nth-child(even) {
  background-color: #B3B3B3;
}
.table-header {
	background-color: var(--color-principal);
	/* height: 20px; */
	color: var(--oposite-color);
	
}
.table-header th{
	padding: 26px 21px;
	font-size: 18px;
	font-weight: 400;
}
.table-body td {
	padding: 10px;
	text-align: center;
}
.nav-tab {
	display: flex;
	justify-content: space-between;
	padding: 40px 0px;
	align-items: center;
}
.search input[type=search]{
	padding: 10px;
	width: 500px;
	border-radius: 5px;
	border: none;
	height: 43px;
	background-color: var(--gray-color);
	outline: none;
}
.btn-add-new {
	border: 2px dashed black;
}
</style>