/*global angular*/
angular.module('todoApp', [])
  .controller('TodoListController', function ($scope, $http) {
    // $(function () {
    //   var obj = $('.DragArea')
    //   obj.on('dragover', function (e) {
    //     e.stopPropagation()
    //     e.preventDefault()
    //     $(this).css('border-color', "#c37b7b")
    //   })
    //   obj.on('drop', function (e) {
    //     e.stopPropagation()
    //     e.preventDefault()
    //     $(this).css('border-color', "#c37b7b")
    //     var files = e.originalEvent.dataTransfer.files
    //     console.log(files)
    //     var file = files[0]
    //     $scope.file_Detail = files[0]
    //   })
    // })
    $scope.page1 = true
    $scope.cheagePage1to2 = function () {
      $scope.page1 = false
      $scope.page2 = true
    }
    $scope.get = function () {
      $http.get('https://testresapi.firebaseio.com/data_img.json').then(function (req, res) {
        console.log(res)
      })
    }
  })
