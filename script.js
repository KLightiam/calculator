let container = document.querySelector('.container');
let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let buttonsArr = Array.from(buttons);
let numbers = document.querySelectorAll("[data-key]");
let symbols = document.querySelectorAll('[data-symbol]');


input.value = 0;
let currentValue = '';
let operator;

numbers.forEach(function(element){
    element.addEventListener('click',function(event){
        if(input.value === container.dataset.previousValue){
            input.value = 0;
            container.dataset.previousValue = '';
        }
        if((element.textContent == '.') && (input.value.includes('.'))){
            return;
        }

        if(input.value == "0"){
        input.value = event.target.textContent;
        }else{
            input.value += event.target.textContent;
        }
       
        symbols.forEach(function(sign){
            sign.dataset.symbol = "";
        })
    })

})

symbols.forEach(function(sign){
    sign.addEventListener('click',function(event){
        if(sign.dataset.symbol){
            return;
        }

        else if(sign.textContent){
            if((currentValue) && (operator == '+')){
                input.value = Number(input.value) + Number(currentValue);
            
            }else if((currentValue) && (operator == '-')){
                input.value = Number(currentValue) - Number(input.value);
            
            }else if((currentValue) && (operator == '*')){
                input.value = Number(currentValue) * Number(input.value);
            
            }else if((currentValue) && (operator == '/')){
                input.value = Number(currentValue) / Number(input.value);
            
            }else if((currentValue) && (operator == '%')){
                input.value = Number(currentValue) % Number(input.value);
            }
        }

        sign.dataset.symbol =`${sign.textContent}`;
        operator = sign.dataset.symbol;
        container.dataset.previousValue = input.value;
        currentValue = container.dataset.previousValue;
    })
})


let negation = document.querySelector('[data-negation]');
console.log(negation);