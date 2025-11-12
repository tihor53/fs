var app = angular.module("classifieds", []);

app.controller("ClassifiedsController", function ($scope) {
  $scope.categories = ["Education", "Property", "Recruitment", "Services", "Shopping", "Vehicles"];
  $scope.posts = [
    { category: "Services", desc: "Full stack Application Development", date: new Date() },
  ];

  $scope.post = function () {
    if (!$scope.desc || !$scope.desc.trim()) {
      alert("Please enter a description!");
      return;
    }
    $scope.posts.push({
      category: $scope.category || $scope.categories[0],
      desc: $scope.desc,
      date: $scope.date || new Date()
    });
    $scope.desc = "";
    $scope.date = new Date();
    $scope.category = $scope.categories[0];
  };
});
