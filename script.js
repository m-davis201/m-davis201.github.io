const txt1 = document.getElementById('tbuser');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');
const itemList = [];

	function fun1(){
		itemList.push(txt1.value);
		out1.innerHTML = itemList;
    }

	btn1.addEventListener('click', fun1);
    txt1.addEventListener('keyup', (e) => {
        if(e.keyCode === 13){
            fun1();
        }
    })
