var lastCheckbox = document.getElementById('wszystkie-zgody');
var everyCheckbox = document.querySelectorAll('input[type=checkbox]');

//console.log(everyCheckbox);

function checkboxState() {
    var x = document.getElementById("wszystkie-zgody").checked;
    //    document.getElementById("demo").innerHTML = x;
    var pierwszaZgoda = document.getElementById('zgoda-marketingowa-1');
    var drugaZgoda = document.getElementById('zgoda-marketingowa-2');
    pierwszaZgoda.checked = x;
    drugaZgoda.checked = x;
}
