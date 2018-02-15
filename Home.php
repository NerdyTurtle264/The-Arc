<!DOCTYPE html>
<html>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<body>
<?php include("includes/navigation.html");?>

<!-- Beginning of actual content -->
<div class="w3-row">
  <div class="w3-content">
    <!-- Most content for the page will be put in here in a <div> tag -->
    <img src="http://www.thearcclarion.org/uploads/1/3/1/3/13139352/1743726_orig.png" class="w3-round w3-image" alt="The Arc of Clarion and Venango" style="width:100%"></img>
    <div class="w3-center">
      <h1>The Arc Mission Statement</h1>
      <p>The Arc of Clarion and Venango Counties provides a variety of services and programs designed to support people who experience disabilities. The Arc advocates for the rights and full participation of all children and adults with intellectual and
        developmental disabilities.</p>
    </div>
  </div>
</div>
<hr>
<div class="w3-row">
  <div class="w3-content">
    <div class="w3-center">
      <div class="w3-quarter">
        <h2>Clarion County</h2>
      </div>
      <div class="w3-quarter">
        <p>22 S. 2nd Ave.<br> Clarion, PA 16214<br> (814) 226-7033</p>
      </div>
      <div class="w3-half">
        <iframe style="width:100%" src="https://www.google.com/maps/d/embed?mid=105Xsq7fszd_iKtYBqc63yiq7HQh9SdYP">
      </iframe>
      </div>
    </div>
    <div class="w3-center">
      <div class="w3-quarter">
        <h2>Venango County</h2>
      </div>
      <div class="w3-quarter">
        <p>3190 State RT. 257<br> Seneca, PA 16346<br> (814) 670-0334</p>
      </div>
      <div class="w3-half">
        <iframe style="width:100%" src="https://www.google.com/maps/d/embed?mid=1wyN2BASjE1rLmbYmaP5ScTepMGUCT4Lv">
        </iframe>
      </div>
    </div>
  </div>
</div>
<hr>
<!-- Ending of content -->

<?php include("includes/footer.html");?>
  
<script src="myscripts.js"></script>
</body>
</html>
