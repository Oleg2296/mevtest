app.controller('homeCtrl',['$scope','GellaryServie',function ($scope,GellaryServie) {

    $scope.newImage = {
        description: '',
        url: ''
    };
    $scope.modal=false;

    $scope.addImage=function () {
        if($scope.newImage && $scope.newImage.url){
            GellaryServie.addImage($scope.newImage);
            $scope.newImage.description='';
            $scope.newImage.url='';
            $scope.modal=false;
            return;
        }
        alert('Заповніть всі поля')
    };
    $scope.img=function (event) {
        var tmppath = URL.createObjectURL(event.target.files[0]);
        $scope.newImage.url=tmppath;
        console.log(tmppath)
    };

}]);