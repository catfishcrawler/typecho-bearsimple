<?php
    /**
    * 时光机[微语]
    *
    * @package custom
    */
?>
<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<?php $this->need('compoment/head.php');?>
<?php if(Bsoptions('cross_style') == '2'): ?>
<link rel="stylesheet" type="text/css" href="<?php AssetsDir();?>assets/css/modules/timeline_custom.css?v=<?php echo themeVersion(); ?>">
<?php endif; ?>
<div class="pure-g" id="layout">
            <div class="pure-u-1 pure-u-md-<?php if(Bsoptions('site_style') == '1' || Bsoptions('site_style') == ''):?>3<?php endif;?><?php if(Bsoptions('site_style') == '2'):?>4<?php endif;?>-4">
                <div class="content_container">
               <?php if(Bsoptions('Diy') == true): ?><div class="ui <?php if(Bsoptions('postType') == "1"): ?>raised<?php endif; ?><?php if(Bsoptions('postType') == "2"): ?>stacked<?php endif; ?><?php if(Bsoptions('postType') == "3"): ?>tall stacked<?php endif; ?><?php if(Bsoptions('postType') == "4"): ?>piled<?php endif; ?> segment" <?php if(Bsoptions('postradius')): ?>style="border-radius:<?php echo Bsoptions('postradius'); ?>px"<?php endif; ?>><?php endif; ?>
                    <h2><i class="hourglass half icon"></i> <?php $this->title() ?></h2><br>
                    <?php Typecho_Widget::widget('Widget_Stat')->to($stat); ?>

<div class="ui three statistics">
  <div class="statistic" style="margin-left:auto;margin-right:auto">
    <div class="value">
      <?php if($stat->publishedPostsNum > '999'){echo '999+';}else{echo $stat->publishedPostsNum();} ?>
    </div>
    <div class="label">
      篇文章
    </div>
  </div>
  <div class="statistic" style="margin-left:auto;margin-right:auto">
    <div class="value">
     <?php if($stat->publishedCommentsNum - $this->commentsNum> '999'){echo '999+';}else{echo $stat->publishedCommentsNum - $this->commentsNum;} ?>
    </div>
    <div class="label">
      条评论
    </div>
  </div>
  <div class="statistic" style="margin-left:auto;margin-right:auto">
    <div class="value">
      <?php if($this->commentsNum > '999'){echo '999+';}else{echo $this->commentsNum;} ?>
    </div>
    <div class="label">
      条动态
    </div>
  </div>
 
</div>

<center><button class="ui icon button" style="margin-top:20px"><i class="level down alternate icon"></i>我的动态</button><button id="say" class="ui icon button" style="margin-top:20px;display:none;"><i class="location arrow icon"></i>我要发动态</button></center>
<?php $this->need('cross-says.php'); ?>

</div></div>

<?php if(Bsoptions('Diy') == true): ?></div><?php endif; ?>
<?php if($this->is('page')):?>
<script>
function addSayBtn(){
    $.post('<?php getIsLogin(); ?>',{action:'find'},function (res) {
        res = JSON.parse(res);
        switch(res.code){
    case 1 :
       $('#say').show();
       $('.editsays').show();
    break;
        }
    })
}
    jQuery(document).ready(function($){
addSayBtn();
 $('#say').on('click', function () {   
     $("#comments").fadeIn('fast');
 });
	var $timeline_block = $('.bs-timeline-block');

	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.bs-timeline-img, .bs-timeline-content').addClass('is-hidden');
		}
	});

	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.bs-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.bs-timeline-img, .bs-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});
</script>

    
<?php endif; ?>
<?php $this->need('compoment/sidebar.php'); ?>
<?php $this->need('compoment/foot.php'); ?>