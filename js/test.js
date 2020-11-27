window.onload = function(){
	document.getElementById("head").style.height = document.documentElement.clientHeight*0.1+"px";
	document.getElementById("content").style.height = document.documentElement.clientHeight*0.9+"px";
}

var num = 0;//横向滚动条位置量
var srcrollNum = 80;//横向滚动量

var scrollFunc = function(e){//当滚动条上下滚动时计算滚动量
	e = e || window.event;
	if(e.wheelDelta){
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
				if(num<0){
					num = 0;
				}else{
					num-=srcrollNum;
				}
				if(num==0){
					document.getElementById("texture").style.opacity = 1;
					document.getElementById("text").style.opacity = 1;
					document.getElementById("box").style.left = 850+"px";
					document.getElementById("texture").style.left = 70 + "px";
					document.getElementById("text").style.top = 430 + "px";
					document.getElementById("leftImg").style.transform = "rotate(360deg)";
					document.getElementById("leftImg").style.transition = "0.6s";
				}
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
			if(document.getElementById("box").offsetLeft==0){
				num+=srcrollNum;
			}
			document.getElementById("box").style.left = 0+"px";
			document.getElementById("texture").style.opacity = 0;
			document.getElementById("text").style.opacity = 0;
			document.getElementById("texture").style.left = -800 + "px";
			document.getElementById("text").style.top = 800 + "px";
			document.getElementById("leftImg").style.transform = "rotate(180deg)";
			document.getElementById("leftImg").style.transition = "0.6s";
        }
	}else if (e.detail) {  //Firefox滑轮事件
        if (e.detail > 0) { //当滑轮向上滚动时
			if(num<0){
				num = 0;
			}else{
				num-=srcrollNum;
			}
			if(num==0){
				document.getElementById("texture").style.opacity = 1;
				document.getElementById("text").style.opacity = 1;
				document.getElementById("box").style.left = 850+"px";
				document.getElementById("texture").style.left = 70 + "px";
				document.getElementById("text").style.top = 430 + "px";
				document.getElementById("leftImg").style.transform = "rotate(360deg)";
				document.getElementById("leftImg").style.transition = "0.6s";
			}
        }  
        if (e.detail < 0) { //当滑轮向下滚动时
            num+=srcrollNum;;
        }
		document.getElementById("box").style.left = 0+"px";
		document.getElementById("texture").style.opacity = 0;
		document.getElementById("text").style.opacity = 0;
		document.getElementById("texture").style.left = -800 + "px";
		document.getElementById("text").style.top = 800 + "px";
		document.getElementById("leftImg").style.transform = "rotate(180deg)";
		document.getElementById("leftImg").style.transition = "0.6s";
	}
	var scroll = document.getElementById("box");
	scroll.scrollLeft = num;
}

if (document.addEventListener) {//firefox  
	document.addEventListener('DOMMouseScroll', scrollFunc);
}  

window.onmousewheel = document.onmousewheel = scrollFunc;//chrome