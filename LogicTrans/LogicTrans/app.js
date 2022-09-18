angular.module('myapp', [])
    .directive('ngTree', function () {
        return {
            restrict: 'E',
            transclude: true,

            controller: function ($scope) {

                $scope.showVacancies = function (item) {
                    item.active = !item.active;
                };

                $scope.items = [
                    {
                        label: "Основные требования",
                        requirements: [
                            { requirement: "наличие водительского удостоверения категории Е" },
                            { requirement: "опыт работы по категории на тягаче с полуприцепом не менее 3 лет" },
                            { requirement: "не менее 10-ти самостоятельных рейсов в Европу" },
                            { requirement: "удостоверение водителя - международника" }
                        ]
                    },
                    {
                        label: "Условия работы",
                        conditions: [
                            { condition: "автопоезда DAF, MAN+ полуприцепы Schmitz, тенты и тралы класса Euro-5" },
                            { condition: "обслуживание и ремонт техники в ЕС на СТО" },
                            { condition: "стоянка и офис на одной территории" },
                            { condition: "своевременная выплата заработной платы" },
                            { condition: "отсутствие простоев без загрузок" }
                        ]
                    },
                    {
                        label: "Дополнительная информация",
                        additional_info: [
                            { info: "оптимальный возраст от 25 лет" },
                            { info: "возможны командировки более 3-х дней" },
                            { info: "ученики очных форм обучения не рассматриваются" }
                        ]
                    }
                ];
            },
            templateUrl: 'treeview.html'
        };
    });

