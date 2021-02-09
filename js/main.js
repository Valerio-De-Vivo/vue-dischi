var app = new Vue({
	el:"#app",
	data: {
		cds: ''
	},
	mounted() {
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then((result) => {
				this.cds = result.data.response;
			})
	}
});