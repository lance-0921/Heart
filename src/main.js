let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string =`
/*你好，我叫多乐
*下面我为你展示我的前端功底
*注意观看哦
*我将现场写出一个跳动的心
*/
/*
首先写3个标签
*/
#heart>.div1{
    outline: 1px solid black;
    width: 100px;
    height: 100px;
    background:red;    
}
#heart>.div2{
    content: "2";
    outline: 1px solid black;
    width: 100px;
    height: 100px;
    background:red;
}
#heart>.div3{
    content: "3";
    outline: 1px solid black;
    width: 100px;
    height: 100px;
    background:red;
}
/*移动其中元素的位置、变成圆弧*/
#heart>.div2{
    transform: rotate(45deg) translate(-80px);
    border-radius: 50% 0 0 50%;
}
#heart>.div3{
    transform: rotate(45deg) translateY(-80px);
    border-radius: 50% 50% 0 0 ;
}
/*消除黑边框*/
#heart>.div1{
    outline:none;
}
#heart>.div2{
    outline:none;
}
#heart>.div3{
    outline:none;
}
/*最后让红心动起来*/
#heart{
    animation:.3s infinite alternate-reverse heart;
}
@keyframes heart {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }

`;
/*遇到问题：如果用一个div加两个伪元素，在使用transform: scale()会使心形变形*/
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
    },10)
}
step();