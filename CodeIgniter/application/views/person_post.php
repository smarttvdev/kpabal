<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Welcome to CodeIgniter</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style type="text/css">
        input{
            width:100%;
            margin:5px;
        }
        select {
            margin: 5px;
            max-width: 200px;
            display: inline-block !important;
        }
	</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="../tinymce/tinymce.min.js" type="text/javascript"></script>
<script src="../tinymce/jquery.tinymce.min.js" type="text/javascript"></script>

</head>
<body>
    <form method="post" action="./post_insert">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <input type="text" name="title" placeholder="Title" class="form-control" />
                <p>&nbsp;</p>
                <h4>신상정보</h4>
                <hr />
                <div class="col-sm-2">이름:</div><div class="col-sm-10"><input type="text" name="name" class="form-control" /></div>
                <div class="col-sm-2">전화번호:</div><div class="col-sm-10"><input type="text" name="phone" class="form-control" /></div>
                <div class="col-sm-2">이메일:</div><div class="col-sm-10"><input type="email" name="email" class="form-control" /></div>
                <div class="col-sm-2">홈페이지:</div><div class="col-sm-10"><input type="text" name="homepage" class="form-control" /></div>
                <div class="col-sm-2">이력서:</div><div class="col-sm-10"><input type="text" name="resume" class="form-control" /></div>
                
                <p>&nbsp;</p>
                <h4>구직정보</h4>
                <hr />
                <div class="col-sm-2">지원분야:</div><div class="col-sm-10">
                   <select name="careers_occupation1" id="careers_occupation1" class="form-control">
                    <?php 
                    foreach($p_cats as $p_cat){ 
                    ?>
                    <option value="<?=$p_cat['id']?>"><?=$p_cat['name']?></option>
                    <?php
                    }
                    ?>
                  </select>
                  <select name="careers_occupation2" id="careers_occupation2" class="form-control">
                    <?php 
                    foreach($s_cats as $s_cat){ 
                    ?>
                    <option value="<?=$s_cat['id']?>"><?=$s_cat['name']?></option>
                    <?php
                    }
                    ?>
                  </select>
                </div>
                <div class="col-sm-2">희망지역:</div><div class="col-sm-10">
                    <select name="company_location" id="company_location" class="form-control">
                    	<?php
                    	foreach($locations as $location){
                    	?>
                    	<option value="<?=$location['id']?>"><?=$location['name']?></option>
                    	<?php
                    	}
                    	?>
                    </select>
                </div>
                <div class="col-sm-2">구직형태:</div><div class="col-sm-10">
                    <select name="careers_type" class="form-control">
                    <?php 
                    foreach($j_types as $j_type){ 
                    ?>
                    <option value="<?=$j_type['id']?>"><?=$j_type['name']?></option>
                    <?php
                    }
                    ?>
                    </select>
                </div>
                <div class="col-sm-2">희망급여:</div><div class="col-sm-10"><input type="text" name="careers_salary" class="form-control" /></div>
                <div class="col-sm-2">기타사항:</div><div class="col-sm-10"><input type="text" name="careers_etc" class="form-control" /></div>
                <p>&nbsp;</p>
                <textarea id="editor" name="content" ></textarea>
                <br />
                <p><button class="btn btn-primary">Post</button></p>
            </div>
        </div>
    </div>
    </form>

    <script>
    $(document).ready(function(){
        $("#careers_occupation1").change(function(){
            $.ajax({
                url: "./ajax_cat",
                type: "post",
                data:{"id":$("#careers_occupation1").val()},
                success: function(result){
                    $("#careers_occupation2").html(result);
                }
            });
        });
    });
    </script>
<script>
tinymce.init({
  selector: '#editor',
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste imagetools wordcount"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table",
  // enable title field in the Image dialog
  image_title: true, 
  // enable automatic uploads of images represented by blob or data URIs
  automatic_uploads: true,
  // add custom filepicker only to Image dialog
  file_picker_types: 'image',
  file_picker_callback: function(cb, value, meta) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.onchange = function() {
      var file = this.files[0];
      var reader = new FileReader();
      
      reader.onload = function () {
        var id = 'blobid' + (new Date()).getTime();
        var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(',')[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);

        // call the callback and populate the Title field with the file name
        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };
    
    input.click();
  }
});
</script>
</body>
</html>