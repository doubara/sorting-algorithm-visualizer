//importing delay function
import delay from "./delay.js"

// function swapElement(value){
//     let startHeight = value[starting].clientHeight
//     value[starting].style.height = `${currentElem.clientHeight}px`
//     value[i].style.height = `${startHeight}px`
// }
function swap(first, second){
    let startHeight = first.clientHeight
    first.style.height = `${second.clientHeight}px`
    second.style.height = `${startHeight}px`
}
export default async function ascendingSort(value){
    // value = Array.from(value);
    let starting = 0
    let countDown = value.length-1
    while (countDown > 0){
        for (let i=1; i<=value.length-1; i++){
            const startElem = value[starting]
            const currentElem = value[i]
            
                // startElem.style.backgroundColor = "red";
                // currentElem.style.backgroundColor = "red";

            if (startElem.clientHeight > currentElem.clientHeight){
                await delay(10)
                swap(value[starting], value[i]);
                // starting++
            }
            // else {
            //     starting++
            // }
            
            // value[starting].style.backgroundColor = "hsl(160, 100%, 75%)";
            starting++;
        }
        // value[value.length - (value.length - countDown)].style.backgroundColor = 'green';
        countDown--
        starting = 0
    }
    // value[0].style.backgroundColor = 'hsl(160, 100%, 75%)';
}