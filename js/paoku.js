window.onload = function () {
    let dot = document.querySelectorAll('.bannerDot>.dot');
    let main = document.querySelector('.banner>.main');
    let imgs= document.querySelectorAll(".main>a.imgs>img");
    console.log(imgs);
    let xiabiao =0 ;
    dot[0].style.background = 'red';
    for (let i=0;i<dot.length;i++){
        dot[i].onclick = function () {
            for (let j=0;j<dot.length;j++){
                dot[j].style.background = 'none';
                imgs[j].style.zIndex = 10;
            }
            dot[i].style.background = 'red';
            imgs[i].style.zIndex = 999;
            xiabiao = i;
        }
    }
    let t =  setInterval(move,3000);
    main.onmouseenter = function(){
        clearInterval(t);
    };
    main.onmouseleave = function(){
       t = setInterval(move,3000);
    };
    function move() {
       xiabiao++;
       if(xiabiao === imgs.length){
           xiabiao = 0;
       }
       imgs.forEach(function (element) {
           element.style.zIndex = 20;
       });
       dot.forEach(element => element.style.background = 'none');
       imgs[xiabiao].style.zIndex = '999';
       dot[xiabiao].style.background = 'red';
       }
};