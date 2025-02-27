(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function ($scope) {
        
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageClass = "";
        $scope.borderClass = "";

        $scope.checkLunch = function () {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "message-red";
                $scope.borderClass = "border-red";
                return;
            }

            var items = $scope.lunchItems.split(',').map(item => item.trim()).filter(item => item !== "");

            if (items.length === 0) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "message-red";
                $scope.borderClass = "border-red";
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageClass = "message-green";
                $scope.borderClass = "border-green";
            } else {
                $scope.message = "Too much!";
                $scope.messageClass = "message-green";
                $scope.borderClass = "border-green";
            }
        };

    }]);
})();
