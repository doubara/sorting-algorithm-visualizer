//write a delay function
export default function delay(millisec=1000){
    return new Promise(resolve =>{
        setTimeout(()=>{resolve(''), millisec})
    })
}