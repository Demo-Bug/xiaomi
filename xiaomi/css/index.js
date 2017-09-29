/*
* @Author: Administrator
* @Date:   2017-09-18 17:21:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-29 00:15:44
*/
    /*导航栏下面的分类选项*/
    let nav = document.getElementsByClassName('nav')[0];
    let navul = nav.getElementsByTagName('ul')[0];
    let navulli = navul.getElementsByTagName('li');
    let XuanXiang = document.getElementsByClassName('xuanxiang');
    for(let i = 0 ; i < navulli.length-2 ; i++){
		navulli[i].onmouseover = function(){
			XuanXiang[i].style.display = 'block';
		}
		navulli[i].onmouseout = function(){
			XuanXiang[i].style.display = 'none';
		}
	}
    /*banner左侧部分*/
    let a = document.getElementsByClassName('banner-left')[0];
	let b = a.getElementsByTagName('li');
	let js = document.getElementsByClassName('js');
	for(let i = 0 ; i < b.length ; i++){
		b[i].onmouseover = function(){
			js[i].style.display = 'block';
		}
		b[i].onmouseout = function(){
			js[i].style.display = 'none';
		}
	}
    /*导航栏的动画开始*/
    let gwc = document.getElementsByClassName('gwc')[0];
    let gwcyin = document.getElementsByClassName('gwcyin')[0];
    gwc.onmouseover = function(){
    	gwcyin.style.display = 'block';
    }
    gwc.onmouseout = function(){
    	gwcyin.style.display = 'none';
    }
    /*banner图的动画开始*/
    let daohang = document.getElementsByClassName('banner-right')[0];
	let ban = document.getElementsByClassName('eiyo')[0];
	let banl = ban.getElementsByTagName('li');
	let lefts = document.getElementsByClassName('banner-rright')[0];
	let rights = document.getElementsByClassName('banner-rleft')[0];
	let dian = document.getElementsByClassName('banner-bottom')[0];
	let dianl = dian.getElementsByTagName('li');
	let banner = document.getElementsByClassName('banner')[0];
	/*自动轮播*/
	let t = setInterval(move,3000);
	let now = 0;
	let next = 0;
	let imgW = parseInt(getComputedStyle(ban,null).width);
	let flag = true;
	function move(){
		next++;
		if(next == banl.length){
			next = 0;
		}
	    dianl[next].style.background = 'red';
		dianl[now].style.background = 'pink';
		banl[next].style.left = `${imgW}px`;
		animate(banl[now],{left:-imgW});
		animate(banl[next],{left:0},function(){
			flag = true;
		});
		now = next;
	}
	function movee(){
		next--;
		if(next < 0){
			next = banl.length-1;
		}
		dianl[now].style.background = 'pink';
	    dianl[next].style.background = 'red';
		banl[next].style.left = `${-imgW}px`;
		animate(banl[now],{left:imgW});
		animate(banl[next],{left:0},function(){
			                            flag = true;
		                            }
		        );
		now = next;
	}
    /*鼠标移入*/
    daohang.onmouseover = function(){
    	clearInterval(t);
    }
    daohang.onmouseout = function(){
    	t = setInterval(move,3000);
    }
    /*点击左右*/
    lefts.onclick = function(){
    	if(!flag){
    		return;
    	}
    	move();
    	flag = false;
    }
    rights.onclick = function(){
    	if(!flag){
    		return;
    	}
    	movee();
    	flag = false;
    }
    /*点击圆点*/
    for(let i = 0 ; i < dianl.length ; i++){
    	dianl[i].onclick = function(){
    		if(now == i){
    			return;
    		}
    		dianl[now].style.background = 'pink';
			dianl[i].style.background = 'red';
    		banl[i].style.left = `${-imgW}px`;
			animate(banl[now],{left:imgW});
			animate(banl[i],{left:0});
			now = next = i;
    	}
    }
    /*banner图的动画结束*/

    /*小米明星单品轮播开始*/
    let star = document.getElementsByClassName('star-head')[0];
    let section = document.getElementsByClassName('star-head-tu')[0];
    let HuaZuo = document.getElementsByClassName('zhizhen1')[0];
    let HuaYou = document.getElementsByClassName('zhizhen2')[0];
	HuaZuo.onclick = function(){
		section.style.marginLeft = -1260 + 'px';
		HuaZuo.style.background = '#808080';
		HuaYou.style.background = 'black';
	}
    	HuaYou.onclick = function(){
		section.style.marginLeft = 0;
		HuaZuo.style.background = 'black';
		HuaYou.style.background = '#808080';
	}

	/*家电动画轮播*/
	let jdright = document.querySelector('.jdright');
	let jdrighta = jdright.querySelectorAll('.jdright>a');
	let siping =  document.querySelector('.siping');
	let sipinga = siping.querySelectorAll('.siping>.siping1');
	for(let i = 0 ; i < jdrighta.length ; i++){
		jdrighta[i].onmouseover = function(){
			for(let i = 0 ; i < sipinga.length ; i++){
				sipinga[i].style.display = 'none';
			}
			sipinga[i].style.display = 'block';
		}
	}


	/*内容的轮播*/
	let nrTu21 = document.querySelector('.nr-tu21');
	let nrTu2Bottom = document.querySelector('.nr-tu2bottom');
	let nrTu2BottomLi = nrTu2Bottom.querySelectorAll('.nr-tu2bottom>li');
	let nrTu2Centers = document.querySelectorAll('.nr-tu2center');
	let nrTu2Centers1 = document.querySelectorAll('.nr-tu2center')[0].offsetWidth;
	let nrTu2Left = document.querySelector('.nr-tu2-left');
	let nrTu2Right = document.querySelector('.nr-tu2-right');
	let d = 0;
	for (let i = 0 ; i < nrTu2BottomLi.length ; i++){
		nrTu2BottomLi[i].onclick = function(){
			for(let i = 0 ; i < nrTu2BottomLi.length ; i++){
				nrTu2BottomLi[i].style.background = 'pink';
			}
			nrTu21.style.left = `${-296 * i}px`;
			nrTu2BottomLi[i].style.background= 'red';
			d = i;
		}	
	}
	nrTu2Right.onclick = function(){
		if(d == 2){
			return;
		}
		d++;
		nrTu21.style.left = -(nrTu2Centers1*d) + 'px';
		for(let i = 0 ; i < nrTu2BottomLi.length ; i++){
			nrTu2BottomLi[i].style.background = 'pink';
		}
		nrTu2BottomLi[d].style.background = 'red';
	}
	nrTu2Left.onclick = function(){
		if(d == 0){
			return;
		}
		d--;
		nrTu21.style.left = -(nrTu1Centers1*d) + 'px';
		for(let i = 0 ; i < nrTu2BottomLi.length ; i++){
			nrTu2BottomLi[i].style.background = 'pink';
		}
		nrTu2BottomLi[d].style.background = 'red';
	}
	/*第四个*/
	let nrTu41 = document.querySelector('.nr-tu41');
	let nrTu4Bottom = document.querySelector('.nr-tu4bottom');
	let nrTu4BottomLi = nrTu4Bottom.querySelectorAll('.nr-tu4bottom>li');
	let nrTu4Centers = document.querySelectorAll('.nr-tu4center');
	let nrTu4Centers1 = document.querySelectorAll('.nr-tu4center')[0].offsetWidth;
	let nrTu4Left = document.querySelector('.nr-tu4-left');
	let nrTu4Right = document.querySelector('.nr-tu4-right');
	let e = 0;
	for (let i = 0 ; i < nrTu4BottomLi.length ; i++){
		nrTu4BottomLi[i].onclick = function(){
			for(let i = 0 ; i < nrTu4BottomLi.length ; i++){
				nrTu4BottomLi[i].style.background = 'pink';
			}
			nrTu41.style.left = `${-296 * i}px`;
			nrTu4BottomLi[i].style.background= 'red';
			e = i;
		}	
	}
	nrTu4Right.onclick = function(){
		if(e == 2){
			return;
		}
		e++;
		nrTu41.style.left = -(nrTu4Centers1*e) + 'px';
		for(let i = 0 ; i < nrTu4BottomLi.length ; i++){
			nrTu4BottomLi[i].style.background = 'pink';
		}
		nrTu4BottomLi[e].style.background = 'red';
	}
	nrTu4Left.onclick = function(){
		if(e == 0){
			return;
		}
		e--;
		nrTu41.style.left = -(nrTu1Centers1*e) + 'px';
		for(let i = 0 ; i < nrTu4BottomLi.length ; i++){
			nrTu4BottomLi[i].style.background = 'pink';
		}
		nrTu4BottomLi[e].style.background = 'red';
	}
	/*第三个*/
	let nrTu31 = document.querySelector('.nr-tu31');
	let nrTu3Bottom = document.querySelector('.nr-tu3bottom');
	let nrTu3BottomLi = nrTu3Bottom.querySelectorAll('.nr-tu3bottom>li');
	let nrTu3Centers = document.querySelectorAll('.nr-tu3center');
	let nrTu3Centers1 = document.querySelectorAll('.nr-tu3center')[0].offsetWidth;
	let nrTu3Left = document.querySelector('.nr-tu3-left');
	let nrTu3Right = document.querySelector('.nr-tu3-right');
	let f = 0;
	for (let i = 0 ; i < nrTu3BottomLi.length ; i++){
		nrTu3BottomLi[i].onclick = function(){
			for(let i = 0 ; i < nrTu3BottomLi.length ; i++){
				nrTu3BottomLi[i].style.background = 'pink';
			}
			nrTu31.style.left = `${-296 * i}px`;
			nrTu3BottomLi[i].style.background= 'red';
			f = i;
		}	
	}
	nrTu3Right.onclick = function(){
		if(f == 2){
			return;
		}
		f++;
		nrTu31.style.left = -(nrTu3Centers1*f) + 'px';
		for(let i = 0 ; i < nrTu3BottomLi.length ; i++){
			nrTu3BottomLi[i].style.background = 'pink';
		}
		nrTu3BottomLi[f].style.background = 'red';
	}
	nrTu3Left.onclick = function(){
		if(f == 0){
			return;
		}
		f--;
		nrTu31.style.left = -(nrTu1Centers1*f) + 'px';
		for(let i = 0 ; i < nrTu3BottomLi.length ; i++){
			nrTu3BottomLi[i].style.background = 'pink';
		}
		nrTu3BottomLi[f].style.background = 'red';
	}
	/*第一个*/
	let nrTu11 = document.querySelector('.nr-tu11');
	let nrTu1Bottom = document.querySelector('.nr-tu1bottom');
	let nrTu1BottomLi = nrTu1Bottom.querySelectorAll('.nr-tu1bottom>li');
	let nrTu1Centers = document.querySelectorAll('.nr-tu1center');
	let nrTu1Centers1 = document.querySelectorAll('.nr-tu1center')[0].offsetWidth;
	let nrTu1Left = document.querySelector('.nr-tu1-left');
	let nrTu1Right = document.querySelector('.nr-tu1-right');
	let c = 0;
	for (let i = 0 ; i < nrTu1BottomLi.length ; i++){
		nrTu1BottomLi[i].onclick = function(){
			for(let i = 0 ; i < nrTu1BottomLi.length ; i++){
				nrTu1BottomLi[i].style.background = 'pink';
			}
			nrTu11.style.left = `${-296 * i}px`;
			nrTu1BottomLi[i].style.background= 'red';
			c = i;
		}	
	}
	nrTu1Right.onclick = function(){
		if(c == 2){
			return;
		}
		c++;
		nrTu11.style.left = -(nrTu1Centers1*c) + 'px';
		for(let i = 0 ; i < nrTu1BottomLi.length ; i++){
			nrTu1BottomLi[i].style.background = 'pink';
		}
		nrTu1BottomLi[c].style.background = 'red';
	}
	nrTu1Left.onclick = function(){
		if(c == 0){
			return;
		}
		c--;
		nrTu11.style.left = -(nrTu1Centers1*c) + 'px';
		for(let i = 0 ; i < nrTu1BottomLi.length ; i++){
			nrTu1BottomLi[i].style.background = 'pink';
		}
		nrTu1BottomLi[c].style.background = 'red';
	}