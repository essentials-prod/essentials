
(function(){
  var overlay=document.getElementById('detailImageOverlay');
  var large=document.getElementById('detailImageLarge');
  var close=document.getElementById('detailImageClose');
  var previousFocus=null;
  if(!overlay || !large || !close) return;
  function hide(){overlay.hidden=true;large.removeAttribute('src');document.body.style.overflow='';if(previousFocus)previousFocus.focus();}
  document.querySelectorAll('[data-detail-photo-open]').forEach(function(button){
    button.addEventListener('click',function(){
      var thumbnail=button.querySelector('img');if(!thumbnail)return;
      previousFocus=button;large.src=thumbnail.currentSrc||thumbnail.src;large.alt=thumbnail.alt;
      overlay.hidden=false;document.body.style.overflow='hidden';close.focus();
    });
  });
  close.addEventListener('click',hide);
  overlay.addEventListener('click',function(event){if(event.target===overlay)hide();});
  document.addEventListener('keydown',function(event){if(overlay.hidden)return;if(event.key==='Escape')hide();if(event.key==='Tab'){event.preventDefault();close.focus();}});
})();
