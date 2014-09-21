'use strict';

app.controller('CharacterController',
    function ($scope, GoTData, $routeParams) {

        $scope.loadCharacter = function (param) {

            console.log(param);
            $scope.character = GoTData.event.sessions[param];
        }

        $scope.hoverIn = function () {
            this.hoverEdit = true;
        };

        $scope.hoverOut = function () {
            this.hoverEdit = false;
        };

    }
);