let input=document.getElementById('inputBox');
console.log('hello');
let buttons=document.querySelectorAll('.btn');

let string="";
let arr=Array.from(buttons);
let g=1;
arr.forEach(buttons =>{
    console.log("inside for each outside event")
    buttons.addEventListener('click',(e)=>{
        console.log('inside ADD event');
        if(e.target.innerHTML== '='){
            string=eval(string);
            console.log("hello");
            input.value=string;
        }
        else if(e.target.innerHTML =='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML == 'Del'){
            string=string.substring(0,string.length-1);
            input.value =string;
        }
        else{
            string += e.target.innerHTML;
            input.value =string;
        }
    })
})