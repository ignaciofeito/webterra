(()=>{var t={896:()=>{const t=document.querySelector("#carrito"),e=document.querySelector("#lista-productos");$(t).on("click",(function(t){if(t.target.classList.contains("borrar-producto")){const e=t.target.getAttribute("data-id");r=r.filter((t=>t.id!==e)),a(),n()}}));const o=document.querySelector("#listado-carrito tbody");document.querySelector("#carrito-checkout tbody");let r=[];function a(){c(),r.forEach((t=>{const{nombre:e,imagen:r,precio:a,cantidad:n,id:c}=t,i=document.createElement("tr");i.innerHTML=`\n\t\t\t<td>\n\t\t\t\t<img class="img-carrito" src="${r}" width=100>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t${e}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t${a}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t${n}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<a href="#" class="borrar-producto" data-id="${c}"> X </a>\n\t\t\t</td>\n\t\t\t\n\t\t`,o.appendChild(i)})),n()}function n(){localStorage.setItem("carrito",JSON.stringify(r))}function c(){for(;o.firstChild;)o.removeChild(o.firstChild)}document.addEventListener("DOMContentLoaded",(()=>{r=JSON.parse(localStorage.getItem("carrito"))||[],a()})),$("#vaciar-carrito").click((function(){c(),r=[],n()})),$("#btn-buy").click((function(){c(),r=[],n()})),$(e).on("click",(function(t){t.preventDefault(),t.target.classList.contains("agregar-carrito")&&function(t){const e={imagen:t.querySelector("img").src,nombre:t.querySelector(".nombre").textContent,precio:t.querySelector(".precio").textContent,id:t.querySelector("button").getAttribute("data-id"),cantidad:1};if(r.some((t=>t.id===e.id))){const t=r.map((t=>t.id===e.id?(t.cantidad++,t.precio="$"+Number(e.precio.slice(1))*t.cantidad,t):t));r=[...t]}else r=[...r,e];a()}(t.target.parentElement.parentElement.parentElement)}));const i=[];document.addEventListener("DOMContentLoaded",(()=>{r.forEach((t=>{var{nombre:e,imagen:o,precio:r,cantidad:a,id:n}=t;r=r.replace("$",""),i.push(parseInt(r));var c,s=0;for(let t of i)s+=t;$("#totalCarrito").html(s),c=s,$("#tres-cuotas").html("3 cuotas sin interés de $ "+parseInt(c/3)),$("#seis-cuotas").html("6 cuotas sin interés de $ "+parseInt(c/6)),$("#doce-cuotas").html("12 cuotas sin interés de $ "+parseInt(c/12))}))}))},894:()=>{$("body").on("submit",".finalizarCompraForm",(function(e){let o=e.target[0].value,r=e.target[1].value,a=e.target[2].value,n=e.target[3].value.replaceAll("_"," Cuotas de: $"),c=e.target[4].value,i=e.target[5].value,s=e.target[6].value,d=e.target[7].value,l=e.target[8].value;""==o||""==r||""==a||""==c||""==i||""==s||""==d||""==l?alert("No ingresaste los datos solicitados! Intentalo de nuevo completando todos los campos"):$.ajax({url:"https://jsonplaceholder.typicode.com/posts",type:"POST",data:{nombre:o,email:r,tel:a,cuotas:n,creditCardNumber:c,creditCardName:i,creditCardCVC:s,creditCardDesde:d,credictCardHasta:l},beforeSend:function(){$("#tajeta-checkout").hide()},success:function(e){t(e)}})}));let t=t=>{let e=t.creditCardNumber.substr(16),o=`\n        <div class="col-md-12">\n            <h1>¡Gracias por elegirnos ${t.nombre}!</h1>\n            <p><strong>El pago fue realizado con éxito con la tarjeta número: **** - **** - **** - ${e}</strong></p>\n            <p>Corroborá las instrucciones de retiro en tu correo: <strong>${t.email}</strong></p>\n        </div>\n    `;$("#card-success").append(o),$("#card-success").show()}},169:()=>{function t(t){alert("Bienvenido "+t+"!")}var e=sessionStorage.getItem("saludado")||"";null==localStorage.nombre?$(window).on("load",(function(){$("#modalRegistro").modal("show")})):"yes"!=e&&(t(localStorage.nombre),sessionStorage.setItem("saludado","yes")),$("#btnRegistro").on("click",(function(){var e=document.querySelector("#nombreUsuario"),o=document.querySelector("#emailUsuario");!function(t,e){localStorage.nombre=t,localStorage.mail=e}(e.value,o.value),t(e.value)}))}},e={};function o(r){var a=e[r];if(void 0!==a)return a.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(169),o(896),o(894);class t{constructor(t,e,o,r){this.id=t,this.nombre=e,this.precio=parseFloat(o),this.stock=parseInt(r)}}const e=[];$(document).ready((()=>{$.getJSON("productos.json",(function(o){$.each(o.productos,(function(){new t(`${this.id}`,`${this.nombre}`,`${this.precio}`,`${this.stock}`),e.push(this)})),console.log(e)}))}))})()})();