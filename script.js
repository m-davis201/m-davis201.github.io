const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const out1 = document.getElementById('output1');
const ol = document.getElementById("first-ol");
const itemArray = [];


function fun1(){
	itemArray.push(txt1.value);
    itemArray.forEach(function(e){
        const li =
        document.createElement('li');
        li.innerText = e;
        ol.append(li)
    })
}




btn1.addEventListener('click', fun1);
txt1.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        fun1();
    }
})

   
