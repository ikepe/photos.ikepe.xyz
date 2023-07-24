lightGallery(document.getElementById('gallery'), {
  plugins: [lgZoom, lgThumbnail],
  thumbnail:true, //サムネイル機能を使う場合
  download: false,  // ダウンロードボタンを非表示にする
  licenseKey: 'your_license_key',
  speed: 500,
  // ... other settings
});