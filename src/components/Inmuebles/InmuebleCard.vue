<template>
	<div class="inmueble-card">
		<div class="card-content-container" v-if="inmueble">
			<a :href="`/details/${inmueble.id}`" class="" v-if="inmueble">
				<div v-if="inmueble.imagenes.length" class="imagen-container" :style="{backgroundImage: `url(${inmueble.imagenes[0].url})`}">
					<div class="in-tags" >
						<span v-if="inmueble.tipo === 'CAS'" :class="inmueble.contrato" class="type"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg></span>
						<span v-if="inmueble.tipo === 'APT'" :class="inmueble.contrato" class="type"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="city" class="svg-inline--fa fa-city fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"/></svg></span>
						<span v-if="inmueble.tipo === 'LOC'" :class="inmueble.contrato" class="type"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="store" class="svg-inline--fa fa-store fa-w-20" role="img" viewBox="0 0 616 512"><path fill="currentColor" d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"/></svg></span>
						
						
						
						<span v-if="inmueble.contrato === 'VEN'" class="tag contract" :class="inmueble.contrato">En venta</span>
						<span v-else :class="inmueble.contrato" class="tag contract">En Alquiler</span>
					</div>
				</div>
				<div v-else class="imagen-container no-image">
					<div class="in-tags">
						<span v-if="inmueble.tipo === 'CAS'" :class="inmueble.contrato" class="type"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg></span>
						<span v-if="inmueble.tipo === 'APT'" :class="inmueble.contrato" class="type"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="city" class="svg-inline--fa fa-city fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"/></svg></span>
						<span v-if="inmueble.tipo === 'LOC'" :class="inmueble.contrato" class="type"><svg width="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="store" class="svg-inline--fa fa-store fa-w-20" role="img" viewBox="0 0 616 512"><path fill="currentColor" d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"/></svg></span>
						
						<span v-if="inmueble.contrato === 'VEN'" class="tag contract" :class="inmueble.contrato">En venta</span>
						<span v-else :class="inmueble.contrato" class="tag contract">En Alquiler</span>
					</div>
				</div>
			</a>
				<div class="price-action">
					<a :href="`/details/${inmueble.id}`" class="" v-if="inmueble">
						<div class="price">
							<span>{{Intl.NumberFormat('es-CO',{style: 'currency', currency: 'COP'}).format(inmueble.precio)}}</span>
						</div>
					</a>
					<div class="action">
						
						<div @click="like()" class="action-icon liked" :title="inmueble.likes">
							<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/></svg>
						</div>
						<div class="action-icon">
							<svg width="15" height="15" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.78906 7.96875C8.37158 7.96875 7.98633 8.11523 7.68457 8.35986L4.64941 6.16406C4.70024 5.88511 4.70024 5.59927 4.64941 5.32031L7.68457 3.12451C7.98633 3.36914 8.37158 3.51562 8.78906 3.51562C9.75879 3.51562 10.5469 2.72754 10.5469 1.75781C10.5469 0.788086 9.75879 0 8.78906 0C7.81934 0 7.03125 0.788086 7.03125 1.75781C7.03125 1.92773 7.05469 2.09033 7.1001 2.24561L4.21729 4.33301C3.78955 3.76611 3.10986 3.39844 2.34375 3.39844C1.04883 3.39844 0 4.44727 0 5.74219C0 7.03711 1.04883 8.08594 2.34375 8.08594C3.10986 8.08594 3.78955 7.71826 4.21729 7.15137L7.1001 9.23877C7.05469 9.39404 7.03125 9.55811 7.03125 9.72656C7.03125 10.6963 7.81934 11.4844 8.78906 11.4844C9.75879 11.4844 10.5469 10.6963 10.5469 9.72656C10.5469 8.75684 9.75879 7.96875 8.78906 7.96875ZM8.78906 0.996094C9.20947 0.996094 9.55078 1.3374 9.55078 1.75781C9.55078 2.17822 9.20947 2.51953 8.78906 2.51953C8.36865 2.51953 8.02734 2.17822 8.02734 1.75781C8.02734 1.3374 8.36865 0.996094 8.78906 0.996094ZM2.34375 7.03125C1.6333 7.03125 1.05469 6.45264 1.05469 5.74219C1.05469 5.03174 1.6333 4.45312 2.34375 4.45312C3.0542 4.45312 3.63281 5.03174 3.63281 5.74219C3.63281 6.45264 3.0542 7.03125 2.34375 7.03125ZM8.78906 10.4883C8.36865 10.4883 8.02734 10.147 8.02734 9.72656C8.02734 9.30615 8.36865 8.96484 8.78906 8.96484C9.20947 8.96484 9.55078 9.30615 9.55078 9.72656C9.55078 10.147 9.20947 10.4883 8.78906 10.4883Z" fill="black"/>
							</svg>
						</div>
					</div>
				</div>
			<div class="content-body">
				<a :href="`/details/${inmueble.id}`" class="" v-if="inmueble">
					<div class="in-title">
						<h5>{{inmueble.titulo}}</h5>
						<span>{{inmueble.direccion}}, {{inmueble.ciudad}}</span>
					</div>
				</a>
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
						<div class="detail-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clone" class="svg-inline--fa fa-clone fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"/></svg></div>
						<span>{{inmueble.area}} m²</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'InmuebleCard',
  props: {
	inmueble: Object
  },

  methods: {
	async like() {
		if(this.$store.state.is_auth) {
			const user_id = localStorage.getItem("user_id")
			
			await this.$store.dispatch("refreshToken", { vm: this });
			await this.$apollo
			.mutate({
			mutation: gql`
				mutation Mutation($like: likeuserInput!) {
					createLike(like: $like) {
						id
						user_id
						inmueble_id
						creado
					}
				}
				`,
				variables: {
					like: {
						user_id: Number(user_id),
						inmueble_id: Number(this.inmueble.id) 
					},
					reqAuth: true
				},
			})
			.then((result) => {
				console.log(result);
				alert(`Te gusto el inmueble #${this.inmueble.id} ${this.inmueble.titulo}`);
			})
			.catch((error) => {
				console.log(error)
				alert("ERROR: Fallo en el registro.");
			});
		}else {
			window.alert('Inicie sesión para dar like')
			window.location.href="./user/login"
		}
	}
  }
}
</script>

<style scoped>
.inmueble-card{
	width: 352px;
	height: 446px;
	background-color: var(--oposite-color);
	box-shadow: 0px 4px 17px -3px rgba(0, 0, 0, 0.24);
	border-radius: 20px;
}
.inmueble-card{
	width: 320px;
	height: 446px;
	background-color: var(--oposite-color);
	box-shadow: 0px 4px 17px -3px rgba(0, 0, 0, 0.24);
	border-radius: 20px;
}
.card-content-container {
	padding: 20px;
}
.imagen-container {
	background-repeat: no-repeat;
	height: 240px;
	border-radius: 20px;
	background-position: center;
	background-size:cover;
}
.price-action {
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.price span {
	font-size: 18px;
	font-weight: 600;
	color: var(--color-principal);
}
.in-title h5{
	font-size: 20px;
	font-weight: 500;
	margin: 13px 0;
	height: 48px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.in-title span{
	font-size: 15px;
	color: var(--gray-color);
	height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.detail {
	margin-right: 17px;
	font-size: 15px;
	color: var(--gray-color)
}
.in-details {
	display: flex;
	align-items: center;
	margin-top: 17px;
}
.detail {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70px;
}
.detail svg{
	width: 17px;
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
.liked path {
	fill: var(--color-principal);
}
.action {
	display: flex;
	width: 60px;
	justify-content: space-between;
}
.liked path {
	fill: var(--color-principal);
}

a {
	text-decoration: none;
	color: var(--font-color);
}


.ALQ {
	color: var(--oposite-color);
	fill:  var(--oposite-color);
	background-color: #2286FE;
}

.VEN {
	color: var(--oposite-color);
	background-color: var(--color-principal);
}
.ALQ path {
	fill:  var(--oposite-color);
}

.VEN path {
	fill:  var(--oposite-color);
}


.in-tags {
	align-items: flex-start;
	display: flex;
	padding: 10px;
}
.tag {
	font-weight: bold;
	padding: 5px 10px;
	border-radius: 50px;
	margin-right: 10px;
	font-size: 14px;
	box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.19);
}
.contract {
	
}
.type {
	margin-right: 10px;
	border-radius: 100px;
	width: 27px;
	height: 27px;
	display: flex;
	justify-content: center;
	box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.19);
}
</style>