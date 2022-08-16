let container = document.querySelector('.container');
let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let buttonsArr = Array.from(buttons);
let numbers = document.querySelectorAll("[data-key]");
let symbols = document.querySelectorAll('[data-symbol]');


input.value = 0;
currentValue = '';

numbers.forEach(function(element){
    element.addEventListener('click',function(event){
        if(input.value === container.dataset.previousValue){
            input.value = 0;
            container.dataset.previousValue = '';
        }
        if(input.value == "0"){
        input.value = event.target.textContent;
        }else{
            input.value += event.target.textContent;
        }
       
    })

})

symbols.forEach(function(sign){
    sign.addEventListener('click',function(event){
        if(sign.textContent == '+'){
            if(currentValue){
                input.value = Number(input.value) + Number(currentValue);
            }
        }


        container.dataset.previousValue = input.value;
        currentValue = container.dataset.previousValue;
    })
})
