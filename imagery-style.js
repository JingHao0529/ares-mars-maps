(function(root){
'use strict';
function filter(base,tint){
 if(base!=='ctx')return 'none';
 return tint?'grayscale(1) sepia(.9) saturate(1.65) hue-rotate(-22deg) brightness(.87) contrast(1.04)':'grayscale(1) brightness(.87) contrast(1.04)';
}
const api={filter};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.MarsImagery=api;
})(typeof globalThis!=='undefined'?globalThis:this);

