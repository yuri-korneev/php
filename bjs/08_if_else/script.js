
let minValue;
let maxValue;

function numberToString(numberGame) {
    const
        rank0 =['минус'],
        rank1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        rank10 = ['десять', 'одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
        rank20 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        rank100 = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];             
        
   let outString;
   let number = Math.abs(numberGame);
   let outStringText;
   
    if (number == 0) return number;

    else if (number < 20) {

        outString = (number / 10 >= 1) ? rank10[number % 10] : rank1[number - 1];  

    }
            
    else if (20 <= number && number <= 99) {

        outString = rank20[Math.floor(number / 10 - 2)] + ' ' + ((number % 10 == 0) ? '' :rank1[number % 10 - 1]);
    }

    else if (number > 99) {
    
        if (number % 100 >= 20) {
        outString = rank100[Math.floor(number / 100 - 1)] + ' ' + rank20[Math.floor((number % 100) / 10 - 2)] + ' ' + (((number % 100) % 10 == 0) ? '' :rank1[(number % 100) % 10 - 1]);
        }

    else if (number % 100 > 0) {

        outString = rank100[Math.floor(number / 100 - 1)] + ' ' + ((number % 100 < 10) ? '' : rank10[(number % 100) % 10]) + ((number % 100 >= 10) ? '' : rank1[number % 10 - 1]);
    }
    else 
        outString = rank100[Math.floor(number / 100 - 1)];

    }
    
    if (numberGame >=0 ) {
        outStringText = outString;
    }
    else outStringText = rank0[0] + " " + outString;

    if (outStringText.length <= 20) {
        return outStringText;
    }

    else return numberGame;

}


function func(){

     $(document).ready(function(){
                    
        $('#PromisePrompt').modal({
            backdrop: 'static',
            keyboard: false,                                       
        })                           

    })   
        
    $(document).ready(function(){
                    
        $('#btn').click(function() {
            
            minValue = parseInt($("#PromisePrompt").find('input').val());
            
            $('#PromisePrompt1').modal({
                backdrop: 'static',
                keyboard: false,                
                })
            })

    }) 

              
    $(document).ready(function() {

        $('#btn1').click(function() {
            
        maxValue = parseInt($("#PromisePrompt1").find('input').val());

        console.log(minValue);
        console.log(maxValue);

        
        minValue = minValue || 0;
        minValue = (minValue < -999 || minValue > 999 || minValue > maxValue) ? -999 : minValue;    
          
          
        if (maxValue == 0) {
            maxValue = 0;
        } else {
        maxValue = maxValue || 100;
        maxValue = (maxValue > 999 || maxValue < -999) ? 999 : maxValue;
        }

        
        console.log(minValue);
        console.log(maxValue);
        
            $("#myModal .modal-body").html('Загадайте любое целое число от ' + minValue + ' до ' + maxValue +', а я его угадаю');
            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false,                
                })
            
        })

    })

}

func();

    $(document).ready(function(){
                    
        $('#btn2').click(function() {           
  

    //alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber = Math.floor((minValue + maxValue) / 2);

let orderNumber = 1;
let gameRun = true;

let orderNumberField = document.getElementById('orderNumberField');
let answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${numberToString(answerNumber) }?`; 

 
document.getElementById('btnRetry').addEventListener('click', function () {
      minValue = 0;
      maxValue = 100;
      orderNumber = 0;
     
      func();

})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.random()*3);
            let answerPhrase;
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали число ${numberToString(answerNumber) }?`;
                    break;
                case 1:
                    answerPhrase = `Да это дегко! Ты загадал ${numberToString(answerNumber) }?`;
                    break;
                case 2:
                    answerPhrase = `Наверное, это число ${numberToString(answerNumber) }?`;
                    break;
                case 3:
                    answerPhrase = `Пусть будет число ${numberToString(answerNumber) }?`;
                    break;                
              }

            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber-1;
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;


            const phraseRandom = Math.round(Math.random()*3);
            let answerPhrase;
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали число ${numberToString(answerNumber) }?`;
                    break;
                case 1:
                    answerPhrase = `Да это дегко! Ты загадал ${numberToString(answerNumber) }?`;
                    break;
                case 2:
                    answerPhrase = `Наверное, это число ${numberToString(answerNumber) }?`;
                    break;
                case 3:
                    answerPhrase = `Пусть будет число ${numberToString(answerNumber) }?`;
                    break;                
              }

            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        const phraseRandom = Math.round(Math.random()*2);
        let answerPhrase;
        switch (phraseRandom) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                answerPhrase = `Ну, я же говорил, что это легко\n\u{1F44D}`;
                break;
            case 2:
                answerPhrase = `Эххх, как все было просто\n\u{1F44F}`;
                break;                          
          }

        answerField.innerText = answerPhrase;

        gameRun = false;
    }
})

});

});               
  