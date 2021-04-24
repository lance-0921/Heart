let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string =`
/*你好，我叫多乐
*下面我为你展示我的前端功底
*现场画一个跳动的心
*/
/*
首先写一个div
*/
#div1{
    outline: 1px solid black;
    width: 100px;
    height: 100px;
    background:red;    
}
/*然后写两个伪元素*/

#div1::before{
    content: "2";
    outline: 1px solid black;
    width: 100px;
    height: 100px;
    background:red;
}
#div1::after{
    content: "3";
    outline: 1px solid black;
    width: 100px;
    height: 100px;
    background:red;
}
/*移动伪元素的位置、变成圆弧*/
#div1::before{
    transform: translateY(-100px);
    border-radius: 50% 50% 0 0;
}
#div1::after{
    right: 100px;
    border-radius: 50% 0 0 50%;
}

/*让红心更形象*/
#div1::before{
    transform: translateY(-80px); 
}
#div1::after{
    transform: translate(20px);
}

/*消除标记和黑边框*/
#div1{
    outline:none;
}
#div1::before{
    content:' ';
    outline:none;
}
#div1::after{
    content:' ';
    outline:none;
}
/*最后让红心动起来*/
/*遇到问题：使用transform: scale()会使心形变形*/
`;

let n = 0;
let string2 = ``;
let step=()=>{
    if(string[n]==='\n'){
        string2+="<br>";
    }else if(string[n]===' '){
        string2+="&nbsp";
    }else{
        string2+=string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    console.log(string2);
    window.scrollTo(0,9999);
    html.scrollTo(0,9999);

    setTimeout(()=>{
        n=n+1;
        if(n<string.length){
            step();
        }else{}
    },)
}
step();