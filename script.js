
$(document).ready(function () {
  var txt0 = "【欢迎使用GalSceneGenerator-JS】";
  var txt1 = "请在上方文本框内输入文本，暂时不支持自动换行。";
  var txt2 = "使用“选择文件”来选择背景图片。";
  var txt3 = "如果不填写说话人名，该行会自动隐藏。";

  var canvas = document.getElementById('myCanvas');
  var cxt = canvas.getContext('2d');
  var img;

  cxt.fillStyle = '#cccccc';
  cxt.fillRect(0, 0, canvas.width, canvas.height);
  drawDialogText();

  //读取本地文件
  var inputOne = document.getElementById('fileOne');
  inputOne.onchange = function () {
    var fileList = inputOne.files;
    var file = fileList[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      dataUrl = reader.result;
      //加载图片
      img = new Image();
      img.onload = function () {
        drawAll(img);
      }
      img.src = dataUrl;
    }
  }

  $('#save').click(function () {
    var w = window.open(canvas.toDataURL("image/jpeg"), "smallwin", "width=1280,height=720");
  });

  $('#gen').click(function () {
    txt1 = $("#text1").val();
    txt2 = $("#text2").val();
    txt3 = $("#text3").val();
    txt0 = $("#text0").val() !== "" ? "【" + $("#text0").val() + "】" : "";
    drawAll();
  });

  $('#color').on("input propertychange", function () {
    var re = /^[\dabcdef]{6}$/;
    if (!re.test(this.value)) {
      $(".preview").text('颜色值非法');
      $(".preview").css("color", "black");
      return;
    }
    $(".preview").text('颜色预览：■');
    $(".preview").css("color", "#" + this.value.slice(0, 6));
  });

  $('#trans').on("input propertychange", function () {
    try {
      test = parseInt(this.value);
      if (this.value === "" || test < 0 || test > 255) throw new error();
    } catch (err) {
      $(".preview2").text('不透明度值非法');
      return;
    }
    $(".preview2").text('');
  });

  function drawAll() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    cxt.shadowColor = "#ffffff00";
    try {
      var s = canvas.width / img.width > canvas.height / img.height ? canvas.width / img.width : canvas.height / img.height;
      var w = s * img.width;
      var h = s * img.height;
      var x = (canvas.width - w) / 2;
      var y = (canvas.height - h) / 2;
      cxt.drawImage(img, x, y, w, h);
    } catch (err) {
      cxt.fillStyle = '#cccccc';
      cxt.fillRect(0, 0, canvas.width, canvas.height);
    }
    drawDialogText();
  }

  function drawDialogText() {
    trans = parseInt($('#trans').val()).toString(16);
    if (trans.length === 1) trans = "0" + trans;
    rgba = $("#color").val() + trans;

    drawHanasakiDialog(rgba);
    drawHanasakiText();

    $(".preview").text('');
  }

  function drawHanasakiDialog(color) {
    x = 246;
    y = 551;
    width = 815;
    height = 125;
    radius = 15;
    cxt.beginPath();
    cxt.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
    cxt.lineTo(width - radius + x, y);
    cxt.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
    cxt.lineTo(width + x, height + y - radius);
    cxt.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
    cxt.lineTo(radius + x, height + y);
    cxt.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
    cxt.closePath();

    cxt.fillStyle = '#' + color;
    cxt.strokeStyle = '#ffffff' + color.slice(6, 8);
    cxt.shadowColor = "#ffffff00";
    cxt.lineWidth = '2';

    cxt.moveTo(261, 594);
    cxt.lineTo(1041, 594);
    cxt.moveTo(261, 634);
    cxt.lineTo(1041, 634);
    cxt.fill();
    cxt.stroke();

    img1 = new Image();
    img1.onload = function () { cxt.drawImage(img1, 1003, 626); }
    img1.src = "sources/hanasaki-suzu10.png";
  }

  function drawHanasakiText() {
    cxt.shadowOffsetY = 2;
    cxt.shadowOffsetX = 2;
    cxt.shadowBlur = 2;
    cxt.shadowColor = "#4c0000";
    cxt.strokeStyle = '#4c0000';
    cxt.lineWidth = '3';
    cxt.fillStyle = '#ffffff';
    cxt.font = '24px 源ノ角ゴシック';
    cxt.textBaseline = 'top';
    cxt.strokeText(txt1, 295, 562);
    cxt.fillText(txt1, 295, 562);
    cxt.strokeText(txt2, 295, 602);
    cxt.fillText(txt2, 295, 602);
    cxt.strokeText(txt3, 295, 642);
    cxt.fillText(txt3, 295, 642);

    cxt.shadowColor = "#00000000";
    img2 = new Image();
    img2.onload = function () { cxt.drawImage(img2, 0, 0); }
    img2.src = "sources/hanasaki-toolbar.png";

    if (txt0 !== "") {
      cxt.shadowColor = "#4c0000";
      cxt.strokeText(txt0, 251, 521);
      cxt.fillText(txt0, 251, 521);
      cxt.shadowColor = "#00000000";
      img3 = new Image();
      img3.onload = function () { cxt.drawImage(img3, 1198, 696); }
      img3.src = "sources/hanasaki-voice0.png";
    }
  }
});
