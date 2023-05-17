(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);






function sendmail(){
	var params = {
		name : document.getElementById("name").Value,
		email : document.getElementById("email").Value,
		mesaage : document.getElementById("message").Value
	};
	const serviceID = "service_cl21ej6";
const templateID = "template_0exjyp8"

emailjs.send(serviceID,templateID,params)
.then(
	res =>{
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
console.log(res);
alert("your message sent ")
	})
	.catch(err=>console.log(err));

}


















