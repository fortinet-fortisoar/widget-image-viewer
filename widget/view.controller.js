/* Copyright start
  Copyright (C) 2008 - 2023 Fortinet Inc.
  All rights reserved.
  FORTINET CONFIDENTIAL & FORTINET PROPRIETARY SOURCE CODE
  Copyright end */
    'use strict';
    (function () {
        angular
            .module('cybersponse')
            .controller('staticImageViewer100Ctrl', staticImageViewer100Ctrl);

        staticImageViewer100Ctrl.$inject = ['$scope'];

        function staticImageViewer100Ctrl($scope) {
          $scope.config.image = $scope.config.image ? $scope.config.image : '';
          $scope.config.height = $scope.config.height ? $scope.config.height : '300';
          $scope.imageStyle = $scope.config.stretchImage ? "" : "object-fit: cover;";
        }
    })();
