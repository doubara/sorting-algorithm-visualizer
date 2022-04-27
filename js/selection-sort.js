import delay from "./delay.js"
// function swap(arr,n, smallest){
// }
export default async function selectionSort(arr){
    const arrLength = arr.length
    let n = 0
    while (n <= arrLength-2){
        let smallest = arr[n+1]
        for (let i =n+1; i<= arrLength-2; i++){
            if (arr[i+1].clientHeight < smallest.clientHeight){
                smallest = arr[i+1]
            }
        }
        if (arr[n].clientHeight > smallest.clientHeight){
            await delay(2000)
            let value = arr[n].clientHeight
            let indexOfSmallest = Array.from(arr).indexOf(smallest)
            arr[n].style.height = `${(smallest.clientHeight)}px`
            arr[indexOfSmallest].style.height = `${value}px`
        }
        // return
        n++
    }
    // return arr

}