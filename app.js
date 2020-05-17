//  localStorage.setItem("name",'vlad')
 
const modalWindow = document.querySelector('.modal'),
 helloWindow = modalWindow.querySelector('.modal__window'),
 modalField = helloWindow.querySelector('.modal__field'),
 modalBtn = helloWindow.querySelector('.btn-modal'),
 helloTitle = document.querySelector('.hello-title')


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
    }else {
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
 
//2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.


let userYear = document.querySelector('.out-userYear'),
 getUserDate = document.querySelector('.field--userYear'),
userDateBtn = document.querySelector('.btn--userYear')

const currentDate = new Date().getFullYear()
    

const getMyDate = () => {
   let inpValue =getUserDate.value
console.log(inpValue.length);

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
console.log(outPerimeter);
console.log(getLenthOfSideSquare);
console.log(getPerimeter);

const calcPerimeter = () => {
let inpValue = Math.abs(getLenthOfSideSquare.value)
outPerimeter.textContent = inpValue * 4
}
getPerimeter.addEventListener('click',calcPerimeter)


//  Запросите у пользователя радиус окружности и выведите площадь такой окружности.

let outAreaOfCircle  = document.querySelector('.out-radius'),
getRadiusOfCircle    = document.querySelector('.field--radius'),
getArea              = document.querySelector('.btn--radius')

 const calcArea = () => {
    let radius = Math.abs(getRadiusOfCircle.value)
    outAreaOfCircle.textContent = (Math.PI * radius * 2).toFixed(2)
 }


getArea.addEventListener('click',calcArea)
// Конец 

