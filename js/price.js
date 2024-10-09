// スクロールフェードイン
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var elements = document.querySelectorAll('.service__item');
        elements.forEach(function(element) {
            var pos = element.offsetTop;
            var scroll = window.scrollY;
            var windowHeight = window.innerHeight;
            if (scroll > pos - windowHeight) {
                element.classList.add('scrolled');
            }
        });
    });
  });
  
  // ハンバーガーメニュー
    const hamburger = document.querySelector('.hamburger');
    const span = document.querySelectorAll('.hamburger__item');
    const nav = document.querySelector(".hamburger__navigation");
  
  
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle("open");
        nav.classList.toggle("add");
    });
  
     // fadein

  window.addEventListener('scroll', function(){
    // スクロール量を取得
    const scroll = window.scrollY;
    // 画面の高さを取得
    const windowHeight = window.innerHeight;
    // すべての要素を取得
    const boxes = document.querySelectorAll('.flow__list');
  
    boxes.forEach(function(box) {
      // boxまでの高さを取得
      const distanceToBox = box.offsetTop;
      // 下記条件が成り立つときだけboxにis-activeクラスを付与する
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('is-active');
      }
    });
  });