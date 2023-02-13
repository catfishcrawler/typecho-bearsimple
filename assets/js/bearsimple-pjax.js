(function($) {
	$.fn.extend({
		BsPjaxOptions: function(option) {
			defaultSetting = {
				scrollfixchrome: 'true',
			};
			setting = $.extend(defaultSetting, option);
			getThis = this.prop("className") !== "" ? "." + this.prop("className") : this.prop("id") !== "" ? "#" + this.prop("id") : this.prop("nodeName");
			
			var pjax_id = '#pjax';
			$(document).pjax('a[target!=_blank][rel!=group][pjax!=no]', pjax_id, {
				fragment: pjax_id,
				timeout: 50000
			});
			$(document).on('submit', 'form[role=search]',
			function(event) {
				$.pjax.submit(event, '#pjax', {
					fragment: '#pjax',
					timeout: 50000
				});
			});


				
			if (setting.search > 0) {
				$(document).on("click", "[hrefx]",
				function() {
					var header = setting.header_search;
					var phone = setting.phone_search;
					var sidebar = setting.sidebar_search;
					if (header == 'true') {
						var header_value = document.getElementById("pcsearch").value;
					} else {
						var header_value = '';
					}
					if (phone == 'true') {
						var phone_value = document.getElementById("phonesearch").value;
					} else {
						var phone_value = '';
					}
					if (sidebar == 'true') {
						var sidebar_value = document.getElementById("sidebarsearch").value;
					} else {
						var sidebar_value = '';
					}
					$.pjax({
						url: $(this).attr("hrefx") + header_value + phone_value + sidebar_value,
						container: pjax_id,
						fragment: pjax_id,
						timeout: 50000
					})
				})
			}
			$(document).on("click", "[hrefs]",
			function() {
				var href = $(this).attr("hrefs");
				var target = $(this).attr("target");
				if (!target) {
					$.pjax({
						url: href,
						container: pjax_id,
						fragment: pjax_id,
						timeout: 50000
					})
				} else {
					window.open(href, target);
				}
			});
			$(document).on('pjax:start',
			function() {
				$('.bs-pjax').show();
			});
			$(document).on('pjax:end',
			function() {
		
				 $('.bs-pjax').fadeOut();
				var commenturl = location.href + ' ';
				if (commenturl.search("comment") != -1) {
					history.replaceState($.pjax.state, '', commenturl.replace('/comment ', ''));
				}
				if (setting.menu_style == "2") {
					$(function() {
						var $mainMenuState = $('#main-menu-state');
						if ($mainMenuState.length) {
							$mainMenuState.change(function(e) {
								var $menu = $('#main-menu');
								if (this.checked) {
									$menu.hide().slideDown(450,
									function() {
										$menu.css('display', '');
									});
								} else {
									$menu.show().slideUp(450,
									function() {
										$menu.css('display', '');
									});
								}
							});
						
						}
					});
					$(function() {
						$('#main-menu').smartmenus({
							mainMenuSubOffsetX: -1,
							mainMenuSubOffsetY: 4,
							subMenusSubOffsetX: 6,
							subMenusSubOffsetY: -6
						});
					});
				}
			});
			function bsfunc() {
			   //倒计时短代码
class Countdown {
  constructor(el) {
    this.el = el;
    this.targetDate = new Date(el.getAttribute("date-time"));
    this.createCountDownParts();
    this.countdownFunction();
    this.countdownLoopId = setInterval(this.countdownFunction.bind(this), 1000);
  }
  createCountDownParts() {
    ["days", "hours", "minutes", "seconds"].forEach(part => {
      const partEl = document.createElement("div");
      partEl.classList.add("part", part);
      const textEl = document.createElement("div");
      textEl.classList.add("text");
      if(part == 'days'){
      textEl.innerText = "天(Days)";
      }
      if(part == 'hours'){
      textEl.innerText = "小时(Hours)";
      }
      if(part == 'minutes'){
      textEl.innerText = "分钟(Mins)";
      }
      if(part == 'seconds'){
      textEl.innerText = "秒(S)";
      }
      
      const numberEl = document.createElement("div");
      numberEl.classList.add("number");
      numberEl.innerText = 0;
      partEl.append(numberEl, textEl);
      this.el.append(partEl);
      this[part] = numberEl;
    });
  }

  countdownFunction() {
    const currentDate = new Date();
    if (currentDate > this.targetDate) return clearInterval(this.intervalId);
    const remaining = this.getRemaining(this.targetDate, currentDate);
    Object.entries(remaining).forEach(([part, value]) => {
      this[part].style.setProperty("--value", value);
      this[part].innerText = value;
    });
  }

  getRemaining(target, now) {
    let seconds = Math.floor((target - now) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    return { days, hours, minutes, seconds };
  }}



const countdownEls = document.querySelectorAll(".progressdate-number") || [];
countdownEls.forEach(countdownEl => new Countdown(countdownEl));
    
			    if (setting.Lazyload == 'true') {
			$.getScript("//cdn.staticfile.org/lazysizes/5.3.2/lazysizes.min.js");
			$.getScript("//cdn.staticfile.org/lazysizes/5.3.2/plugins/unveilhooks/ls.unveilhooks.min.js");
			}
 //右下角小面板

			    			 $("#bs-theme-control").on("click",function(e){

			    			     $(".bstheme-control-panel").css({"right":$(window).width()-$(this).offset().left+20,"bottom":-($(this).offset().top-$(document).scrollTop()-$(window).height()+$(this).height())}).show();
			    			     e.stopPropagation();
			    			 });
			    			 $('.bstheme-control-panel').on("click",function(e){
			    			     e.stopPropagation();
			    			 });
			    			 $("body").on('click',function(){
			    			     $(".bstheme-control-panel").hide();
			    			     
			    			 });
//黑暗模式
if(setting.darkmode == 'true'){
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
$('#darkmode').on('click',function(){
    if (setting.Mournmode == 'true') {
    $('body').toast({

							    title:'抱歉',

							    class: 'warning',
							    message: '当前处于哀悼模式，无法进入夜间模式哦~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
				        return false;
}
if($('#darkmode').is(':checked')){
    document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
  
}
else{
    document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
}
});




if (currentTheme && setting.Mournmode !== 'true') {
 document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
      $('#darkmode').attr("checked", false);
  }
  else if (currentTheme === 'dark') {
    $('#darkmode').attr("checked", true);
  }
}	
}
	
	if(setting.Mermaid == 'true'){
	    $.getScript('//cdn.staticfile.org/mermaid/9.2.2/mermaid.min.js',function(){
	      mermaid.init();  
	    })
	    
	} 


			    if(setting.infinite_scroll == 'true'){
			    //无限加载
					$.getScript("//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery-infinitescroll/4.0.1/infinite-scroll.pkgd.min.js",
				function() {
					if($('#bsnext').length){
$('.content_container').infiniteScroll({
  path: '.next',
  append: article_element,
  hideNav: '.pagination',
  status: '.page-load-status',
  history: false,
  button:'#bsnext',
  scrollThreshold: false,
});
}
				});
			    }
			
				var instance = $(".bsgallery__wrapper");
				$.each(instance,
				function(key, value) {
					var arrows = $(instance[key]).find(".arrow"),
					prevArrow = arrows.filter('.arrow-prev'),
					nextArrow = arrows.filter('.arrow-next'),
					box = $(instance[key]).find(".bsgallery"),
					x = 0,
					mx = 0,
					maxScrollWidth = box[0].scrollWidth - box[0].clientWidth / 2 - box.width() / 2;
					$(arrows).click(function() {
						if ($(this).hasClass("arrow-next")) {
							x = box.width() / 2 + box.scrollLeft() - 10;
							box.animate({
								scrollLeft: x
							});
						} else {
							x = box.width() / 2 - box.scrollLeft() - 10;
							box.animate({
								scrollLeft: -x
							});
						}
					});
					$(box).on({
						mousemove: function(e) {
							var mx2 = e.pageX - this.offsetLeft;
							if (mx) this.scrollLeft = this.sx + mx - mx2;
						},
						mousedown: function(e) {
							this.sx = this.scrollLeft;
							mx = e.pageX - this.offsetLeft;
						},
						scroll: function() {
							toggleArrows();
						}
					});
					$(document).on("mouseup",
					function() {
						mx = 0;
					});
					function toggleArrows() {
						if (box.scrollLeft() > maxScrollWidth - 10) {
							nextArrow.addClass('disabled');
						} else if (box.scrollLeft() < 10) {
							prevArrow.addClass('disabled');
						} else {
							nextArrow.removeClass('disabled');
							prevArrow.removeClass('disabled');
						}
					}
				});
				if(setting.owo == 'true'){
				//加载表情
				$.getScript(setting.import + "assets/vendors/bs-emoji/bs-emoji.js?v=1",
				function() {
					$('#face').BearsimpleEmoji($('.emotion'));
$('#facecross').BearsimpleEmoji($('.emotion'));
				});
				}
				
				//评论提交
				$('#commentsubmit').on('click',function() {
				     if(!$('#mail').val() && setting.commentsRequireMail == '1' && setting.islogin == ''){
				        $('body').toast({
							    title:'评论失败',
							    class: 'warning',
							    message: '检测到邮箱为空，请重新输入~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
				        return false;
				    }
				    if(!$('#url').val() && setting.commentsRequireURL == '1' && setting.islogin == ''){
				        $('body').toast({
							    title:'评论失败',
							    class: 'warning',
							    message: '检测到网址为空，请重新输入~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
				        return false;
				    }
				    if(!$('#textarea').val()){
				        $('body').toast({
							    title:'评论失败',
							    class: 'warning',
							    message: '检测到评论内容为空，请重新输入~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
				        return false;
				    }
				    $(this).addClass('loading');
				    setTimeout(function() {
				    $.ajax({  
    type: "POST",  
    dataType: "html",
    url:$("#commentform").attr('action'),  
    data:$("#commentform").serialize(),  
    async: false,  
    error: function(request) {  
        $('body').toast({
							    title:'评论失败',
							    class: 'error',
							    message: '请手动刷新页面后再尝试操作~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
							$('#commentsubmit').removeClass('loading');
    },  
    success: function(data) { 
        if($(data).find("div[id=comments]").length > 0){
            $('body').toast({
							    title:'评论成功',
							    class: 'success',
							    message: '您已评论成功，将自动刷新~', 
							    showIcon: 'grin beam outline',
							    showProgress: 'top',
							});
             $.pjax({ url: window.location.href, container: '#pjax', fragment: '#pjax',timeout: 50000});
           
        }
        else{
            var div = $('<div>');
        div.html(data);
        var content = div.find('.container');
          $('body').toast({
							    title:'啊哦~评论失败',
							    class: 'error',
							    message: content.text(), 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
							$('#commentsubmit').removeClass('loading');
							
        }
				
    }
				    });
				    },1000)
				});
				
				
				//密码文章
				$('#protectajax').on('click',function() {
				    $.ajax({  
    type: "POST",  
    url:window.location.href,  
    data:{
            action: "protect",
            permalink: Permalink,
        },  
    async: false,  
    error: function(request) {  
        $('body').toast({
							    title:'获取失败',
							    class: 'error',
							    message: '请手动刷新页面后再尝试操作~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
    },  
    success: function(data) {  
				$.ajax({  
    type: "POST",  
    url:data,  
    data:$("#form").serialize(),  
    async: false,  
    error: function(request) {  
$('body').toast({
							    title:'验证失败',
							    class: 'error',
							    message: '您输入的文章密码有误，请重新输入~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
    },  
    success: function(data) {  
        

                    $('body').toast({
							    title:'验证成功',
							    class: 'success',
							    message: '您已成功验证文章密码，页面将在3秒后刷新~', 
							    showIcon: 'grin beam outline',
							    showProgress: 'top',
							});
        setTimeout(function() {
            $.pjax({ url: window.location.href, container: '#pjax', fragment: '#pjax',timeout: 50000});
            },3000);
    }
  });
  
    }
				    });
				});
  
  
 
				if (setting.Like == 'true') {
					$(document).off('click','#agree-btn').on('click','#agree-btn',
					function() {
						if (localStorage.getItem("cid" + $('#agree-btn').attr('data-cid')) == 'like=true') {
							$('body')
							.toast({
							    title:'点赞失败',
							    class: 'warning',
							    message: '啊哦，您已经点赞过惹~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
						} else {
							$.ajax({
								type: 'post',
								url: setting.getPostLikeFile,
								data: 'agree=' + $('#agree-btn').attr('data-cid'),
								async: true,
								timeout: 30000,
								cache: false,
								success: function(data) {
									json = JSON.parse(data);
									if (json.code == 2) {
									    $('body')
							.toast({
							    title:'点赞失败',
							    class: 'warning',
							    message: '检测到来源错误，请稍后再试~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
									} else {
										$('.agreenum').html(json.agree);
										localStorage.setItem("cid" + $('#agree-btn').attr('data-cid'), 'like=true');
										$('body')
										.toast({
							    title:'点赞成功',
							    class: 'green',
							    message: 'Yeah~您已成功点赞本文章!', 
							    showIcon: 'grin beam outline',
							    showProgress: 'top',
										});
									}
								},
								error: function() {
									$('body')
							.toast({
							    title:'点赞失败',
							    class: 'warning',
							    message: '网络出现堵塞，请稍后重试~', 
							    showIcon: 'dizzy outline',
							    showProgress: 'top',
							});
								},
							});
						}
					});
				}
				if (setting.CommentLike == 'true') {
					$(document).off('click','.like.thumbs.up.red.link.icon').on('click','.like.thumbs.up.red.link.icon',
				function() {
						if (localStorage.getItem("coid" + $(this).attr('data-coid')) == 'like=true') {
							$('body')
							.toast({
							    title:'点赞失败',
							    class: 'warning',
							    message: '啊哦，您已经点赞过惹~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
						} else {
							$.ajax({
								type: 'post',
								url: setting.getCommentLikeFile,
								data: {
									agree: $(this).attr('data-coid'),
								},
								async: true,
								timeout: 30000,
								cache: false,
								success: function(data) {
									json = JSON.parse(data);
									if (json.code == 2) {
									     $('body')
							.toast({
							    title:'点赞失败',
							    class: 'warning',
							    message: '检测到来源错误，请稍后再试~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
										//toastr.success('点赞失败，检测到来源错误，请稍后再试~');
									} else {
										$('.agreenumcomment' + json.coid).html(json.agree);
										localStorage.setItem("coid" + json.coid, 'like=true');
										//toastr.success('点赞成功~');
										$('body')
										.toast({
							    title:'点赞成功',
							    class: 'green',
							    message: 'Yeah~您已成功点赞!', 
							    showIcon: 'grin beam outline',
							    showProgress: 'top',
										});
									}
								},
								error: function() {
								    $('body')
							.toast({
							    title:'点赞失败',
							    class: 'warning',
							    message: '网络出现堵塞，请稍后重试~', 
							    showIcon: 'dizzy outline',
							    showProgress: 'top',
							});
									//toastr.warning('啊哦，点赞失败~');
								},
							});
						}
					});
				}
				localStorage.setItem("fontsize", "default");
				$('#fontsizes').click(function() {
					switch (localStorage.getItem("fontsize")) {
					case 'default':
						localStorage.setItem("fontsize", "18");
						$(".post-content").animate({
							"font-size": "18px"
						});
						break;
					case '18':
						localStorage.setItem("fontsize", "25");
						$(".post-content").animate({
							"font-size": "25px"
						});
						break;
					case '25':
						localStorage.setItem("fontsize", "32");
						$(".post-content").animate({
							"font-size": "32px"
						});
						break;
					default:
						localStorage.setItem("fontsize", "default");
						$(".post-content").animate({
							"font-size": "15px"
						});
					}
				});
				$('.ui.form').on('click', '#randname',
				function() {
					const b = ["大名鼎鼎", "躲闪", "骄傲", "挺胸", "不知名", "知名", "刚下飞机", "看透一切", "小有名气", "潜心学习", "生龙活虎", "生气勃勃", "说话诙谐", "说话风趣", "妙趣横生", "妙语连珠", "挤眉弄眼", "天真活泼", "天真烂漫", "天真无邪", "稚气未脱", "聪明伶俐", "机智灵巧", "心灵手巧", "能说会道", "无忧无虑", "无拘无束", "开朗大方", "幽默风趣", "逗人发笑", "憨直可爱", "性格爽直", "性格豪爽", "直截了当", "直言相告", "直言不讳", "有口无心", "快嘴快舌", "直抒已见", "令人捧腹", "饶有风趣", "趣味盎然", "心直口快", "快人快语"],
					c = ["大黄", "匿名人士", "男士", "女士", "人士", "男孩", "女孩", "贫僧", "道士", "学生", "打工人", "少侠", "白领", "蓝领", "小学生", "初中生", "高中生", "大学生", "研究生", "博士生", "教授"];
					var randname = b[Math.floor(Math.random() * b.length)] + "的" + c[Math.floor(Math.random() * c.length)];
					document.getElementById('author').value = randname;
				});
				if (setting.Login_hidden == 'true') {
					$.getScript("//lf26-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.js",
				function() {
					$("#bs-login").click(function() {
(async () => {
const { value: formValues } = await Swal.fire({
  title: '登录',
  html:
    '<div style="overflow: hidden;margin-left:-15px"><input id="swal-input1" class="swal2-input" placeholder="输入您的账号"><br>' +

    '<input id="swal-input2" type="password" class="swal2-input" placeholder="输入您的密码"></div><br>',
  focusConfirm: false,
  confirmButtonText: '立即登录',
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
});

if (formValues) {
    Swal.showLoading();
    $.ajax({  
    type: "POST",  
    url:window.location.href,  
    data:{
            action: "login"
        },  
    async: false,  
    error: function(request) {  
        $('body').toast({
							    title:'获取失败',
							    class: 'error',
							    message: '请手动刷新页面后再尝试操作~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
    },  
    success: function(data) {  
            $.ajax({  
    type: "POST",  
    url:data,  
    data:{
            name: JSON.parse(JSON.stringify(formValues))[0],
            password: JSON.parse(JSON.stringify(formValues))[1],
            referer: window.location.href
        },  
    async: false,  
    error: function(request) {  
$('body').toast({
							    title:'登陆失败',
							    class: 'error',
							    message: '请手动刷新页面后再尝试操作~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
    },  
    success: function(data) {  
        if($(data).find("a[id=bs-islogin]").length > 0){
    $('body').toast({
							    title:'登陆成功',
							    class: 'success',
							    message: '您已成功登陆，页面将在3秒后刷新~', 
							    showIcon: 'grin beam outline',
							    showProgress: 'top',
							});
        setTimeout(function() {

								$.pjax({ url: window.location.href, container: '#pjax', fragment: '#pjax',timeout: 50000});

							},
							3000);
        
    }  
    

            else{

                $('body').toast({
							    title:'登陆失败',
							    class: 'error',
							    message: '您输入的账号密码有误，请重新输入~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
            }
    }
  });

    }  
  });
}

})()
					});
				});
								//检查回车再判断执行一次
$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13' && $('#swal-input2').val()){
        $('.swal2-confirm').click();
    }
});
				}
				if (setting.RewardOpenAlipay == 'true') {
					$.getScript("//lf26-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.js",function(option) {
		    setting = $.extend(option);
					$("#bs-alipay").click(function() {
					    Swal.fire({
  title: '支付宝打赏',
  text: '您可以通过扫描该二维码打赏作者',
  imageUrl: setting.RewardOpenAlipayQrcode,
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: '支付宝打赏二维码',
  confirmButtonText: '关闭'
})
					});
				});
				}
				if (setting.RewardOpenWechat == 'true') {
					$.getScript("//lf26-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.js",function(option) {
		    setting = $.extend(option);
					$("#bs-wechat").click(function() {
					    Swal.fire({
  title: '微信打赏',
  text: '您可以通过扫描该二维码打赏作者',
  imageUrl: setting.RewardOpenWechatQrcode,
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: '微信打赏二维码',
  confirmButtonText: '关闭'
})
					});
				});
				}
				if (setting.Sharewechat == 'true') {
			    	$.getScript("//lf26-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.js",function(option) {
		    setting = $.extend(option);
					$("#wechatshare").click(function() {
					    Swal.fire({
  title: '微信分享',
  text: '您可以将该二维码分享给朋友或者朋友圈',
  imageUrl: 'https://api.qrserver.com/v1/create-qr-code/?data='+window.location.href,
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: '微信分享二维码',
  confirmButtonText: '关闭'
})
					});
				});
			}
			
				
				
								if (setting.sticky == 'true') {
				$.getScript("//cdn.staticfile.org/stickybits/3.7.11/jquery.stickybits.min.js",
			function(){
			   $('#sidebar').stickybits();
			});
		
			}
				$.getScript("//cdn.staticfile.org/fomantic-ui/2.9.1/semantic.min.js",
				function() {
				    $('.slider.checkbox').checkbox({
    onChecked: function() {
      $('#textarea').addClass('bshideContent');
    },
    onUnchecked: function() {
      $('#textarea').removeClass('bshideContent');
    }
  });
					$('i').popup();
					$('button').popup();
					$('.ui.search').search({
						apiSettings: {
							url: '/index.php/jsonapi/getarticle?keyword={query}',
						},
						fields: {
							results: 'items',
							title: 'article',
							url: 'url',
							description: 'description'
						},
						error: {
							serverError: '服务器错误，请重试',
						},
						minCharacters: 1,
						maxResults: 99999999999999,
						showNoResults: false,
						onSelect(result, response) {
							return false;
						}
					});
					$('.message .close').on('click',
					function() {
						$(this).closest('.message').transition('fade');
					});
					$('.ui.accordion').accordion();
					$('.ui.dropdown').dropdown({
						on: 'hover'
					});
					$('.ui.embed').embed();
					$('.ui.star.rating').rating();
					$('.ui.heart.rating').rating();
					$("body").on("click", ".fluid.card .image",
					function() {
						$('.ui.star.rating').rating();
						$('.fluid.card .image').dimmer({
							on: 'hover'
						});
					});
					if ( $(".ui.secondary.menu").length > 0 || $(".ui.secondary.pointing.menu").length > 0) {
					$('.menu .item').tab();
					}
					$('.special.cards .image').dimmer({
						on: 'hover'
					});
				});

				if (setting.imagebox == 'true' && $('#bearsimple-images').length) {
				$.getScript("//cdn.staticfile.org/viewerjs/1.11.2/viewer.min.js",
				function() {
					const gallery = new Viewer(document.getElementById('bearsimple-images'));
					if($('#bearsimple-images-readmode').length){
					const gallery2 = new Viewer(document.getElementById('bearsimple-images-readmode'));
					}
				});
			}
				if (setting.Watermark == 'true') {
					if (setting.WatermarkType == '1' || setting.WatermarkType == '') {
						if (setting.waterMarkOutput !== 'null' || setting.waterMarkOutput !== '') {
							$.getScript(setting.import + "assets/js/bearmark.min.js",
							function(option) {
							    setting = $.extend(option);
								$('.bearmark').watermark({
									textBg: setting.Watermark_textBg,
									textColor: setting.Watermark_textColor,
									text: setting.Watermark_text,
									textWidth: setting.Watermark_textWidth,
									textSize: setting.Watermark_textSize,
									gravity: setting.Watermark_gravity,
									opacity: setting.Watermark_opacity,
									margin: setting.Watermark_margin,
									outputType: setting.Watermark_outputType
								});
							});
						} else {
							$.getScript(setting.import + "assets/js/bearmark.min.js",
							function(option) {
							    setting = $.extend(option);
								$('.bearmark').watermark({
									textBg: setting.Watermark_textBg,
									textColor: setting.Watermark_textColor,
									text: setting.Watermark_text,
									textWidth: setting.Watermark_textWidth,
									textSize: setting.Watermark_textSize,
									gravity: setting.Watermark_gravity,
									opacity: setting.Watermark_opacity,
									margin: setting.Watermark_margin,
								});
							});
						}
					} else {
						if (setting.waterMarkOutput !== 'null' || setting.waterMarkOutput !== '') {
							$.getScript(setting.import + "assets/js/bearmark.min.js",
							function(option) {
							    setting = $.extend(option);
								$('.bearmark').watermark({
									path: setting.Watermark_path,
									gravity: setting.Watermark_gravity,
									opacity: setting.Watermark_opacity,
									margin: setting.Watermark_margin,
									outputType: setting.Watermark_outputType
								});
							});
						} else {
							$.getScript(setting.import + "assets/js/bearmark.min.js",
							function(option) {
							    setting = $.extend(option);
								$('.bearmark').watermark({
									path: setting.Watermark_path,
									gravity: setting.Watermark_gravity,
									opacity: setting.Watermark_opacity,
									margin: setting.Watermark_margin,
								});
							});
						}
					}
				}
				if (setting.Popup == 'true') {
				$.getScript(setting.import + "assets/vendors/bs-announcement/bs-announcement.min.js",
				function(option) {
				    setting = $.extend(option);
				$('#announcement').announcement({
        title: setting.PopupTitle,
        showToggle: setting.PopupTitleClose,
        showClose: setting.PopupClose,
        autoHide: setting.PopupAutoHide,
        autoClose: setting.PopupAutoClose,
        width: setting.PopupWidth, 
        height: setting.PopupHeight,
        speed: setting.PopupSpeed,
        effect: setting.PopupEffect
    });
				});
				
			}
			if(setting.Translate == '11'){
				$(function() {
					$.getScript("//resources.typecho.co.uk/translate/element_latest.js?cb=googleTranslateElementInit2");
				});
			}
			
			if (setting.Translate == '1') {
					if (setting.TranslateLanguage == '1') {
						var TranslateLanguage = 2;
					} else {
						var TranslateLanguage = 1;
					};
					$.getScript(setting.import2 + "modules/tw_cn.js",
					function(option) {
					    setting = $.extend(option);
						var defaultEncoding = TranslateLanguage;
						var translateDelay = 0;
						var cookieDomain = setting.siteUrl;
						var msgToTraditionalChinese = "繁体";
						var msgToSimplifiedChinese = "简体";
						var translateButtonId = "translateLink";
						translateInitilization();
					});
				}
				
				if (setting.scroll == 'true') {
				$.getScript(setting.import + "assets/vendors/bs-toc/bs-toc.min.js",
				function() {
					window.tocManager.displayDisableTocTips = false;
            window.tocManager.generateToc();
				});
				
			}
		//海报
					    			if ($('#poster-btn').length && typeof (isPosterLoad) == "undefined") {
					    			    $.getScript(setting.import + "assets/vendors/bs-poster/bposter.js");
			}
			
				if (setting.slider == 'true') {
					$.getScript(setting.import + "assets/vendors/slider/bearslider.min.js",
					function() {
					    $(".bearslider").fadeIn();
						$('.bearslider').bearSlider({
    mode: 'fade',
    captions: true,
    auto :true,
    nextText:'前进',
    prevText:'后退',
    autoHover:true,
    adaptiveHeight:true
  });
					});
				}
				if (setting.Codehightlight == '1') {
					if (typeof Prism !== 'undefined') {
						if (setting.showLineNumber == '1') {
							var showLineNumber = 'line-numbers';
						}
						var pres = document.getElementsByTagName('pre');
						for (var i = 0; i < pres.length; i++) {
							if (pres[i].getElementsByTagName('code').length > 0) pres[i].className = showLineNumber + ' language-';
							document.getElementsByTagName('code').className = 'language-php';
						}
						Prism.highlightAll(true, null);
					}
				}
				if (setting.Wechat_qrcode_status == 'true') {
		$.getScript("//lf26-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.js",function(option) {
		    setting = $.extend(option);
					$("#contactwechat").click(function() {
					    Swal.fire({
  title: '联系微信',
  text: '您可以通过扫描该二维码添加我的微信进行联系',
  imageUrl: setting.Wechat_qrcode,
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: '我的微信二维码',
  confirmButtonText: '关闭'
})
					});
				});
			}
				if (setting.QQ_qrcode_status == 'true') {
				$.getScript("//lf26-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.js",function(option) {
				    setting = $.extend(option);
					$("#contactqq").click(function() {
					    Swal.fire({
  title: '联系QQ',
  text: '您可以通过扫描该二维码添加我的QQ进行联系',
  imageUrl: setting.QQ_qrcode,
  imageWidth: 300,
  imageHeight: 300,
  imageAlt: '我的QQ二维码',
  confirmButtonText: '关闭'
})
					});
				});
			}
				//评论展开收起
				$(".slickcomment").on('click',function(){
	    let slickid = this.id;
	$(".ui.secondary.segment.comment-children."+slickid).toggle('fast',function(){
	    if($(this).css('display')=='none'){
	            $('#'+slickid).text("展开子评论");
}
else{
    $('#'+slickid).text("收起子评论");
}　
	});
	});
				if (setting.Share == 'true') {
					var title = $(document.head).find("[name=title], [name=Title]").attr("content") || document.title;
					var url = window.location.href;
					var domain = window.location.origin;
					var imgurl = $("img:first").prop("data-src") || $("img:first").prop("src");
					var description = $(document.head).find("[name=description], [name=Description]").attr("content") || "";
					var source = $(document.head).find("[name=site], [name=Site]").attr("content") || document.title;
					$('#qqshare').on('click',
					function() {
						window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + url + '&title=' + title + '&source=' + source + '&desc=' + description + '&pics=' + imgurl);
					});
					$('#qzoneshare').on('click',
					function() {
						window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title + '&site=' + source + '&desc=' + description + '&summary=' + description + '&pics=' + imgurl);
					});
					$('#weiboshare').on('click',
					function() {
						window.open('http://service.weibo.com/share/share.php?url=' + url + '&title=' + title + '&pic=' + imgurl + '&appkey=');
					});
					$('#facebookshare').on('click',
					function() {
						window.open('https://www.facebook.com/sharer/sharer.php?u=' + url + '&title=' + title + '&source=' + source + '&desc=' + description + '&link=' + url + '&captain=&picture=' + imgurl);
					});
					$('#twittershare').on('click',
					function() {
						window.open('https://twitter.com/intent/tweet?text=' + title + '&url=' + url + '&via=' + domain);
					});
					$('#googleshare').on('click',
					function() {
						window.open('https://plus.google.com/share?url=' + url);
					});
					$('#linkedinshare').on('click',
					function() {
						window.open('http://www.linkedin.com/shareArticle?mini=true&ro=true&title=' + title + '&url=' + title + '&summary=' + description + '&source=' + source + '&armin=armin');
					});
				}
				
			
			}
			$(window).bind('popstate',
			function(event) {
				bsfunc();
			});
			$(document).on('pjax:complete',
			function() {
			   
			    
		

				bsfunc();
			});
			if (typeof lazyload === "function") {
				$(document).on('pjax:complete',
				function() {
					jQuery(function() {
						jQuery("div").lazyload({
							effect: "fadeIn"
						});
					});
					jQuery(function() {
						jQuery("img").lazyload({
							effect: "fadeIn"
						});
					});
				});
			} 
			return this
		}
	})
} (jQuery));