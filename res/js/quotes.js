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
		}
	];
	
	var number 		=  Math.floor(Math.random() * 2);
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