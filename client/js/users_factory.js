dBoard.factory('userFactory', function($http) {
	var factory = {};
	var user_id = ;

	factory.create = function(user, callback) {
		debugger;
		$http.post('/newuser', user).success(function(output) {
			
		})
	}



	// factory.create = function(info, callback) {
	// 	$http.post('/friends', info)
	// 	.success(function(output) {
	// 		friends.push({
	// 			name: info.name,
	// 			age: info.age
	// 		});
	// 		callback(friends);

	// 	})	
	// }

	// factory.delete = function(friend, callback) {
	// 	$http.delete('friends/' + friend._id)
	// 	.success(function(output) {
	// 		friends = output;
	// 		callback(friends);
 //    })
	// }

	

	 return factory;
});