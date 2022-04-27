//importing the delay module
import delay from "./delay.js"

//define a fuunction named inseretionSort to abststract our code
export default async function insertionSort(arr){
    //loop over each element in our array
    for (let i=1; i<=arr.length-1; i++){
        // create a sub array from 0 to the current value of our iteration
        //it is this sub array we will sort as wwe loop through our full array
        for (let j = i; j>0; j--){
            //inside our sub array, we loop from the highest element till 1
            //this is done to do a descending check
            //meaning, we are comparing the last element all other subsequent
            if (arr[j].clientHeight < arr[j-1].clientHeight){
                //if the element at i which is the last ellement in our sub array is smaller than any given element, we would switch their position
                // let currentHeight = arr[j].clientHeight
                // arr[j].style.height = arr[j-1].clientHeight
                // arr[j-1] = currentHeight
                await delay(1000)
                swap(arr[j], arr[j-1])
                // arr[j].style.backgroundColor = 'hsl(160, 100%, 75%)'
            }
        }
    }
}
function swap(first, second){
    let currentHeight = first.clientHeight
    first.style.height = `${second.clientHeight}px`
    second.style.height = `${currentHeight}px`

}