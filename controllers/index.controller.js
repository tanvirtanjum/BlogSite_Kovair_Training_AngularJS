var app = angular.module('taskApp', []);

app.controller("taskCtrl", function ($scope){
    $scope.tasks = [];

    //! CLEAR FIELDS
    function ClearFields(){
        $scope.Id = 0;
        $scope.Title = "";
        $scope.Description = "";

        $("Title").val("");
        $("Description").val("");
    }

    //! ADD TASK
    $scope.AddData = function (){
        var task = {
            'Id': $scope.tasks.length + 1,
            'Title': $scope.Title,
            'Description': $scope.Description
        };

        $scope.tasks.push(task);

        ClearFields();

        $("#taskModal").modal('toggle');
    }

    //! DELETE TASK
    $scope.DeleteData = function (task){
        $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    }


    //! VIEW TASK
    $scope.ViewData = function (task){
        $('#btnUpdate').show();
        $('#btnAdd').hide();

        $scope.Id = task.Id;
        $scope.Title = task.Title;
        $scope.Description = task.Description;
    }

    //! UPDATE TASK
    $scope.UpdateData = function (){
        $.grep($scope.tasks, function(e){
            if(e.Id == $scope.Id){
                e.Title = $scope.Title;
                e.Description = $scope.Description;
            }
        }); 

        ClearFields();

        $("#taskModal").modal('toggle');
    }


    //! MANAGE BUTTON BEHAVIOR
    $("#btnAddRequest").on("click", function(){
        $('#btnUpdate').hide();
        $('#btnAdd').show();
    });

    //! MANAGE MODAL BEHAVIOR
    $("#taskModal").on("show.bs.modal", function(){
        ClearFields();
    });
})