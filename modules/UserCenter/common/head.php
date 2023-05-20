<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit;?>
<?php
if(empty(Bsoptions('IframeProtect')) || Bsoptions('IframeProtect') !== '1'){
switch(Bsoptions('IframeProtect')){
    case '2':
    header('X-Frame-Options:SAMEORIGIN');
    break;
    case '3':
    header('X-Frame-Options:DENY');  
    break;
}
}
?>
<?php if(Bsoptions('Compress') == true) :?>
<?php ob_start(); ?>
<?php endif; ?>
<?php if (Bsoptions('CCFirewalls') == true): ?>
<?php include 'modules/cc-firewall.php'; ?>
<?php endif; ?>
<!DOCTYPE html>
<html lang="zh-CN" data-theme="light"<?php if (Bsoptions('Mournmode') == true): ?> class="gray"<?php endif; ?>>
    <head>
    <meta name="referrer" content="always" />
    <meta charset="<?php $this->options->charset(); ?>">
      
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="renderer" content="webkit">
 <?php if (Bsoptions('DNSYJX') == true): ?>
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <?php foreach(Bsoptions('DNSYJX_AR') as $dnsyjx): ?>
    <?php if($dnsyjx['DNSADDRESS_Preconnect'] == true):?>
    <link rel="preconnect" href="<?php echo $dnsyjx['DNSADDRESS'] ?>" <?php if($dnsyjx['DNSADDRESS_Crossorign'] == true):?>crossorign<?php endif; ?>>
    <?php endif; ?>
<link rel="dns-prefetch" href="<?php echo $dnsyjx['DNSADDRESS'] ?>">
    <?php endforeach; ?>
<?php endif; ?>
<?php if (Bsoptions('DNSYJX') == '' || Bsoptions('DNSYJX') == false): ?>
<meta http-equiv="x-dns-prefetch-control" content="off">
<?php endif; ?>
 <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no, viewport-fit=cover" />
 <?php if(!empty(Bsoptions('favicon'))): ?>
 <link rel="shortcut icon" href="<?php echo Bsoptions('favicon') ?>" />
 <?php endif; ?>
<title>用户中心 - <?php $this->options->title();?></title>
<script src="//lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/1.12.4/jquery.min.js" type="application/javascript"></script>

<link rel="stylesheet" type="text/css" href="<?php AssetsDir();?>assets/css/bearsimple.min.css?v=<?php echo themeVersion(); ?>">
<link href="//cdn.staticfile.org/fomantic-ui/2.9.2/semantic.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="<?php AssetsDir();?>assets/vendors/usercenter/usercenter.min.css?v=<?php echo themeVersion(); ?>">
<script src='<?php AssetsDir();?>assets/vendors/usercenter/usercenter.min.js?v=2'></script>
<link rel="stylesheet" href="//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/5.15.4/css/all.min.css?ver=5.15.4">
<link rel="stylesheet" href="//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/5.15.4/css/v4-shims.min.css?ver=5.15.4">
<script  src="//cdn.staticfile.org/toastr.js/2.1.4/toastr.min.js"></script>
<?php bs_style(); ?>
<?php echo Bsoptions('CustomizationCode'); ?>
<?php if(Bsoptions('Popup') == true) :?>
<link href="<?php AssetsDir();?>assets/vendors/bs-announcement/bs-announcement.css" rel="stylesheet" type="text/css">
<?php endif; ?>
<?php if(Bsoptions('Slidersss') == true) :?>
<link href="<?php AssetsDir();?>assets/vendors/slider/bearslider.min.css" rel="stylesheet" type="text/css">
<?php endif; ?>
<link href="<?php AssetsDir();?>assets/vendors/bs-toc/bs-toc.min.css" rel="stylesheet" type="text/css">
<?php $this->header(); ?>
  <?php if (Bsoptions('Translate') == "11"): ?>
  <script type="text/javascript" src="<?php AssetsDir();?>assets/js/translate.js"></script>
  <?php endif; ?>
<link href="//lf6-cdn-tos.bytecdntp.com/cdn/expire-0-ms/limonte-sweetalert2/11.4.4/sweetalert2.min.css" type="text/css" rel="stylesheet" />

<?php if (Bsoptions('Poster') == true): ?>
<link href="<?php AssetsDir();?>assets/vendors/bs-poster/bearui/assets/bearui.css" rel="stylesheet" />
<link href="<?php AssetsDir();?>assets/vendors/bs-poster/bposter.css" rel='stylesheet' />
<?php endif; ?>
<link rel="stylesheet" href="<?php AssetsDir();?>assets/vendors/bs-audio/audio.css">
<?php if(Bsoptions('more_posts') == true): ?>
<link rel="stylesheet" href="<?php AssetsDir();?>assets/css/modules/carousel/carousel.min.css">
<?php endif; ?>
<style>
img.lazy,div.lazy{opacity:0;-webkit-transition:.8s ease-in-out opacity;transition:.8s ease-in-out opacity;filter:blur(35px)}img.loaded,div.loaded{filter:blur(0);opacity:1;transition:.5s filter linear,.5s -webkit-filter linear}
    a{
        color:#000000;
    }
    .swal2-input{
     max-width:300px;   
    }
</style>
<!--数学公式判断-->
<script>
    window.Mathjax = "<?php echo Bsoptions('MathJax'); ?>";
    <?php if(Bsoptions('Cache') == true && (Bsoptions('Cache_choose') == 'memcached' || Bsoptions('Cache_choose') == 'redis') && Bsoptions('enable_gcache') == true):?>
    window.GlobalCache = "on";
    <?php endif; ?>
</script>
<style>
/**
 * Oscuro: #283035
 * Azul: #03658c
 * Detalle: #c7cacb
 * Fondo: #dee1e3
 ----------------------------------*/
.comments-container * {
 	margin: 0;
 	padding: 0;
 	-webkit-box-sizing: border-box;
 	-moz-box-sizing: border-box;
 	box-sizing: border-box;
 }

.comments-container  ul {
	list-style-type: none;
}



/** ====================
 * Lista de Comentarios
 =======================*/
.comments-container {
	margin: 0 auto;
	max-width: 100%;
}

.comments-container h1 {
	font-size: 36px;
	color: #283035;
	font-weight: 400;
}

.comments-container h1 a {
	font-size: 18px;
	font-weight: 700;
}

.comments-list {
	margin-top: 30px;
	position: relative;
}







.comments-list li {
	margin-bottom: 15px;
	display: block;
	position: relative;
}

.comments-list li:after {
	content: '';
	display: block;
	clear: both;
	height: 0;
	width: 0;
}

.reply-list {
	padding-left: 88px;
	clear: both;
	margin-top: 15px;
}


.comments-list .comment-avatar {
	width: 65px;
	height: 65px;
	position: relative;
	z-index: 99;
	float: left;
	border: 3px solid #FFF;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;
	-webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
	-moz-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
	box-shadow: 0 1px 2px rgba(0,0,0,0.2);
	overflow: hidden;
}

.comments-list .comment-avatar img {
	width: 100%;
	height: 100%;
}

.reply-list .comment-avatar {
	width: 50px;
	height: 50px;
}

.comment-main-level:after {
	content: '';
	width: 0;
	height: 0;
	display: block;
	clear: both;
}
.comments-list .comment-box {
	max-width: 100%;
	margin-left:80px;
	position: relative;
	-webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.15);
	-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.15);
	box-shadow: 0 1px 1px rgba(0,0,0,0.15);
	word-break:break-all;
}

.comments-list .comment-box:before, .comments-list .comment-box:after {
	content: '';
	height: 0;
	width: 0;
	position: absolute;
	display: block;
	border-width: 10px 12px 10px 0;
	border-style: solid;
	border-color: transparent #FCFCFC;
	top: 8px;
	left: -11px;
}

.comments-list .comment-box:before {
	border-width: 11px 13px 11px 0;
	border-color: transparent rgba(0,0,0,0.05);
	left: -12px;
}

.reply-list .comment-box {
	width: 610px;
}
.comment-box .comment-head {
	background: #FCFCFC;
	padding: 10px 12px;
	border-bottom: 1px solid #E5E5E5;
	overflow: hidden;
	-webkit-border-radius: 4px 4px 0 0;
	-moz-border-radius: 4px 4px 0 0;
	border-radius: 4px 4px 0 0;
}

.comment-box .comment-head i {
    margin-left: 30px;
	position: relative;
	top: 2px;
	color: #FF5252;
}
.comment-box .comment-head .clikenum{
    color: #999;
    margin-right: 20px;
	font-size: 13px;
	vertical-align: middle;
}

.comment-box .comment-name {
	color: #283035;
	font-size: 14px;
	font-weight: 700;
	float: left;
	margin-right: 10px;
}

.comment-box .comment-name a {
	color: #283035;
}

.comment-box .comment-head span {
	float: left;
	color: #999;
	font-size: 13px;
	position: relative;
	top: 1px;
}

.comment-box .comment-content {
	background: #FFF;
	padding: 12px;
	font-size: 15px;
	color: #595959;
	-webkit-border-radius: 0 0 10px 10px;
	-moz-border-radius: 0 0 10px 10px;
	border-radius: 0 0 10px 10px;
}
.comment-box .comment-content img {
	border-radius:10px;
	max-width:200px;
}




</style>
 </head>
 <body id="translatethis"  class="translatethis" <?php if(Bsoptions('CopyProtect') == true) :?>oncontextmenu='return false' ondragstart='return false' onselectstart ='return false' onselect='document.selection.empty()' oncopy='document.selection.empty()' onbeforecopy='return false'<?php endif; ?>  >
     <?php if(Bsoptions('Read_Process') == true) :?>
<div class="read_progress">
    <div class="read_progress_inner"></div>
</div>

<?php endif; ?>

<div id="nopjax">
     <div id="pjax">
         <?php if(Bsoptions('Pjax') == true) :?>
         <?php $this->header('commentReply=1&description=0&keywords=0&generator=0&template=0&pingback=0&xmlrpc=0&wlw=0&rss2=0&rss1=0&antiSpam=0&atom'); ?>
     <?php endif; ?>
     <div class="body_container" id="body_container">
         
         <div id="header">
             <div class="site-name">
<?php if(!empty(Bsoptions('Search')[0]) && @in_array('header',Bsoptions('Search'))) :?>   
        <form name="pcsearch" role="search" method="get" id="searchform1">
 <div class="bearmargin" style="float:right;"><div class="ui search"><div class="ui large icon input pc">
      <input class="prompt" id="pcsearch" type="text" name="s" placeholder="输入关键词进行搜索">
      <i hrefx="?s=" class="search link icon"></i>
</div></div></div>
</form> 
<?php endif; ?>
                 <?php if(Bsoptions('header_choose') == 'image') :?>
    <a id="logo" href="<?php $this->options->siteUrl(); ?>"><img width="250" height="70" src="<?php echo Bsoptions('imagelogo') ?>"></a>
        	    <p class="description"></p>
        	    <?php else :?>
        	     <a id="logo" href="<?php $this->options->siteUrl(); ?>"><?php echo Bsoptions('textlogo_text') ?>	     </a>
        	     <?php if(!empty(Bsoptions('textlogo_dec'))) :?>
        	    <p class="description"><?php echo Bsoptions('textlogo_dec'); ?></p>
        	     <?php endif; ?>
        	     
      <?php endif; ?>
        
        	     
        	    </div>
        	    <?php if(!empty(Bsoptions('Search')[0]) && @in_array('phone',Bsoptions('Search'))) :?> 
<form name="phonesearch" role="search" method="get" id="searchformbyphone">
 <div style="text-align:center">
<div class="ui search">
<div class="ui icon input phone">
      <input class="prompt" id="phonesearch" type="text" name="s" placeholder="输入关键词进行搜索">
      <i hrefx="?s=" class="search link icon"></i>
</div>
</div></div>
</form>
<?php endif; ?>

<?php if(Bsoptions('menu_style') == "2"): ?>
<input id="main-menu-state" type="checkbox" />
<center>
<div style="margin-top:15px">
<label class="main-menu-btn" for="main-menu-state">
  <span class="main-menu-btn-icon"></span>
</label>
</div>
</center>

      <ul id="main-menu" class="sm sm-clean">
        <li><a href="<?php $this->options->siteUrl(); ?>"<?php if($this->is('index')): ?> class="current"<?php endif; ?>>首页</a></li>
        <?php if(Bsoptions('CategoryMenu') == null || Bsoptions('CategoryMenu') == true): ?>
        <li class="bnm"><a <?php if($this->is('category')): ?> class="current"<?php endif; ?>>分类</a>
          <ul>
              <?php $this->widget('Widget_Metas_Category_List')->to($categorys); ?>
<?php while($categorys->next()): ?>

<?php if ($categorys->levels === 0): ?>

<?php $children = $categorys->getAllChildren($categorys->mid); ?>

<?php if (empty($children)) { ?>

            <li><a href="<?php $categorys->permalink(); ?>" title="<?php $categorys->name(); ?>" <?php if($this->is('category',$categorys->slug)): ?> class="current"<?php endif; ?>> <?php $categorys->name(); ?></a></li>
<?php }  else { ?>

            <li><a href="<?php $categorys->permalink(); ?>" <?php if($this->is('category',$categorys->slug)): ?> class="current"<?php endif; ?>><?php $categorys->name(); ?></a>
              <ul>
                  <?php foreach ($children as $mid) { ?>
<?php $child = $categorys->getCategory($mid); ?>

                <li><a href="<?php echo $child['permalink'] ?>" title="<?php echo $child['name']; ?>" <?php if($this->is('category',$child['slug'])): ?> class="current"<?php endif; ?>><?php echo $child['name']; ?></a></li>
                <?php } ?>
              </ul>
          
            </li>
       
            
            
                <?php } ?>
       <?php endif; ?><?php endwhile; ?>
          </ul>
        </li>
        <?php endif; ?>
<?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
<?php if($pages->have()): ?>
<?php if(Bsoptions('PageMenu') == null || Bsoptions('PageMenu') == "1"): ?>
        <li><a<?php if($this->is('page')): ?> class="current"<?php endif; ?>>页面</a>
          <ul>
                    <?php while($pages->next()): ?>
            <li><a href="<?php $pages->permalink(); ?>" <?php if($this->is('page',$pages->slug)): ?> class="current"<?php endif; ?> title="<?php $pages->name(); ?>"><?php $pages->title(); ?></a></li>
            <?php endwhile; ?>
            </ul>
        </li>
        <?php else : ?>
                    <?php while($pages->next()): ?>
            <li><a href="<?php $pages->permalink(); ?>"<?php if($this->is('page',$pages->slug)): ?> class="current"<?php endif; ?> title="<?php $pages->name(); ?>"><?php $pages->title(); ?></a></li>
         <?php endwhile; ?>
         <?php endif; ?>
<?php endif; ?>

         <?php foreach (getMenu() as $MenuLinks): ?>
        <li><a href="<?php echo $MenuLinks[0]; ?>" title="<?php echo $MenuLinks[1]; ?>"<?php if(Bsoptions('Link_blank') == true):?> target="_blank"<?php endif; ?>><?php echo $MenuLinks[1]; ?> </a></li>
        <?php endforeach; ?>
        
<?php if(Bsoptions('Login_hidden') == true): ?>
<li id="bs-login" style="display:none"><a><?php _e('登录'); ?></a></li>
<li id="bs-islogin" style="display:none"><a href="<?php $this->options->adminUrl(); ?>"  pjax="no"><?php _e('进入管理中心'); ?></a></li>
<li id="bs-islogin2" style="display:none"><a href="<?php $this->options->siteUrl(); ?>/index.php/usercenter" pjax="no"><?php _e('进入用户中心'); ?></a></li>
<?php endif; ?>

      </ul>
</div>
<?php else: ?>
 <div id="nav-menu">

        <a<?php if($this->is('index')): ?> class="current"<?php endif; ?> href="<?php $this->options->siteUrl(); ?>"><?php _e('首页'); ?></a>
        <?php if(Bsoptions('CategoryMenu') == null || Bsoptions('CategoryMenu') == true): ?>
   <a>
  <div class="ui dropdown">
  分类 <i class="dropdown icon"></i>
  <div class="menu">
   
   <?php $this->widget('Widget_Metas_Category_List')->to($categorys); ?>
<?php while($categorys->next()): ?>
<?php if ($categorys->levels === 0): ?>
<?php $children = $categorys->getAllChildren($categorys->mid); ?>
<?php if (empty($children)) { ?>

<div class="item" hrefs="<?php $categorys->permalink(); ?>" title="<?php $categorys->name(); ?>"><?php $categorys->name(); ?>  </div>

<?php }  else { ?>
<div class="item">
        <i class="dropdown icon"></i>
        <div class="text" hrefs="<?php $categorys->permalink(); ?>"><?php $categorys->name(); ?></div>
        <div class="menu">
<?php foreach ($children as $mid) { ?>
<?php $child = $categorys->getCategory($mid); ?>
<div class="item" hrefs="<?php echo $child['permalink'] ?>" title="<?php echo $child['name']; ?>"><?php echo $child['name']; ?> 
</div>
<?php } ?></div></div><?php } ?>
<?php endif; ?><?php endwhile; ?>


  </div>
</div></a>
<?php endif; ?>
<?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
<?php if($pages->have()): ?>
<?php if(Bsoptions('PageMenu') == null || Bsoptions('PageMenu') == "1"): ?>
<a>
<div class="ui dropdown">
  页面 <i class="dropdown icon"></i>
  <div class="menu">

              
                    <?php while($pages->next()): ?>
                    <div class="item" hrefs="<?php $pages->permalink(); ?>" title="<?php $pages->name(); ?>"><?php $pages->title(); ?>  </div>
                  
                    <?php endwhile; ?>

</div>
</div></a>

<?php else : ?>
<?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
                    <?php while($pages->next()): ?>
<a <?php if($this->is('page',$pages->slug)): ?> class="current"<?php endif; ?> href="<?php $pages->permalink(); ?>" title="<?php $pages->name(); ?>"><?php $pages->title(); ?> 
</a>
<?php endwhile; ?>
<?php endif; ?>
<?php endif; ?>

<?php foreach (getMenu() as $MenuLinks): ?>
<a href="<?php echo $MenuLinks[0]; ?>" title="<?php echo $MenuLinks[1]; ?>"<?php echo parselink($MenuLinks[0]); ?>><?php echo $MenuLinks[1]; ?> 
</a>
<?php endforeach; ?>
<?php if(Bsoptions('Login_hidden') == true): ?>
<a id="bs-login" style="display:none"><?php _e('登录'); ?></a>
<a id="bs-islogin" href="<?php $this->options->adminUrl(); ?>" style="display:none" pjax="no"><?php _e('进入管理中心'); ?></a>
<li id="bs-islogin2" style="display:none"><a href="<?php $this->options->siteUrl(); ?>/index.php/usercenter" pjax="no"><?php _e('进入用户中心'); ?></a></li>
<?php endif; ?>
  </div>
        </div>
        <?php endif; ?>

<div class="sticky" id="sticky">
    <bearsimple id="bearsimple-images"></bearsimple>
 <bearsimple id="bearsimple-images-readmode"></bearsimple>