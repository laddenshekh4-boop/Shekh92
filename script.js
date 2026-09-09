const products = [
 {type:"laptop",brand:"Dell",name:"Latitude 5490",price:14999,old:21999,discount:"32% OFF",condition:"Good • Tested",img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85"},
 {type:"laptop",brand:"Apple",name:"MacBook Air",price:28999,old:39999,discount:"27% OFF",condition:"Very Good • Tested",img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85"},
 {type:"phone",brand:"Samsung",name:"Galaxy Smartphone",price:12999,old:17999,discount:"28% OFF",condition:"Excellent • Tested",img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85"},
 {type:"phone",brand:"Apple",name:"iPhone Series",price:24999,old:32999,discount:"24% OFF",condition:"Very Good • Tested",img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85"},
 {type:"laptop",brand:"HP",name:"ProBook Business",price:11999,old:18999,discount:"37% OFF",condition:"Good • Tested",img:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=85"},
 {type:"phone",brand:"OnePlus",name:"Nord Series",price:9999,old:14999,discount:"33% OFF",condition:"Good • Tested",img:"https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=85"},
 {type:"laptop",brand:"Lenovo",name:"ThinkPad",price:16999,old:23999,discount:"29% OFF",condition:"Very Good • Tested",img:"https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=85"},
 {type:"phone",brand:"Google",name:"Pixel Series",price:17999,old:24999,discount:"28% OFF",condition:"Excellent • Tested",img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85"}
];
let current="all";
function render(){
 const q=(document.getElementById("searchInput").value||"").toLowerCase();
 const list=products.filter(p=>(current==="all"||p.type===current)&&(`${p.brand} ${p.name} ${p.type}`).toLowerCase().includes(q));
 document.getElementById("products").innerHTML=list.map(p=>`
 <article class="product">
  <div class="photo"><span class="badge">${p.discount}</span><img loading="lazy" src="${p.img}" alt="${p.brand} ${p.name}"></div>
  <div class="info"><div class="brand">${p.brand}</div><h3>${p.name}</h3><div class="condition">✓ ${p.condition}</div>
  <div class="price"><strong>₹${p.price.toLocaleString("en-IN")}</strong><span class="old">₹${p.old.toLocaleString("en-IN")}</span></div>
  <a class="buy" target="_blank" href="https://wa.me/919934307099?text=${encodeURIComponent("Hi SastaKhojo, I am interested in "+p.brand+" "+p.name+" for ₹"+p.price.toLocaleString("en-IN"))}">Enquire on WhatsApp</a></div>
 </article>`).join("");
 document.getElementById("empty").hidden=list.length!==0;
}
function filterCategory(type){
 current=type;
 document.querySelectorAll(".category").forEach((x,i)=>x.classList.toggle("active",["all","laptop","phone"][i]===type));
 document.getElementById("deals").scrollIntoView({behavior:"smooth"});
 render();
}
function toggleMenu(){document.querySelector(".nav nav").classList.toggle("show")}
document.getElementById("searchInput").addEventListener("input",render);
render();
