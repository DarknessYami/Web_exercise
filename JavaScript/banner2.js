window.onload = function(){
        //获取轮播图和圆点元素
		var carousel = document.querySelector('.carousel');
		var imgs = carousel.querySelectorAll('img');
		var dots = carousel.querySelectorAll('.dot');

		//初始化当前图片和圆点索引
		var current = 0;
		var next = 1;

		//自动轮播函数
		function autoplay() {
			//设置当前图片和圆点的状态
			imgs[current].style.opacity = 0;
			imgs[next].style.opacity = 1;
			dots[current].classList.remove('active');
			dots[next].classList.add('active');

			//更新当前图片和圆点索引
			current = next;
			next = (next + 1) % imgs.length;
		}

		//设置轮播时间间隔
		var interval = setInterval(autoplay, 2500);
		var lik = box.getElementsByTagName("dots");
    	var box = this.document.getElementsByClassName("carousel")[0];
		var i =0;
		var j =0;
		//点击小图标转换图片
		for( ; j < 5 ; j++ )
		{
			lik[j+5].ind = j;
			lik[j+5].onclick = function()
			{
			fun(this.ind,i)
				i = this.ind;
			}
		}
}