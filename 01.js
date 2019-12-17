const app =
Vue.component('saludo',{

	template:'<h1>{{tituloo}}</h1>'
});





new Vue({
	el: '#app',
	data: {
		mensaje: 'bienvenido al editor de fichas clinicas universal khghgjhg',
		titulo: 'test vue jeje',
		pacientes:[
			{nombre:'franco', estado:1},
			{nombre:'kat', estado:0},
			{nombre:'byron', estado:0},
			{nombre:'ferrari', estado:1}
		],
		nuevopaciente: '',
		estadop: 0
	},
	methods:{
		agregarpaciente () {
			this.pacientes.push({
				nombre: this.nuevopaciente, estado: this.estadop
			});
			this.nuevopaciente= '';
			this.estadop='';
		}
	}
})
v