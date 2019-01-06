angular.module('mmbApp.categoryCtrl',[])
    .controller('categoryCtrl', ['$scope','$http', function($scope,$http){
        $http({
            url:'http://mmb.ittun.com/api/getcategorytitle'
        }).success(function (data) {
            // console.log(data);
           $scope.categoryTitle = data; 
        });
        $scope.getCategory = function (titleId) {
            $http({
                url:'http://mmb.ittun.com/api/getcategory',
                params:{'titleid':titleId}
            }).success(function (data) {
                // console.log(data);
                $scope.category = data;
            })
        }
    }]);
// /*
//  * @Author: zhengwei
//  * @Date:   2016-11-23 23:23:00
//  * @Last Modified by:   zhengwei
//  * @Last Modified time: 2017-02-14 20:33:47
//  */

// 'use strict';
// $(function() {
//     setCategoryTitle();
//     function setCategoryTitle() {
//         $.ajax({
//             url: "http://mmb.ittun.com/api/getcategorytitle",
//             success: function(data) {
//                 var html = template("categoryTitleTmp", data);
//                 $("#category > .panel-group").html(html);
//                 var categoryTitle = $("#category > .panel-group > .panel-default > .panel-heading > h4 > a");
//                 categoryTitle.on("click", function(e) {
//                     var titleId = $(this).data("titleid");
//                     // var titleId = $(this).attr("data-titleid");
//                     $.ajax({
//                         url: "http://mmb.ittun.com/api/getcategory?titleid=" + titleId,
//                         success: function(data) {
//                             var html = template("categoryTmp", data);
//                             var panelBody = $(e.target).parent().parent().parent().find(".panel-collapse").find('.panel-body');
//                             panelBody.html(html);
//                             var categoryList = panelBody.find('.row > div');
//                             var count = categoryList.length % 3 || 3;
//                             panelBody.find(".row > div:nth-last-child(-n+" + count + ")").css("border-bottom", "0");
//                         }
//                     })
//                 });
//             }
//         })
//     }
// })
