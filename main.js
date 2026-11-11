// mobilní menu
(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('menu');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});
    nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});}
  // rok v patičce
  var y=document.querySelector('[data-year]');if(y)y.textContent=new Date().getFullYear();
  // předvyplnění služby ve formuláři (kontakt.html?sluzba=...)
  var sel=document.getElementById('sluzba');
  if(sel){var m=location.search.match(/sluzba=([a-z0-9-]+)/);if(m){for(var i=0;i<sel.options.length;i++){if(sel.options[i].value===m[1]){sel.selectedIndex=i;}}}}
})();
