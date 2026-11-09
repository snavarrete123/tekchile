let S;
function load(){try{const r=localStorage.getItem(KEY);if(r)return JSON.parse(r)}catch(e){}return JSON.parse(JSON.stringify(seed))}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
S=load();
const $=id=>document.getElementById(id);
const clp=n=>'$'+Number(n).toLocaleString('es-CL');
const st=p=>p.stock<=0?'out':p.stock<p.min?'low':'ok';
const lab={ok:'En stock',low:'Stock bajo',out:'Agotado'};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
$('fecha').textContent=new Date().toLocaleDateString('es-CL',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

function render(){
 const P=S.products;
 const val=P.reduce((a,p)=>a+p.price*p.stock,0);
 const bajo=P.filter(p=>st(p)!=='ok').length;
 $('stats').innerHTML=`<div class="stat"><b>${P.length}</b><small>Productos</small></div><div class="stat"><b>${P.reduce((a,p)=>a+p.stock,0)}</b><small>Unidades en stock</small></div><div class="stat"><b>${clp(val)}</b><small>Valor del inventario</small></div><div class="stat ${bajo?'alert':''}"><b>${bajo}</b><small>Con stock bajo o agotado</small></div>`;
 const cats=[...new Set(P.map(p=>p.cat))].sort();
 const cur=$('fc').value;
 $('fc').innerHTML='<option value="">Todas las categorías</option>'+cats.map(c=>`<option ${c===cur?'selected':''}>${esc(c)}</option>`).join('');
 $('cats').innerHTML=cats.map(c=>`<option value="${esc(c)}">`).join('');
 const q=$('q').value.toLowerCase(),fc=$('fc').value,fe=$('fe').value;
 const L=P.filter(p=>(!q||p.name.toLowerCase().includes(q)||p.sku.toLowerCase().includes(q))&&(!fc||p.cat===fc)&&(!fe||st(p)===fe));
 $('rows').innerHTML=L.length?L.map(p=>`<tr><td>${esc(p.sku)}</td><td>${esc(p.name)}</td><td>${esc(p.cat)}</td><td class="num">${clp(p.price)}</td><td class="num">${p.stock}</td><td><span class="tag ${st(p)}">${lab[st(p)]}</span></td><td><div class="acts"><button class="btn" data-a="mov" data-id="${p.id}">Stock</button><button class="btn" data-a="edit" data-id="${p.id}">Editar</button><button class="btn danger" data-a="del" data-id="${p.id}">Eliminar</button></div></td></tr>`).join(''):'<tr><td colspan="7" class="empty">No hay productos con estos filtros. Prueba con otra búsqueda o agrega un producto nuevo.</td></tr>';
 $('mrows').innerHTML=S.moves.length?S.moves.slice().reverse().map(m=>`<tr><td>${new Date(m.d).toLocaleString('es-CL',{dateStyle:'short',timeStyle:'short'})}</td><td>${esc(m.name)}</td><td><span class="tag ${m.t==='in'?'ok':'low'}">${m.t==='in'?'Entrada':'Salida'}</span></td><td class="num">${m.q}</td><td>${esc(m.n||'')}</td></tr>`).join(''):'<tr><td colspan="5" class="empty">Aún no hay movimientos. Usa el botón Stock en el catálogo para registrar entradas y salidas.</td></tr>';
}
let editId=null,movId=null;
$('nuevo').onclick=()=>{editId=null;$('fp').reset();$('dpt').textContent='Agregar producto';$('pm').value=5;$('dp').showModal()};
$('cp').onclick=()=>$('dp').close();$('cm').onclick=()=>$('dm').close();
$('fp').onsubmit=()=>{
 const o={name:$('pn').value.trim(),sku:$('ps').value.trim(),cat:$('pc').value.trim(),price:+$('pp').value,stock:+$('pst').value,min:+$('pm').value};
 if(editId){Object.assign(S.products.find(p=>p.id===editId),o);toast('Producto actualizado')}
 else{S.products.push({id:S.nid++,...o});toast('Producto agregado')}
 save();render();
};
$('fm').onsubmit=()=>{
 const p=S.products.find(x=>x.id===movId),t=$('mt').value,q=+$('mq').value;
 if(t==='out'&&q>p.stock){toast('No hay stock suficiente: quedan '+p.stock);return}
 p.stock+=t==='in'?q:-q;
 S.moves.push({d:Date.now(),name:p.name,t,q,n:$('mn').value.trim()});
 save();render();toast('Movimiento registrado');
};
$('rows').onclick=e=>{
 const b=e.target.closest('button');if(!b)return;
 const id=+b.dataset.id,p=S.products.find(x=>x.id===id);
 if(b.dataset.a==='edit'){editId=id;$('dpt').textContent='Editar producto';$('pn').value=p.name;$('ps').value=p.sku;$('pc').value=p.cat;$('pp').value=p.price;$('pst').value=p.stock;$('pm').value=p.min;$('dp').showModal()}
 if(b.dataset.a==='mov'){movId=id;$('fm').reset();$('dmt').textContent=p.name;$('dm').showModal()}
 if(b.dataset.a==='del'&&confirm('¿Eliminar "'+p.name+'" del catálogo?')){S.products=S.products.filter(x=>x.id!==id);save();render();toast('Producto eliminado')}
};
['q','fc','fe'].forEach(i=>$(i).addEventListener('input',render));
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('nav button').forEach(x=>x.setAttribute('aria-selected',x===b));
 $('cat').hidden=b.dataset.t!=='cat';$('mov').hidden=b.dataset.t!=='mov';
});
render();
const U={email:'admin@tekchile.cl',pass:'tekchile',name:'Administrador'};
let cur=null;try{cur=sessionStorage.getItem('tk-user')}catch(e){}
function gate(){$('login').hidden=!!cur;$('who').textContent=cur||''}
$('fl').onsubmit=e=>{e.preventDefault();if($('le').value.trim().toLowerCase()===U.email&&$('lp').value===U.pass){cur=U.name;try{sessionStorage.setItem('tk-user',cur)}catch(x){}$('lerr').textContent='';gate()}else{$('lerr').textContent='Correo o contraseña incorrectos.'}};
$('salir').onclick=()=>{cur=null;try{sessionStorage.removeItem('tk-user')}catch(x){}$('fl').reset();gate()};
gate();
