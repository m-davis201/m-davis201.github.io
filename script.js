const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');
const itemArray = [];

function addItem(){
    let template = itemArray.map(item => `<li>${item}</li>`).join('\n');
    document.querySelector('ol').innerHTML = template;

}



function fun1(){
	itemArray.push(txt1.value);
    txt1.value = '';
    addItem();
}




btn1.addEventListener('click', fun1);
txt1.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        fun1();
    }
})

   
