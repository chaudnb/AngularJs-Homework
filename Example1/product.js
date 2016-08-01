/**
 * Created by Chau on 8/1/2016.
 */
angular.module("app.directives.product", [])
    .directive("product", function () {
        return {
            restrict: "E", //E = element, A = attribute, C = class, M = comment
            scope: {
                pd: "="
            },
            replace: true,
            templateUrl: "templates/producttemplate.html",
            controller: function ($scope, $interval) {

                //console.log($scope.pd);
                /*
                 $interval(function () {
                 console.log("interval");
                 }, 1000);
                 */
            },
            link: function (scope, element, attrs) {
                //console.log(attrs.id); // GET ID

                element.on("click", function (e) {
                    //console.log(e);
                });
            }
        };
    });