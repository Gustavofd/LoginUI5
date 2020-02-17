sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ams21.login.controller.App", {

		onPressLogOff : function (oEvent) {

			localStorage['UsuarioLogado'] = '';
			localStorage['Token'] = '';
			localStorage['ValidadeToken'] = '';
			localStorage['URLAposLogin'] = '';

		},

		onPressOK : function (oEvent) {

			var userInput = $('#__component0---app--userInput-inner');
			var user = userInput[0].value;

			var passwordInput = $('#__component0---app--passwordInput-inner');
			var password = passwordInput[0].value;

			if (password ==='' || password === null || user ==='' || user === null){
				alert('Você deve informar o usuário e senha.');
				return;
			}

			var autenticar = $.ajax({
				//url: 'http://localhost/Component-preload.js',
				url: 'https://jsonplaceholder.typicode.com/users',
				method: 'GET',
				dataType: 'jsonp',
				username: user,
				password: password

			});

			autenticar.fail(function(e){
				console.log(e.status);
				alert('Usuário ou senha inválidos!');
			});

			autenticar.done(function(e){
				localStorage['UsuarioLogado'] = user;
				localStorage['Token'] = "asodiasdoand331r0ewi";
				localStorage['ValidadeToken'] = "18/02/2020T22:24:00";

				if (localStorage['URLAposLogin'] === '' || localStorage['URLAposLogin'] === null){
					localStorage['URLAposLogin'] = "http://localhost";
				}

				window.location.href = localStorage['URLAposLogin'];
			});

		},		
	});
});