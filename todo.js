//ajax
function myAjax() {
    return new Promise((resolve, reject) => {
        $.get("https://jsonplaceholder.typicode.com/todos", function (text) {
            buildList(text);
        });
        var error = false;
        if (!error) {
            resolve();
        } else {
            reject("error");
        }
    });
}

//function to show alert message and use promise
function alertCheck() {
    $("input[type='checkbox']").click(function () {
        var numberOfChecked = $("input[type='checkbox']:checked:not(:disabled)")
            .length;
        if (numberOfChecked == 5) {
            alert("Success");
        }
    });
}

//function to build checkbox list
function buildList(data) {
    var check = document.getElementById("myForm");

    for (var i = 0; i < data.length; i++) {
        if (data[i].completed == false) {
            var row = `<input type="checkbox" id="customcheck${i}">
                  <label for="customcheck${i}"> ${data[i].title}</label><br>
                  `;
            check.innerHTML += row;
        } else {
            var row = `<input type="checkbox" id="customcheck${i}" checked="true" disabled>
                  <label for="customcheck${i}"> ${data[i].title}</label><br>
                  `;
            check.innerHTML += row;
        }
    }
}

myAjax().then(alertCheck);
