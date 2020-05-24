    'use strict'
//  localStorage.setItem("name",'vlad')
 
const modalWindow =  document.querySelector('.modal'),
 helloWindow      =  modalWindow.querySelector('.modal__window'),
 modalField       =  helloWindow.querySelector('.modal__field'),
 modalBtn         =  helloWindow.querySelector('.btn-modal'),
 helloTitle       =  document.querySelector('.hello-title')


 // Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!». 
 const chechlocalStorage = () => {
    if (!localStorage.getItem("name")){
        modalWindow.classList.add('modal--active')
        helloWindow.classList.add('modal__window--active')
    }
 }
  
 const addNameToTitle = () => {
     if(localStorage.getItem('name') == null ){
         return
     }else{
     let userName = localStorage.getItem('name')
     helloTitle.textContent = `Привет,${userName} !`
     }
}
 

 const sayHello = event => {
    event.preventDefault();
    if(modalField.value.trim() === ""){
       return
    } else {
    localStorage.setItem("name",modalField.value)
       modalWindow.classList.remove('modal--active')
       helloWindow.classList.remove('modal__window--active')
       addNameToTitle()
        }
} 

modalBtn.addEventListener('click',sayHello)
addNameToTitle()
chechlocalStorage()

// Конец 
 
// 2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.


let userYear  =  document.querySelector('.out-userYear'),
 getUserDate  =  document.querySelector('.field--userYear'),
 userDateBtn  =  document.querySelector('.btn--userYear')

const currentDate = new Date().getFullYear()
    

const getMyDate = () => {
   let inpValue =getUserDate.value


    if( inpValue < 0 || 
        currentDate < inpValue || 
        inpValue.length < 4 ) {
        userYear.textContent = "Такое число не подходит ("
    }else {
        userYear.textContent =` ${currentDate - inpValue}`
    }
}
userDateBtn.addEventListener('click',getMyDate)   

// Конец 
    
// 3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

let outPerimeter      = document.querySelector('.out-square'),
getLenthOfSideSquare  = document.querySelector('.field--square'),
getPerimeter          = document.querySelector('.btn--square')


const calcPerimeter = () => {
let inpValue = Math.abs(getLenthOfSideSquare.value)
outPerimeter.textContent = inpValue * 4
}
getPerimeter.addEventListener('click',calcPerimeter)


//  Запросите у пользователя радиус окружности и выведите площадь такой окружности.

let outAreaOfCircle  = document.querySelector( '.out-radius' ),
getRadiusOfCircle    = document.querySelector( '.field--radius' ),
getArea              = document.querySelector( '.btn--radius' )

 const calcArea = () => {
    let radius = Math.abs( getRadiusOfCircle.value ) ** 2
    outAreaOfCircle.textContent = ( Math.PI * radius ).toFixed( 2 )
 }


getArea.addEventListener( 'click',calcArea )
// Конец 



// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

const getValueOfMoney  =  document.querySelector( '.field--money' ),
outValueofMoney        =  document.querySelector( '.out-money' )
const exchangeValue    =  0.92

const convert = event => {

    let conditions = event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57
    if ( conditions ){
    
        event.preventDefault();
       
    } else {
        outValueofMoney.innerHTML = (getValueOfMoney.value * exchangeValue).toFixed( 2 )
    }
   
}  
getValueOfMoney.addEventListener( 'keydown',convert )
getValueOfMoney.addEventListener( 'keyup',convert )     
 // Конец   


// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку. 

const amountOfMemory = document.querySelector( '.field--memory' ),
outValueOfMemory     = document.querySelector( '.out-memory' )

const checkAvailableMemory = event => {
    let outValue = Math.floor((amountOfMemory.value * 1024 ) / 820 )
 
    let conditions = event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57
        if( conditions ){
            event.preventDefault()
        } else if (outValue != 0 ){

            outValueOfMemory.innerHTML =  outValue
        }  
}
 
amountOfMemory.addEventListener('keydown', checkAvailableMemory) 
amountOfMemory.addEventListener('keyup', checkAvailableMemory) 
  // Конец   

 //  Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

 const moneyField          = document.querySelectorAll( '.moneyField' ),
    outAmountOfChocolate   = document.querySelector( '.out-amountOfChocolate' ),
    outSurrender           = document.querySelector( '.out-surrender' )


    const calc = () => {
        const amountOfMoney = +document.querySelector( '.field--amountOfMoney' ).value,
        priceOfProduct      = +document.querySelector( '.field--priceOfProduct' ).value

        if(amountOfMoney != 0 && priceOfProduct != 0 && amountOfMoney >= priceOfProduct ){
            let quantity    =  amountOfMoney / priceOfProduct
            let cashChange  =  amountOfMoney - priceOfProduct * Math.floor(quantity)
            outAmountOfChocolate.innerHTML = quantity.toFixed()
            outSurrender.innerHTML         = cashChange.toFixed(2)
        
        } else {
            outAmountOfChocolate.innerHTML = 0
            outSurrender.innerHTML         = 0
        }


        
    }

   const  checkValue = event => {

      let keyCode =  event.which
  
    if( keyCode != 8 && keyCode != 0 && keyCode < 48 || keyCode > 57 && keyCode != 190){
        event.preventDefault()
    }
}
    
  
       

    
    moneyField.forEach( el => {
        el.addEventListener('keydown',checkValue)
        el.addEventListener('keyup',calc)
    })


   // Конец   

// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

const numInt  = document.querySelector( '.field--num' ),
outNum        = document.querySelector( '.out-num' )
 
 const reverseNumber = event => {
    let keyCode =  event.which
    if( keyCode != 8 && keyCode != 0 && keyCode < 48 || keyCode > 57 && keyCode != 190){
        event.preventDefault()
    }  
    let numValue = numInt.value
    if (numValue.length < 3 ){
        outNum.innerHTML = `Не достает ${3 - numValue.length} числа`
    }else if (numValue.length > 3){
        let lngthNum = numValue.length - 3 
        let ones     = `Слишком много чисел, удалите ${lngthNum} числo`
        let more     = `Слишком много чисел, удалите ${lngthNum} числa`
        lngthNum === 1 ? outNum.innerHTML = ones : outNum.innerHTML = more
    }   
   
    if(numValue.length === 3){
        let value  = Number(numValue)
        let result = 0
        while(value){

            result  = result * 10 + value % 10
            value   = Math.floor(value / 10)
        }
            outNum.innerHTML = result
    }

    
    
    
}

numInt.addEventListener('keydpwn',reverseNumber)
numInt.addEventListener('keyup',reverseNumber)

// Конец  







 
