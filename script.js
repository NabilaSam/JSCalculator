"use strict";

const output =document.getElementById("prime-output");
const display_answer =document.getElementById("display-window");
let arr = [] 

function addToSum(num){
    switch(num){
    case `+`:
    case `-`:
    case `*`:
    case `/`:
        output.innerHTML  += num
        arr = []
        console.log(arr)
    break;
    case `.`:
        if(arr.includes(`.`)){
            output.innerHTML = output.innerHTML
        } else{
            output.innerHTML += num
            arr.push(num)
            console.log(arr)
        }
    break;
    default:
    output.innerHTML += num;
    arr.push(num)
    console.log(arr)
}
}
 
function displayAnswer(num){
    display_answer.innerHTML = num;
}
 
function evaluateSum(){
    var math = document.getElementById("prime-output").innerText;
    var result = eval (math);
    console.log(result);
    displayAnswer(result);
}
 
function del(){
    var input = document.getElementById("prime-output").innerText
    input = input.substring(0, input.length -1);
    document.getElementById("prime-output").innerText = input;
    arr.pop()
    console.log(arr)
}
 
// AC button
function clearSum(){
    document.getElementById("prime-output").innerText = '';
    document.getElementById("display-window").innerText = '0000';
    arr = []
}



// const output =document.getElementById("output");

// function display(num){
//     output.innerHTML += num;
// }
// var output = document.getElementById('output'); 

// let calc-button = document.querySelectorAll('calc-button');

// let operator = 




// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));



// function app(){
//     const [expression, setExpression] = React.useState("")
//     const display = (symbol) => {
//         setExpression(prev => prev + symbol)
//     };


//     return(
//         <div className="container">
//             <div className="grid">
//                 <div onClick={display} className="padButton AC">AC</div>
//                 <div onClick={display} className="padButton DEL">DEL</div>
//                 <div onClick={display} className="padButton div">&divide;</div>
//                 <div onClick={display} className="padButton seven">7</div>
//                 <div onClick={display} className="padButton eight">8</div>
//                 <div onClick={display} className="padButton nine">9</div>
//                 <div onClick={display} className="padButton times">&times;</div>
//                 <div onClick={display} className="padButton four">4</div>
//                 <div onClick={display} className="padButton five">5</div>
//                 <div onClick={display} className="padButton six">6</div>
//                 <div onClick={display} className="padButton plus">&plus;</div>
//                 <div onClick={display} className="padButton one">1</div>
//                 <div onClick={display} className="padButton two">2</div>
//                 <div onClick={display} className="padButton three">3</div>
//                 <div onClick={display} className="padButton minus">&minus;</div>
//                 <div onClick={display} className="padButton zero">0</div>
//                 <div onClick={display} className="padButton dot">.</div>
//                 <div onClick={calculate} className="padButton equal">&equals;</div>
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(<app/>, document.getElementById("root"));