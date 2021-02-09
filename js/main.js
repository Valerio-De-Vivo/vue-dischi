var app = new Vue({
	el:"#app",
	data: {
		cds: '',
		genere:['all'],
		opt: 'all'
	},
	mounted() {
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then((result) => {
				this.cds = result.data.response;
				
				for (let i = 0; i < this.cds.length; i++) {
					if (!this.genere.includes(this.cds[i].genre)) {
						this.genere.push(this.cds[i].genre);
					}
				}
			});
	},
	methods: {
		sortbyopt(){
			console.log(this.opt);
		},
	}
});