var app = angular.module("leaveApp", []);

app.controller("LeaveController", function ($scope) {
  $scope.casualLeaveBalance = 10;
  $scope.medicalLeaveBalance = 15;
  $scope.leaveTypes = ["Casual Leave", "Medical Leave"];
  $scope.leaveType = $scope.leaveTypes[0];

  $scope.applyLeave = function () {
    const startDate = new Date($scope.startDate);
    const endDate = new Date($scope.endDate);
    const daysApplied = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

    // Check leave balance
    if ($scope.leaveType === "Casual Leave" && $scope.casualLeaveBalance < daysApplied) {
      alert("Insufficient Casual Leave balance.");
    } else if ($scope.leaveType === "Medical Leave" && $scope.medicalLeaveBalance < daysApplied) {
      alert("Insufficient Medical Leave balance.");
    } else {
      // Update balances
      if ($scope.leaveType === "Casual Leave") {
        $scope.casualLeaveBalance -= daysApplied;
      } else {
        $scope.medicalLeaveBalance -= daysApplied;
      }
      // Reset form
      $scope.startDate = null;
      $scope.endDate = null;
    }
  };
});
