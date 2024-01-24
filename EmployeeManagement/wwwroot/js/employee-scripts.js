
$(document).ready(function () {

    $("#addEmployeeForm").submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            url: "/Employees/Create",
            method: "POST",
            data: formData,
            success: function (data) {
                if (data.success) {
                    location.reload();
                } else {
                    alert("Failed to add a new employee.");
                }
            },
            error: function () {
                alert("Error occurred while adding a new employee.");
            }
        });
    });
    
    $(".delete-btn").click(function () {
        var employeeId = $(this).data("id");

        if (confirm("Are you sure you want to delete this employee?")) {
            $.ajax({
                url: "/Employees/DeleteEmployee/" + employeeId,
                method: "POST",
                success: function (data) {
                    if (data.success) {
                        location.reload();
                    } else {
                        alert("Failed to delete employee.");
                    }
                },
                error: function () {
                    alert("Error occurred while deleting employee.");
                }
            });
        }
    });

    $(".edit-btn").click(function () {
        var employeeId = $(this).data("id");

        
        $.ajax({
            url: "/Employees/Edit/" + employeeId,
            method: "GET",
            success: function (data) {
                
                if (data) {
                    
                    $("#editEmployeeForm input[name='Id']").val(data.id);
                    $("#editEmployeeForm input[name='FirstName']").val(data.firstName);
                    $("#editEmployeeForm input[name='MiddleName']").val(data.middleName);
                    $("#editEmployeeForm input[name='LastName']").val(data.lastName);
                    $("#editEmployeeForm input[name='EmailAddress']").val(data.emailAddress);
                    $("#editEmployeeForm input[name='PhoneNo']").val(data.phoneNo);

           
                    $("#editEmployeeModal").modal("show");
                } else {
                    alert("Failed to fetch employee details for editing.");
                }
            },
            error: function () {
                alert("Error occurred while fetching employee details for editing.");
            }
        });
    });


    $("#editEmployeeForm").submit(function (e) {
        e.preventDefault();

        var formData = $(this).serialize();

        console.log("Form Data:", formData);

        $.ajax({
            url: "/Employees/Edit",
            method: "POST",
            data: formData,
            success: function (data) {
                if (data.success) {
                   
                    $("#editEmployeeModal").modal("hide");
                    
                    location.reload();
                } else {
                    alert("Failed to edit employee.");
                }
            },
            error: function () {
                alert("Error occurred while editing employee.");
            }
        });
    });

});
