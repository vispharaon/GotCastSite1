'use strict';

app.controller('GoTController',
    function ($scope, GoTData) {
        $scope.test = 'Šaljem poruku preko angulara';

        $scope.event = GoTData.event;

        $scope.filterFamily = 'ESSOS';
        //GoTData.getIMDBData(function (cb) {
        //    $scope.servicetest = cb
        //});
        $scope.selected = [];
        $scope.openCharacterDetails = function () {
            $scope.selected = this.session;
            console.log('/Caster/' + $scope.selected.id);
            window.location = '/Caster/Index/' + $scope.selected.id;
            console.log($scope.selected.id);
        }
        $scope.filterNoOf = 5;

        $scope.loadMore = function () {
            //var last = $scope.images[$scope.images.length - 1];
            //for(var i = 1; i <= 8; i++) {
            //    $scope.images.push(last + i);
            //}
            $scope.filterNoOf += 2;
            console.log($scope.filterNoOf);
        };

        $scope.hoverIn = function () {
            this.hoverEdit = true;
        };

        $scope.hoverOut = function () {
            this.hoverEdit = false;
        };

        $scope.sortorder = '';
        $scope.imageAlive = 'http://upload.wikimedia.org/wikipedia/commons/a/ac/Approve_icon.svg';
        $scope.imageDead = 'http://us.cdn3.123rf.com/168nwm/vladru/vladru1109/vladru110900014/10552453-abstract-red-sign-no-done-in-3d.jpg';
    }
);