var set_web = function(){//设置网页head和content
	document.getElementById("head").style.height = document.documentElement.clientHeight*0.1+"px";
	document.getElementById("content").style.height = document.documentElement.clientHeight*0.9+"px";
}

var time = 2000;//轮播图切换时间

window.onload = function () {
	set_web();
	
    let timer = setInterval(get_next, time)
    let sz = new Array();
    let szdiv = new Array()
    var cur_ul = document.getElementById("banner");
    for (let i = 1; i <= 5; i++) {
        var cur_li = document.createElement("li");
		var cur_a = document.createElement("a");
        var cur_img = document.createElement("img");
		
		cur_a.id = "a"+i;
		cur_a.target = "_blank";
		cur_img.className = "imgClassName";
        cur_img.src = "img/" + i + ".png";
        cur_img.style.width = "300px";
        cur_img.style.height = "200px";
		cur_img.style.borderRadius = "5px";
		cur_li.appendChild(cur_a);
		cur_a.appendChild(cur_img);

        cur_li.onmouseenter = function () {
            clearInterval(timer);
        }
        cur_li.onmouseleave = function () {
            timer = setInterval(get_next, time)
        }

        if (i != 5) {
            cur_li.id = 5 - i;
        } else {
            cur_li.id = 5;
        }

        cur_ul.appendChild(cur_li)
        sz.push(cur_li);
        sz[sz.length - 1].style.left = "0px";

        let bottom_div = document.createElement("div");
        bottom_div.style.left = 105 * i + "px";
		bottom_div.style.bottom = "120px";
		bottom_div.style.cursor = "pointer";
		bottom_div.name = i;
        bottom_div.id = i;
        szdiv.push(bottom_div)
        cur_ul.appendChild(bottom_div);
    }
		
	document.getElementById("a1").href="./htmls/head8.html";
	document.getElementById("a2").href="./htmls/head10.html";
	document.getElementById("a3").href="./htmls/head9.html";
	document.getElementById("a4").href="./htmls/head6.html";
	document.getElementById("a5").href="./htmls/head7.html";
		
    let pre_img = document.createElement("img")
    pre_img.src = "img/preImg.png";
    pre_img.style.position = "absolute";
    pre_img.style.left = "20px";
    pre_img.style.top = "-200px";
    pre_img.style.bottom = 0;
    pre_img.style.margin = "auto";
	pre_img.style.cursor = "pointer";
    pre_img.style.zIndex = 100;
    cur_ul.appendChild(pre_img);

    let nex_img = document.createElement("img")
    nex_img.src = "img/nexImg.png";
    nex_img.style.position = "absolute";
    nex_img.style.left = "650px";
    nex_img.style.top = "-200px";
    nex_img.style.bottom = 0;
    nex_img.style.margin = "auto";
	nex_img.style.cursor = "pointer";
    nex_img.style.zIndex = 100;
    cur_ul.appendChild(nex_img);

    pre_img.onclick = function () {//向左翻页
        clearInterval(timer);
        get_pre();
        timer = setInterval(get_next, time)
    }

    nex_img.onclick = function () {//向右翻页
        clearInterval(timer);
        get_next();
         timer = setInterval(get_next, time)
    }


    let len = sz.length - 1;
    sz[len - 2].style.left = "0px";
    sz[len - 1].style.zIndex = 100;
    sz[len - 1].style.left = "200px";
    sz[len - 1].style.transform = "scale(1.3)";
    sz[len].style.left = "400px";

    szdiv[0].style.background = "rgba(255,106,26,1)"
	szdiv[0].style.width="65px";

    for (let i = 0; i < szdiv.length; i++) {//轮播功能实现
        szdiv[i].onmouseenter = function () {
            clearInterval(timer);
            let len1 = sz[len - 1].id;
            let len2 = szdiv[i].name;
            let dis = Math.max(len1, len2) - Math.min(len1, len2)
            if (len1 > len2) {
                while (dis--)
                    get_pre()
            } else {
                while (dis--)
                    get_next()
            }
            timer = setInterval(get_next,time)
        }
    }


        function get_pre() {//向上翻页
            let give_up = sz[0];
            sz.shift()
            sz.push(give_up)
            for (let i = 0; i < sz.length; i++) {
                sz[i].style.zIndex = i;
                sz[i].style.transform = "scale(1)"

            }
            sz[len - 2].style.left = "0px";
            sz[len - 1].style.zIndex = 100
            sz[len - 1].style.left = "200px";
            sz[len - 1].style.transform = "scale(1.3)"
            sz[len - 1].style.opacity = 1;
            sz[len].style.left = "400px";

            sync_szdiv()

        }

        function get_next() {//向下翻页
            let give_up = sz[len];
            sz.pop()
            sz.unshift(give_up)
            for (let i = 0; i < sz.length; i++) {
                sz[i].style.zIndex = i;
                sz[i].style.transform = "scale(1)"

            }
            sz[len - 2].style.left = "0px";
            sz[len - 1].style.zIndex = 100
            sz[len - 1].style.left = "200px";
            sz[len - 1].style.transform = "scale(1.3)"
            sz[len - 1].style.opacity = 1;
            sz[len].style.left = "400px";
            sync_szdiv()


        }


        function sync_szdiv() {//设置点状轮播图
            for (let i = 0; i < szdiv.length; i++) {
                if (szdiv[i].name == sz[len - 1].id){
                    szdiv[i].style.background = "rgba(255,106,26,1)";
					szdiv[i].style.width="65px";
				}
                else{
                    szdiv[i].style.background = "rgba(255,255,255,1)";
					szdiv[i].style.width="20px";
				}
            }
        }


    }