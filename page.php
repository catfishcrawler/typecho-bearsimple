<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; 
if (isset($_POST['agree'])) {
    if ($_POST['agree'] == $this->cid) {
        exit(agree($this->cid));
    }
    exit('error');
}
?>
<?php $this->need('header.php'); ?>
<?php if($this->options->Diy == '1') :?>

<?php $this->need('pages/diy-page.php'); ?>

  <?php endif; ?>

<?php if($this->options->Diy == '2' || empty($this->options->Diy)) :?>

<?php $this->need('pages/page.php'); ?>

  <?php endif; ?>
<script src="<?php AssetsDir();?>assets/js/bearsimple-single.js"></script>
<?php $this->need('sidebar.php'); ?>
<?php $this->need('footer.php'); ?>
