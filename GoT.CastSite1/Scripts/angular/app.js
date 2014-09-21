'use strict';

var app = angular.module('app', ['ngAnimate', 'infinite-scroll', 'ngResource', 'ngRoute']).
            config(function ($routeProvider) {
                $routeProvider.when('/Caster/:casterId',
                    {
                        templateUrl: '/Caster/Index.cshtml',
                        controller: 'CharacterController'
                    })
            });