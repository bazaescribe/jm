function quotes(){
	var testimonial = [
		{
			"quote": "Muy buena atención y servicio. Estamos muy contentos con la Sr Guadalupe.",
			"name": "Adrián Campos",
			"position": "Comunicación y Cultura",
			"company": "Dentalia",
			"logo": "dentalia.png"
		},
		{
			"quote": "Aplausos a Jelpmi y a Laura nuestra querida keeper!! Tenerlos en nuestra oficina los hace parte de nuestra familia.",
			"name": "Susana Flores",
			"position": "Undefined",
			"company": "Correduría 81",
			"logo": "correduria.png"
		},
		{
			"quote": "Jelpmi nos permite seguir dando el mejor servicio a nuestros pacientes ya que su servicio es seguro y confiable, sin duda son los expertos en limpieza.",
			"name": "Mirtha Sanchez",
			"position": "Undefined",
			"company": "veritest",
			"logo": "veritest.png"
		},
		{
			"quote": "Pedir servicio de jelpmi en nuestra oficina es saber que vamos a tener la tranquilidad que todo estará impecable y a tiempo.",
			"name": "Yunuen Magaña",
			"position": "Directora de Experiencia",
			"company": "Victoria147",
			"logo": "victoria147.png"
		},
		{
			"quote": "Las keepers son puntuales, amables y se adaptan a las necesidades de cada cafetería. Sin duda es una empresa que te brinda seguridad y seriedad, pero principalmente, ellas se notan muy contentas de realizar su trabajo.",
			"name": "Jorge Martínez",
			"position": "Undefined",
			"company": "Moronas Café",
			"logo": "moronas.png"
		}
	];
	
	

	var size 			= testimonial.length;
	var number 		=  Math.floor(Math.random() * size);
	var quote 		= testimonial[number].quote;
	var name 			= testimonial[number].name;
	var position 	= testimonial[number].position;
	var company 	= testimonial[number].company;
	var logo 			= testimonial[number].logo;
	
	console.log(number + quote + name + position + company + logo);	
	console.log(number);
	
	document.getElementById('name').innerHTML = name;
	document.getElementById('quote').innerHTML = quote;
	document.getElementById('company').innerHTML = company;
	document.getElementById('logo').innerHTML = "<img src='res/assets/img/logos/" + logo + "' style='width: 90%;'>";
	
}