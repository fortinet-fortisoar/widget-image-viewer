/* Copyright start
  Copyright (C) 2008 - 2023 Fortinet Inc.
  All rights reserved.
  FORTINET CONFIDENTIAL & FORTINET PROPRIETARY SOURCE CODE
  Copyright end */
'use strict';
(function () {
    angular
        .module('cybersponse')
        .controller('editStaticImageViewerWidget100Ctrl', editStaticImageViewerWidget100Ctrl);

    editStaticImageViewerWidget100Ctrl.$inject = ['$scope', '$uibModalInstance', 'config'];

    function editStaticImageViewerWidget100Ctrl($scope, $uibModalInstance, config) {
        $scope.cancel = cancel;
        $scope.save = save;
        $scope.config = config;
        $scope.config.imageBase64 = $scope.config.imageBase64 ? $scope.config.imageBase64 : '';
        $scope.config.imageName = $scope.config.imageName ? $scope.config.imageName : '';

        $scope.$watch('config.image', function (oldValue, newValue) {
            if ($scope.config.image && oldValue !== newValue) {
                $scope.config.imageName = $scope.config.image.name;
            }
        });

        function blobToBase64(blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    const base64String = reader.result;
                    resolve(base64String);
                };
                reader.readAsDataURL(blob);
            });
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            if($scope.config.image.length === 0){
                $uibModalInstance.close($scope.config);
            }
            else{
                blobToBase64($scope.config.image)
                .then(base64String => {
                    $scope.config.imageBase64 = base64String;
                    delete $scope.config.image;
                    $uibModalInstance.close($scope.config);
                });
            }
        }
    }
})();
