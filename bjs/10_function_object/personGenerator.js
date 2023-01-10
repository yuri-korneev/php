const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Василиса",
            "id_3": "Пелагея",
            "id_4": "Анна",
            "id_5": "Диана",
            "id_6": "Елена",
            "id_7": "Марина",
            "id_8": "Мария",
            "id_9": "Евгения",
            "id_10": "Ангелина"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алексеев",
            "id_2": "Петров",
            "id_3": "Юрьев",
            "id_4": "Кантемиров",
            "id_5": "Иванов",
            "id_6": "Николаев",
            "id_7": "Никитов",
            "id_8": "Григорьев",
            "id_9": "Владимиров",
            "id_10": "Антонов"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Солдат",
            "id_2": "Шахтер",
            "id_3": "Водитель",
            "id_4": "Охранник",
            "id_5": "Пожарник",
            "id_6": "Слесарь",
            "id_7": "Плотник",
            "id_8": "Нефтяник",
            "id_9": "Пекарь",
            "id_10": "Моряк"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Актриса",
            "id_3": "Певица",
            "id_4": "Писательница",
            "id_5": "Художница",
            "id_6": "Связистка",
            "id_7": "Переводчица",
            "id_8": "Стюардесса",
            "id_9": "Проводница",
            "id_10": "Официантка"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    // метод генерирует случайные целые числа в определенном диапазоне

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min), 

    // метод преобразует строки из json в объект JS

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // метод генерирует пол, от которого потом подтягиваются остальные данные
    randomGender: function () {
        let gender = this.randomIntNumber(1, 0);
        (gender == 1) ? this.gender = this.GENDER_MALE : this.gender = this.GENDER_FEMALE;
        return this.gender;
    },

    randomFirstNameMale: function() {

        return this.randomValue(this.firstNameMaleJson);

    },

    randomFirstNameFemale: function() {

        return this.randomValue(this.firstNameFemaleJson);

    },

    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomBirthYear: function() {
        return this.randomIntNumber(2023, 1900);
    },

    randomProfessionFemale: function () {

        return this.randomValue(this.professionFemaleJson);

    },

    randomProfessionMale: function () {

        return this.randomValue(this.professionMaleJson);

    },

    randomPatronymic: function () {

        return this.randomValue(this.patronymicJson);

    },

    randomBirthMonth: function () {

        return this.randomValue(this.monthJson);

    },

 
    // метод генерирует случайные данные из json в зависимости от выбранного пола

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.year = this.randomBirthYear();
        this.person.month = this.randomBirthMonth();

        if (this.person.gender == this.GENDER_MALE) {
            this.person.firstName = this.randomFirstNameMale();
            this.person.surname = this.randomSurname();
            this.person.profession = this.randomProfessionMale();
            this.person.patronymic = this.randomPatronymic() + 'ич';
        } else {
            this.person.firstName = this.randomFirstNameFemale();
            this.person.surname = this.randomSurname() + 'a';
            this.person.profession = this.randomProfessionFemale();
            this.person.patronymic = this.randomPatronymic() + 'на';
        }

        if (this.person.month == "апреля" || this.person.month  == "июня" || this.person.month  == "сентября" || this.person.month  == "ноября"){
            this.person.day = this.randomIntNumber(30, 1);
        }
        else if (this.person.month == "февраля") {
            this.person.day = this.randomIntNumber(28, 1);
        } else {
            this.person.day = this.randomIntNumber(31, 1);
        }
                              
        return this.person;
    }
};
