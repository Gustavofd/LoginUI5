$(function(oEvent){

	console.log(oEvent);

	if(localStorage['ValidadeToken'] === '' || localStorage['ValidadeToken'] === null){

		localStorage['URLAposLogin'] = this.location.href;

		console.log(this.location.href);		

		window.location.href = 'http://localhost/login/index.html';
		return;
	}

	console.log(localStorage);
	console.log(sessionStorage);

});