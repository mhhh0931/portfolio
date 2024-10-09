new Splide(".splide",{
  type:"loop",
  perPage:3,
  gap:48,
  pagenation:true,
  autoHeight:true,
  speed: 1000, 
  focus  : "center",
  updateOnMove: true, 

  classes: {
    pagination: "splide__pagination your-class-pagination",
    page: "splide__pagination__page your-class-page",
  },
  
}).mount();


// スムーススクロール
//href属性の「#」で始まるリンクを全て取得
const links = document.querySelectorAll('a[href^="#"]');
//取得したリンクを1つずつ処理を実行する
links.forEach((link) =>{
　//リンクをクリックしたら処理を実行する
  link.addEventListener('click', (e) => {
　　//リンクイベントをキャンセルする
    e.preventDefault();
    //クリックしたリンクのhref属性を取得
    const href = link.getAttribute('href');
　　//目的のセクションを取得
    const targetSection = document.querySelector(href);
    //画面の上からセクションのtop位置までの垂直方向の距離
    const sectionTop = targetSection.getBoundingClientRect().top;
　　//現在位置を取得
    const currentPos = window.scrollY;
　　//ヘッダーの高さ
    const gap = 80;
    //現在位置から目的のsectionまでのスクロール量
    const target = sectionTop + currentPos - gap;
　　//特定の位置までスクロールさせる
    window.scrollTo({
      top: target,　　　　　//目的の位置のY座標を指定
      behavior: 'smooth',　//スクロールの動きを指定
    });
  });
});


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


 