var ListeaFaire = angular.module('ListeaFaire', []);

function mainController($scope,$http){
	$http.get('/getAllBooks')
		.success(function(data){
			$scope.laliste = data;
			console.log(data);
		})

		.error(function(data){
			console.log('Error: ' + data);
		})

	$scope.sortTitle = function(){
		$http.get('/sortTitle')
			.success(function(data){
				$scope.laliste = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	};

	$scope.sortAuthor = function(){
		$http.get('/sortAuthor')
			.success(function(data){
				$scope.laliste = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	};

	$scope.sortCountry = function(){
		$http.get('/sortCountry')
			.success(function(data){
				$scope.laliste = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	};

	$scope.sortLanguage = function(){
		$http.get('/sortLanguage')
			.success(function(data){
				$scope.laliste = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	};

	$scope.sortYear = function(){
		$http.get('/sortYear')
			.success(function(data){
				$scope.laliste = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	};

	$scope.sortPages = function(){
		$http.get('/sortPages')
			.success(function(data){
				$scope.laliste = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
	};
};
