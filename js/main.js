//Imported the sort algorithms from their respsctive modules in our javascript folder
import ascendingSort from "./bubble-sort.js"
import selectionSort from "./selection-sort.js";
import insertionSort from "./insertion-sort.js";

//generates a random amount of arrays from the slider
const slider = document.getElementById('slider')
slider.addEventListener('change', (e)=>{
    const value = e.currentTarget.valueAsNumber;
    globalObj['sliderValue'] = value
    createElements(value);

})

//create a global obj to store values
const globalObj = {
    sliderValue: slider.value,
}
//select our container element
const container = document.querySelector('#container')

//Selected the parent element of the container element to get the width of the parent.
let parent = document.querySelector("[data-id='bounding-client']");

//compute the width of the parent of the container div in order to use it to compute random widths from zero to the width of the parent div
const parentHeight = parent.getBoundingClientRect().height

//this function creates a fixed number of div items and populates our html with them
function createElements(n){
    container.innerHTML = ''
    for (let i=1; i<=n; i++){
        const elem = document.createElement('div')
        elem.classList.add('item')
        elem.setAttribute('id', `id-${i}`)
        let rand = createRandom()
        elem.style.height = `${rand}px`;
        // elem.innerHTML = `<p>${rand}px</p>`
        container.appendChild(elem)
    }
        
}

//create a window load event that generates random divs when page loads

window.onload = function(e){
    createElements(50)
}
//creata a function that returns randoom numbers from 1 to the parent container width. these widths are used to generate div items with random widths 
function createRandom(){
    return Math.ceil(Math.random()*parentHeight)
}

// function that selects all the newly generated div items
// function selectItems(){
//     const data = {container,  parentHeight}
//     const items = container.children
//     createElements(false, ascendingSort(items))
//     ascendingSort(items)
// }
//select the sort button
const bubbleSortBtn = document.querySelector('#bubble-sort')
//call sort function to sort array once the button is
bubbleSortBtn.addEventListener('click', async function(){
    const items = container.children
    await ascendingSort(items)
})
//selection sort
const selectionSortBtn = document.querySelector('#selection-sort')
//call sort function to sort array once the button is
selectionSortBtn.addEventListener('click', async function(){
    console.log('lets go selection sort')
    const items = container.children
    await selectionSort(items)
})

//insertion sort button
const insertionSortBtn = document.querySelector('#insertion-sort')
insertionSortBtn.addEventListener('click', async function(){
    // console.log('lets go selection sort')
    const items = container.children
    await insertionSort(items)
})


const newArray = document.querySelector('#new-array')
newArray.addEventListener('click', function(e){
    createElements(globalObj['sliderValue'])
})
