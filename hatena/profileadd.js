// アイコンフォント(フリーのみ）
// https://johobase.com/font-awesome-icon-font-list-free/
<script>
window.onload = function() {
   const ProfileHTML = '<div class="addprof">'+
    '<div  class="addprof-title">Profile</div>'+
    '<div class="addprof-body">'+
        '<div class="addprof-left"><img src="https://pbs.twimg.com/profile_images/1600138967382626304/lMCKKzBM_400x400.jpg" class="addprof-icon" alt="hujisatoのアイコン"><p class="addprof-id"><a href="https://huzisato.hateblo.jp/about">hatema id:huzisato</a></p></div>'+
        '<div class="addprof-right">'+
            '<div class="addprof-description">ソシャゲしてる鼻炎のぬこ。気が向いたときに絵をかいたり曲を作ったり。</div> '+
            '<div class="addprof-sns">'+
              '<a href="https://twitter.com/huzisato" target="_blank" alt="twitter"><i class="blogicon-twitter"></i></a>'+
              '<a href="https://nujisato.github.io/nujilog/" target="_blank" alt="Github"><i class="blogicon-gist"></i></a>'+
              '<a href="https://www.youtube.com/@nujisato" target="_blank" alt="Youtube"><i class="blogicon-youtube"></i></a>'+
              '<a href="https://huzisato.hateblo.jp/about" target="_blank" alt="はてなブログ"><i class="blogicon-hatenablog"></i></a>'+
              '<a href="https://misskey.io/@nujisato" target="_blank" alt="Misskey.io"><img src="https://nujisato.github.io/nujilog/hatena/misskey.png"></a>'+
            '</div>'+
            '<a href="https://www.amazon.jp/hz/wishlist/ls/3DWOO91EYTV9E?ref_=wl_share" target="_blank" alt="Amazon"><div class="addprof-banner"><i class="fab fa-amazon"></i>amazon ほしいものリスト</div></a>'+
            '<a href="https://huzisato.notion.site/wiki-c0068d7b0d3240389702acf3cb2b5a3a" target="_blank" alt="Notion"><div class="addprof-banner"><i class="fas fa-book-open"></i>Notion 過去の作品まとめ 音楽/絵/創作</div></a>'+
        '</div>'+
    '</div>'+
    '</div>';
   document.querySelector('.entry-content').insertAdjacentHTML('beforeend', ProfileHTML);
};
</script>
