dBoard.controller('usersController', function ($http, $scope, userFactory) {

	$scope.addUser = function() {
		userFactory.create($scope.user);
	}

	// $scope.formData = {};

	// FriendFactory.index(function(data) {
	// 	$scope.friends = data;
	// });

	// $scope.addFriend = function() {
	// 	FriendFactory.create($scope.new_friend, function(friends) {
	// 		$scope.friends = friends;
	// 		$scope.new_friend = {};
	// 	});
	// };

	// $scope.deleteFriend = function(friend) {
	// 	FriendFactory.delete(friend, function(data) {
	// 		$scope.friends = data;
	// 	});
		
	// }
})