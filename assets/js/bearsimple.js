console.log("\n %c Bearsimple v2.1.6 %c https://github.com/whitebearcode/typecho-bearsimple \n", "border-radius:10px 0 0 10px;color: #fadfa3; background: #030307; padding:5px 0;", "border-radius:0 10px 10px 0;background: #fadfa3; padding:5px 0;");

(function($) {
	$.fn.extend({
		BsOptions: function(option) {
			setting = $.extend(option);
			getThis = this.prop("className") !== "" ? "." + this.prop("className") : this.prop("id") !== "" ? "#" + this.prop("id") : this.prop("nodeName");
			

			

				
//全局滚动条组件加载

			$.getScript(setting.import + "assets/vendors/bs-scrollbar/bs-scrollbar.min.js",
					function() {
					  const scrollBar= $("body").bsScrollbars({
					        className            : "bs-theme-dark",
    resize               : "none",
    sizeAutoCapable      : true,
    clipAlways           : true,
    normalizeRTL         : true,
    paddingAbsolute      : true,
    autoUpdate           : true,
    autoUpdateInterval   : 0.001, 
    nativeScrollbarsOverlaid : {
        showNativeScrollbars   : false,
        initialize             : true 
    },
    overflowBehavior : {
        x : "h",
        y : "scroll"
    },
    scrollbars : {
        visibility       : "auto",
        autoHide         : "scroll",
        autoHideDelay    : 800,
        dragScrolling    : true,
        clickScrolling   : true,
        touchSupport     : true,
        snapHandle       : false
    },
    textarea : {
        dynWidth       : false,
        dynHeight      : false,
        inheritedAttrs : ["style", "class"]
    },
    callbacks: {
        onScroll: function(e) {
            const scrollInfo = scrollBar.scroll();
            const max = scrollInfo.max.y;
            const scrollLeft = e.target.scrollLeft;
            const scrollTop = e.target.scrollTop;
            if (setting.readprocess == 'true') {
					var winHeight = window.innerHeight,
					docHeight = document.documentElement.scrollHeight,
					progressBar = document.querySelector('#read_progress');
					progressBar.max = max;
					progressBar.value = scrollTop;
			}
			
			if(setting.Top == 'true'){
			if(scrollTop<300){
			    $("#bs-scroll-to-top").fadeOut('1000');
			}
			else{
			    $("#bs-scroll-to-top").fadeIn('1000');
			}
			}
			
        }
    }
					        
					        
					    }).bsScrollbars();
if(setting.Top == 'true'){
        $(document).on("click","#bs-scroll-to-top",function(){scrollBar.scroll("0", 1000);return false});
}
$(document).on("click","#read",function(){
    scrollBar.scroll("0", 1000);
});
					});
			
			
			if (setting.pjax == '2' || setting.pjax == null) {
				clickToHref();
				function clickToHref() {
					var eles = document.querySelectorAll("div[hrefs]");
					eles.forEach(function(item) {
						item.addEventListener("click",
						function() {
							var href = item.getAttribute("hrefs");
							var target = item.getAttribute("target");
							if (!target) {
								location.href = href;
							} else {
								window.open(href, target);
							}
						});
					})
				}
				if (setting.search > 0) {
					clickToHref2();
					function clickToHref2() {
						var eles = document.querySelectorAll("i[hrefx]");
						eles.forEach(function(item) {
							item.addEventListener("click",
							function() {
								var href = item.getAttribute("hrefx");
								var target = item.getAttribute("target");
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
								if (!target) {
									location.href = href + header_value + phone_value + sidebar_value;
								} else {
									window.open(href, target);
								}
							});
						})
					}
				}
			}
			$.getScript('//cdn.staticfile.org/clipboard.js/2.0.8/clipboard.min.js',function(){
			
			let copy = new ClipboardJS('.bscopy');
    copy.on('success',function(e){
        $('body').toast({
							    title:'复制成功',
							    class: 'green',
							    message: '若要转载请务必保留原文链接！', 
							    showIcon: 'grin beam outline',
							    showProgress: 'top',
										});
    });
        
			});
if(setting.Mermaid == 'true'){
	    $.getScript('//cdn.staticfile.org/mermaid/9.2.2/mermaid.min.js',function(){
	      mermaid.initialize({startOnLoad:true});
	    })
	    
	} 
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
 //倒计时侧边栏
 if(setting.ClockModule == 'true'){
 let def_with = 80;
let exp = true;
let root = document.documentElement;

setInterval(() => {
  let d = new Date();
  d.setMonth(0);
  d.setDate(1);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);

  let now = new Date();
  let elapsedY = now - d;
  let spy = secondsPerYear(now.getFullYear());
  let yperc = elapsedY / 1000 / spy;
  yperc = Math.round(yperc * 10000000) / 100000;
  yearprog.innerHTML = yperc + "%";
  yearbar.style.width = yperc + "%";

  let startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0);
  startOfMonth.setMinutes(0);
  startOfMonth.setSeconds(0);
  startOfMonth.setMilliseconds(0);
  let elapsedM = now - startOfMonth;
  let spm = secondsPerMonth(now.getFullYear(), now.getMonth() + 1);
  let mperc = elapsedM / 1000 / spm;
  mperc = Math.round(mperc * 1000000) / 10000;
  monthprog.innerHTML = mperc + "%";
  monthbar.style.width = mperc + "%";

  let startOfDay = new Date();
  startOfDay.setHours(0);
  startOfDay.setMinutes(0);
  startOfDay.setSeconds(0);
  startOfDay.setMilliseconds(0);
  let elapsedD = now - startOfDay;
  let dperc = elapsedD / 1000 / 86400;
  dperc = Math.round(dperc * 100000) / 1000;
  dayprog.innerHTML = dperc + "%";
  daybar.style.width = dperc + "%";

  let startOfHour = new Date();
  startOfHour.setMinutes(0);
  startOfHour.setSeconds(0);
  startOfHour.setMilliseconds(0);
  let elapsedH = now - startOfHour;
  let hperc = elapsedH / 1000 / 3600;
  hperc = Math.round(hperc * 10000) / 100;
  hourprog.innerHTML = hperc + "%";
  hourbar.style.width = hperc + "%";

  let startOfMinute = new Date();
  startOfMinute.setSeconds(0);
  startOfMinute.setMilliseconds(0);
  let elapsedMi = now - startOfMinute;
  let miperc = elapsedMi / 1000 / 60;
  miperc = Math.round(miperc * 1000) / 10;
  minuteprog.innerHTML = miperc + "%";
  minutebar.style.width = miperc + "%";
}, 1000);

function secondsPerYear(year) {
  if (leapYear(year)) {
    return 31622400;
  } else {
    return 31536000;
  }
}

function leapYear(year) {
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function secondsPerMonth(y, m) {
  let spm = new Date(y, m, 0).getDate() * 24 * 3600;
  return spm;
}
}
 //右下角小面板
			    			 $("#bs-theme-control").on("click",function(e){
			    			     $(".bstheme-control-panel").css({"right":$(window).width()-$(this).offset().left+20,"bottom":-($(this).offset().top-$(document).scrollTop()-$(window).height()+$(this).height())}).toggle();
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

				
			if ($('#poster-btn').length) {
					    $.getScript(setting.import + "assets/vendors/bs-poster/bposter.js");
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
			if (setting.menu_style == '2') {
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
				$.getScript(setting.import + "assets/js/new-menu.min.js",
				function() {
					$('#main-menu').smartmenus({
						mainMenuSubOffsetX: -1,
						mainMenuSubOffsetY: 4,
						subMenusSubOffsetX: 6,
						subMenusSubOffsetY: -6
					});
				});
			}
			if (setting.Lazyload == 'true') {
			$.getScript("//cdn.staticfile.org/lazysizes/5.3.2/lazysizes.min.js");
			$.getScript("//cdn.staticfile.org/lazysizes/5.3.2/plugins/unveilhooks/ls.unveilhooks.min.js");
			}
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
						function() {
						  
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
						function() {
						
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
						function() {
						
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
						function() {
						    
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
	if(setting.owo == 'true'){
				//加载表情
				$.getScript(setting.import + "assets/vendors/bs-emoji/bs-emoji.js?v=1",
				function() {
					$('#face').BearsimpleEmoji($('.emotion'));
$('#facecross').BearsimpleEmoji($('.emotion'));
				});
				}
			if (setting.scroll == 'true') {
				$.getScript(setting.import + "assets/vendors/bs-toc/bs-toc.min.js",
				function() {
				window.tocManager.displayDisableTocTips = false;
            window.tocManager.generateToc();	
				});
				
			}
			if (setting.sticky == 'true') {
				$.getScript("//cdn.staticfile.org/stickybits/3.7.11/jquery.stickybits.min.js",
			function(){
			   $('#sidebar').stickybits();
			});
		
			}
			$.getScript("//cdn.staticfile.org/fomantic-ui/2.9.1/semantic.min.js",
			function(){
			    $('.slider.checkbox').checkbox({
    onChecked: function() {
      $('#textarea').addClass('bshideContent');
    },
    onUnchecked: function() {
      $('#textarea').removeClass('bshideContent');
    }
  });
				$('.ui.star.rating').rating();
				$('.ui.heart.rating').rating();
				$('.ui.accordion').accordion();
				$('.message .close').on('click',
				function() {
					$(this).closest('.message').transition('fade');
				});
		$('.ui.embed').embed();
	
				$('.ui.dropdown').dropdown({
					on: 'hover',
				});
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
			if (setting.pjax == "1") {
				$.getScript("//cdn.staticfile.org/fomantic-ui/2.9.1/semantic.min.js",
				function() {
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
						maxResults: 9999999999999999,
						showNoResults: false,
						onSelect(result, response) {
							return false;
						}
					});
				});
			} else if (setting.pjax == "2") {
				$.getScript("//cdn.staticfile.org/fomantic-ui/2.9.1/semantic.min.js",
				function() {
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
						maxResults: 9999999999999999,
						showNoResults: false,
					});
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
							//当开启旋转验证码时评论失败后重置验证码
             if(setting.verify_type == '22'){
                 $('#bsverify').show();
                 document.getElementById("commentsubmit").setAttribute("disabled", true);
             }
							//当开启Vaptcha时评论失败后重置验证码
             if(setting.verify_type == '2' && setting.vid !== ''){
             $('#VAPTCHAContainers').load(location.href+" #VAPTCHAContainers",function(){
                 $.getScript('//v-cn.vaptcha.com/v3.js',function(option){
                     setting = $.extend(option);
                vaptcha({
            vid: setting.vid,
            mode: 'click',
            scene: 1,
            container: '#VAPTCHAContainers',
            area: 'auto',
        }).then(function (VAPTCHAObj) {
            obj = VAPTCHAObj;
            VAPTCHAObj.render();
            VAPTCHAObj.renderTokenInput('#commentform');
            VAPTCHAObj.listen('pass', function () {
                document.getElementById("commentsubmit").removeAttribute("disabled");
            })
        })
                });
             });
             document.getElementById("commentsubmit").setAttribute("disabled", true);
             };
             //当开启顶象时评论失败后重置验证码
             if(setting.verify_type == '2-1' && setting.dx_appid !== '' && setting.dx_apiserver !== ''){
                 $('#dx_captcha').load(location.href+" #dx_captcha",function(){
            $.getScript('https://cdn.dingxiang-inc.com/ctu-group/captcha-ui/index.js',function(option){
                setting = $.extend(option);
    var myCaptcha = _dx.Captcha(document.getElementById('dx_captcha'), {
    appId: setting.dx_appid,
    apiServer: 'https://'+setting.dx_apiserver,
    success: function (token) {
        let tokeninput = $("<input type='text' name='dx_token' style='display:none'/>");
        tokeninput.attr("value",token);
        $("#textarea").append(tokeninput);
      document.getElementById("commentsubmit").removeAttribute("disabled");
    }
    })
            })
});
             document.getElementById("commentsubmit").setAttribute("disabled", true);
             };
              //当开启Turnstile时评论失败后重置验证码
             if(setting.verify_type == '2-2' && setting.turnstile_sitekey !== ''){
                  $('#turnstile_captcha').load(location.href+" #turnstile_captcha",function(){
                     $.getScript('https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback',function(){
window.onloadTurnstileCallback=function(){$('#turnstile_captcha').html('');eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[1-4]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p});turnstile.render('#turnstile_captcha',{sitekey:setting.turnstile_sitekey,theme:setting.turnstile_theme,action:'comment',callback:function(token){document.getElementById("commentsubmit").removeAttribute("disabled");},})};

}); 
                  });
             document.getElementById("commentsubmit").setAttribute("disabled", true);
                  
             };
             
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
             $('#bscommen').load(location.href+" #bscommen"); 
             $('#forminput').load(location.href+" #forminput",function(){
                 //加载表情
				$.getScript(setting.import + "assets/vendors/bs-emoji/bs-emoji.js",
				function() {
					$('#face').BearsimpleEmoji($('.emotion'));
$('#facecross').BearsimpleEmoji($('.emotion'));
				});
                 $.getScript("//cdn.staticfile.org/fomantic-ui/2.9.0/components/checkbox.min.js",
			function(){
			    $('.slider.checkbox').checkbox({
    onChecked: function() {
      $('#textarea').addClass('bshideContent');
    },
    onUnchecked: function() {
      $('#textarea').removeClass('bshideContent');
    }
  });
			});}); 
             	//当开启旋转验证码时评论成功后重置验证码
             if(setting.verify_type == '22'){
                 $('#bsverify').show();
        document.getElementById("commentsubmit").setAttribute("disabled", true);
             }
             //当开启Vaptcha时评论成功后重置验证码
             if(setting.verify_type == '2' && setting.vid !== ''){
             $('#VAPTCHAContainers').load(location.href+" #VAPTCHAContainers",function(){
                 $.getScript('//v-cn.vaptcha.com/v3.js',function(option){
				   setting = $.extend(option);
                vaptcha({
            vid: setting.vid,
            mode: 'click',
            scene: 1,
            container: '#VAPTCHAContainers',
            area: 'auto',
        }).then(function (VAPTCHAObj) {
            obj = VAPTCHAObj;
            VAPTCHAObj.render();
            VAPTCHAObj.renderTokenInput('#commentform');
            VAPTCHAObj.listen('pass', function () {
                document.getElementById("commentsubmit").removeAttribute("disabled");
            })
        })
                });
             });
             document.getElementById("commentsubmit").setAttribute("disabled", true);
             };
             //当开启顶象时评论成功后重置验证码
             if(setting.verify_type == '2-1' && setting.dx_appid !== '' && setting.dx_apiserver !== ''){
                  $('#dx_captcha').load(location.href+" #dx_captcha",function(){
            $.getScript('https://cdn.dingxiang-inc.com/ctu-group/captcha-ui/index.js',function(option){
                setting = $.extend(option);
    var myCaptcha = _dx.Captcha(document.getElementById('dx_captcha'), {
    appId: setting.dx_appid,
    apiServer: 'https://'+setting.dx_apiserver,
    success: function (token) {
        let tokeninput = $("<input type='text' name='dx_token' style='display:none'/>");
        tokeninput.attr("value",token);
        $("#textarea").append(tokeninput);
      document.getElementById("commentsubmit").removeAttribute("disabled");
    }
    });

            });
});
             document.getElementById("commentsubmit").setAttribute("disabled", true);
                  
             };
             //当开启Turnstile时评论成功后重置验证码
             if(setting.verify_type == '2-2' && setting.turnstile_sitekey !== ''){
                  $('#turnstile_captcha').load(location.href+" #turnstile_captcha",function(){
                     $.getScript('https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback',function(){
   window.onloadTurnstileCallback = function () {
    turnstile.render('#turnstile_captcha', {
        sitekey: setting.turnstile_sitekey,
        callback: function(token) {
            document.getElementById("commentsubmit").removeAttribute("disabled");
        },
    });
};
}); 
                  });
             document.getElementById("commentsubmit").setAttribute("disabled", true);
                  
             };
           $('#commentsubmit').removeClass('loading');
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
		//当开启旋转验证码时评论失败后重置验证码
             if(setting.verify_type == '22'){
                 $('#bsverify').show();
                 document.getElementById("commentsubmit").setAttribute("disabled", true);
             }
			 //当开启Vaptcha时评论失败后重置验证码
             if(setting.verify_type == '2' && setting.vid !== ''){
             $('#VAPTCHAContainers').load(location.href+" #VAPTCHAContainers",function(){
                 $.getScript('//v-cn.vaptcha.com/v3.js',function(option){
                vaptcha({
            vid: setting.vid,
            mode: 'click',
            scene: 1,
            container: '#VAPTCHAContainers',
            area: 'auto',
        }).then(function (VAPTCHAObj) {
            obj = VAPTCHAObj;
            VAPTCHAObj.render();
            VAPTCHAObj.renderTokenInput('#commentform');
            VAPTCHAObj.listen('pass', function () {
                document.getElementById("commentsubmit").removeAttribute("disabled");
            })
        })
                });
             });
             document.getElementById("commentsubmit").setAttribute("disabled", true);
             };
             //当开启顶象时评论失败后重置验证码
             if(setting.verify_type == '2-1' && setting.dx_appid !== '' && setting.dx_apiserver !== ''){
                 $('#dx_captcha').load(location.href+" #dx_captcha",function(){
            $.getScript('https://cdn.dingxiang-inc.com/ctu-group/captcha-ui/index.js',function(option){
                setting = $.extend(option);
    var myCaptcha = _dx.Captcha(document.getElementById('dx_captcha'), {
    appId: setting.dx_appid,
    apiServer: 'https://'+setting.dx_apiserver,
    success: function (token) {
        let tokeninput = $("<input type='text' name='dx_token' style='display:none'/>");
        tokeninput.attr("value",token);
        $("#textarea").append(tokeninput);
      document.getElementById("commentsubmit").removeAttribute("disabled");
    }
    });
    myCaptcha.reload();
            })
});
             document.getElementById("commentsubmit").setAttribute("disabled", true);
             };
        //当开启Turnstile时评论失败后重置验证码
             if(setting.verify_type == '2-2' && setting.turnstile_sitekey !== ''){
                  $('#turnstile_captcha').load(location.href+" #turnstile_captcha",function(){
                     $.getScript('https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback',function(){
   window.onloadTurnstileCallback = function () {
    turnstile.render('#turnstile_captcha', {
        sitekey: setting.turnstile_sitekey,
        callback: function(token) {
            document.getElementById("commentsubmit").removeAttribute("disabled");
        },
    });
};
}); 
                  });
             document.getElementById("commentsubmit").setAttribute("disabled", true);
                  
             };
             
             
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
    url:$("#form").attr('action'),  
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
            window.location.reload();
            },3000);
    }
  });
  

				});
				
				
			if (setting.Login_hidden == 'true') {
				$.getScript("//lf26-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.js",
				function(option) {
				    setting = $.extend(option);
					$("#bs-login").click(function() {
(async () => {
const { value: formValues } = await Swal.fire({
  title: '登录',
  html:
    '<div style="overflow: hidden;margin-left:-15px"><input id="swal-input1" class="swal2-input" placeholder="输入您的账号"><br>' +
    '<input id="swal-input2" type="password" class="swal2-input" placeholder="输入您的密码"></div><br>',
  focusConfirm: false,
  confirmButtonText: '立即登陆',
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
});



if (formValues) {
    $.ajax({  
    type: "POST",  
    url:setting.loginAction,  
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
							    message: '您已成功登陆，页面将在3秒后跳转~', 
							    showIcon: 'grin beam outline',
							    showProgress: 'top',
							});
        setTimeout(function() {
								window.location.reload();

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
				if (setting.Sharewechat == 'true') {
					$.getScript("//cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js",
					function() {
						jQuery('#qrcode').qrcode({
							text: url
						});
					});
				}
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
			if (setting.Like == 'true') {
				$('#agree-btn').on('click',
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
				$(document).off('click').on('click','.like.thumbs.up.red.link.icon',
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
									//toastr.warning('点赞失败，检测到来源错误，请稍后再试~');
									$('body')
							.toast({
							    title:'点赞失败',
							    class: 'warning',
							    message: '检测到来源错误，请稍后再试~', 
							    showIcon: 'flushed outline',
							    showProgress: 'top',
							});
								} else {
									$('.agreenumcomment' + json.coid).html(json.agree);
									localStorage.setItem("coid" + json.coid, 'like=true');
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
							},
						});
					}
				});
			}
			return this
		}
	})
} (jQuery));