
let age = document.getElementById('age');
age.style.display = 'none';
function showUser(surname, name) {
    
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}


showUser.call(age, 'Петров', 'Василий');
