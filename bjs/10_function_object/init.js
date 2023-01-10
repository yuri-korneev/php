
 window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthYearOutput').innerText = initPerson.year;    
    document.getElementById('professionOutput').innerText = initPerson.profession;   
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;  
    document.getElementById('birthMonthOutput').innerText = initPerson.month;  
    document.getElementById('birthDayOutput').innerText = initPerson.day;
};


document.getElementById('btnGenerate').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('birthYearOutput').innerText = initPerson.year;    
    document.getElementById('professionOutput').innerText = initPerson.profession;   
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;  
    document.getElementById('birthMonthOutput').innerText = initPerson.month;  
    document.getElementById('birthDayOutput').innerText = initPerson.day;
})


document.getElementById('btnClear').addEventListener('click', function() {    
    document.getElementById('firstNameOutput').innerText = "Имя";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('birthYearOutput').innerText = "Год рождения";    
    document.getElementById('professionOutput').innerText = "Профессия";   
    document.getElementById('patronymicOutput').innerText = "Отчество";  
    document.getElementById('birthMonthOutput').innerText = "Месяц рождения";  
    document.getElementById('birthDayOutput').innerText = "День рождения";
})
