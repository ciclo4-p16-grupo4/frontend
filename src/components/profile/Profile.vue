<template>
	<div class="user-container">
		<div class="user-de">
			<div>
				<h1>{{$store.state.loguedUser.username}}</h1>
			</div>
			<div>
				<h2>{{$store.state.loguedUser.email}}</h2>
			</div>
			<div>
				<h3>{{$store.state.loguedUser.ciudad}}</h3>
			</div>
			<div class="likes-container">
				<div v-for="like in likeByUser" :key="like.id" class="likes">
					<div>
						<a :href="'./details/'+like.inmueble_id">
							Te gusto el inmueble {{like.inmueble_id}} 					
						</a>
					</div>
					<div>
						<svg @click="deleteLike(like.id)" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/></svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
	data() {
		return {
			userDetail: null,
			likes: null
		}
	},
	async beforeCreate() {
		await this.$store.dispatch("refreshToken", { vm: this });
	},
	apollo: {
		likeByUser: {
			query: gql`
				query LikeByUser($userId: Int!) {
					likeByUser(user_id: $userId) {
						id
						user_id
						inmueble_id
						creado
					}
				}
			`,
			variables() {
				return {
					userId: Number(this.$store.state.loguedUser.user_id),
					reqAuth: true
				}
			},
			// result ({ data, loading }) {
			// 	if (!loading) {
          	// 		console.log(data.allInmuebles);
			// 		this.inmuebles = data.allInmuebles.results
          	// 		this.pages = Math.ceil(Number(data.allInmuebles.count/this.defaultOffset))
			// 	}
			// }
		}
	},
	methods: {
		async deleteLike(id) {
			await this.$store.dispatch("refreshToken", { vm: this });
			await this.$apollo
			.mutate({
				mutation: gql`
				mutation DeleteLike($likeId: String!) {
					deleteLike(likeId: $likeId)
				}
				`,
				variables: {
					likeId: id,
					reqAuth: true,
				},
			})
			.then((result) => {
				console.log(result);
				alert(
				"Like eliminado exitosamente!!"
				);
			})
			.catch((error) => {
				console.log(error);
				alert("ERROR: "+error);
			});
			this.$apollo.queries.likeByUser.refetch();
		}
	}
}
</script>

<style scoped>
.user-de {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
h2 {
	color: var(--gray-color)
}
.likes {
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 100%;
	/* padding: 10px; */
	margin-bottom: 10px;
	border-radius: 5px;
	border: 1px solid var(--font-color);
	box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}
.likes svg {
	padding: 10px;
	cursor: pointer;
}
.likes a{
	color: var(--font-color);
	padding: 10px;
	font-size: 20px;
}
.likes-container {
	display: flex;
	flex-direction: column;
}
.likes path {
	fill: var(--color-principal);
}
</style>