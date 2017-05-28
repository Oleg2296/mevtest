app.controller('gellaryCtrl',['$scope','GellaryServie',function ($scope,GellaryServie) {
    $scope.imageList=[];


    $scope.moveX=function (event) {
        var corner = document.getElementById("main__corner");
        var wrapCorner = angular.element(corner);
    };

    $scope.moveItemEnd=function () {
        $scope.movedItem=false;
    };
    $scope.moveItemStart=function () {
        $scope.movedItem=true;
    };

    $scope.init=function () {
        $scope.imageList=GellaryServie.getImages();
    };
    $scope.init();
}]);
