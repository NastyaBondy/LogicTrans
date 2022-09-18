angular.module('myapp', []);
angular.module('myapp').controller('cntrl_1', function ($scope, $rootScope) {
    $rootScope.btn_status = true;
    $rootScope.mainCtrlBtnLabel = "Узнать больше"
    $rootScope.btn_status_msg = "Сейчас недоступно";
    $scope.triggerBroadcast = function () {
        $scope.$broadcast('enable_Btns', { "btnEnable": false, "message": "Узнать подробнее" });
    }
    $scope.$on('btn_enabled', function (event, data) {
        $rootScope.mainCtrlBtnLabel = data.main_ctrl_msg;
    });
});
angular.module('myapp').controller('cntrl_2', function ($scope, $rootScope) {
    $scope.$on('enable_Btns', function (event, data) {
        console.log(data.btnEnable);
        $rootScope.btn_status = data.btnEnable;
        $rootScope.btn_status_msg = data.message;
    })
});
angular.module('myapp').controller('cntrl_3', function ($scope, $rootScope) {
    $scope.$on('enable_Btns', function (event, data) {
        console.log(data.btnEnable);
        $rootScope.btn_status = data.btnEnable;
        $rootScope.btn_status_msg = data.message;
    })
});
angular.module('myapp').controller('cntrl_4', function ($scope, $rootScope) {
    $scope.$on('enable_Btns', function (event, data) {
        console.log(data.btnEnable);
        $rootScope.btn_status = data.btnEnable;
        $rootScope.btn_status_msg = data.message;
    })
});
angular.module('myapp').controller('cntrl_5', function ($scope, $rootScope, $timeout) {
    $scope.$on('enable_Btns', function (event, data) {
        console.log(data.btnEnable);
        $rootScope.btn_status = data.btnEnable;
        $rootScope.btn_status_msg = data.message;
        $timeout(function () {
            $scope.$emit('btn_enabled', { "main_ctrl_msg": "Выберите подходящую вам услугу" });
        }, 1000)
    });
});