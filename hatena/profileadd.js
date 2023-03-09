// アイコンフォント(フリーのみ）
// https://johobase.com/font-awesome-icon-font-list-free/

window.onload = function() {
   const ProfileHTML = '<div class="entry-footer-profile">'+
    '<div  class="entry-footer-profile-title">Profile</div>'+
    '<div class="entry-footer-profile-body">'+
        '<div class="entry-footer-profile-left"><img src="https://pbs.twimg.com/profile_images/1600138967382626304/lMCKKzBM_400x400.jpg" class="entry-footer-profile-icon" alt="hujisatoのアイコン"><p class="entry-footer-profile-id"><a href="https://huzisato.hateblo.jp/about">id:huzisato</a></p></div>'+
        '<div class="entry-footer-profile-right">'+
            '<div class="entry-footer-profile-description">ソシャゲしてる鼻炎のぬこ。気が向いたときに絵をかいたり曲を作ったり。</div> '+
            '<div class="entry-footer-profile-sns">'+
              '<a href="https://twitter.com/huzisato" target="_blank" alt="twitter"><i class="blogicon-twitter" style="color:#1DA1F2;"></i></a>'+
              '<a href="https://github.com/nujisato/nujilog/" target="_blank" alt="Github"><i class="blogicon-gist" style="color:#000;"></i></a>'+
              '<a href="https://www.youtube.com/@nujisato" target="_blank" alt="Youtube"><i class="blogicon-youtube" style="color:#FF0000;"></i></a>'+
              '<a href="https://huzisato.hateblo.jp/about" target="_blank" alt="はてなブログ"><i class="blogicon-hatenablog" style="color:#999;"></i></a>'+
              '<a href="https://misskey.io/@nujisato" target="_blank" alt="Misskey.io"><i><img src="https://nujisato.github.io/nujilog/hatena/misskey.png" style="width:30px;"></i></a>'+
            '</div>'+
            '<a href="https://www.amazon.jp/hz/wishlist/ls/3DWOO91EYTV9E?ref_=wl_share" target="_blank" alt="Amazon"><div class="entry-footer-profile-banner"><i class="fab fa-amazon"></i>amazon ほしいものリスト</div></a>'+
            '<a href="https://huzisato.notion.site/wiki-c0068d7b0d3240389702acf3cb2b5a3a" target="_blank" alt="Notion"><div class="entry-footer-profile-banner"><i class="fas fa-book-open"></i>Notion 過去の作品まとめ 音楽/絵/創作</div></a>'+
        '</div>'+
    '</div>'+
    '</div>';
   document.querySelector('.entry-content').insertAdjacentHTML('beforeend', ProfileHTML);
};
