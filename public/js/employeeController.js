(function () {
    "use strict"

    function getEmployeeById(id) {
        $.ajax({
            method: "GET",
            url: "/api/employee/" + id
        })
        .done(employee => {
            console.log(employee)
        });
    }

    $("form").on("submit", event => {
        let id = $("#employeeId").val()
        getEmployeeById(id)
        return false
    })
    
})()