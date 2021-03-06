/**
 * Created by Chau on 7/20/2016.
 */

app
    .controller("MainController", MainController)
    .controller("HomeController", HomeController)
    .controller("DetailsController", DetailsController)
    .controller("CartController", CartController);


// Controller Functions
function MainController($scope) {
    $scope.$on('load', function () {
        $scope.loading = true;
    });

    $scope.$on('unload', function () {
        $scope.loading = false;
    })

}

function HomeController($scope,$firebaseArray) {
    var ref = firebase.database().ref('products').limitToLast(100);
    $scope.listproducts = $firebaseArray(ref);
}

function DetailsController($scope,$stateParams) {
    $scope.id = $stateParams.id;

    products.forEach(function (item) {
        if ($stateParams.id == item.id) {
            $scope.product = item;
            console.log(item);
            return false;
        }
    });
    $scope.activeTab = 1;
    $scope.changeTab = function(tabIndex){
        $scope.activeTab = tabIndex;
    }
}

function CartController($scope) {
    $scope.cart = [];
    if(localStorage.getItem("shopping-cart")) {
        $scope.cart = localStorage.getItem("shopping-cart");
    } else {
        $scope.cart = {};
    }

}