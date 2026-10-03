// Demo domain checker: fake availability based on name length (replace with a real registrar API).
const dom=document.getElementById('dom'),out=document.getElementById('result');
function check(){
  const name=dom.value.trim().toLowerCase().replace(/[^a-z0-9-]/g,'');
  const tld=document.querySelector('input[name=tld]:checked').value;
  if(!name){out.className='';out.textContent='Enter a domain name first.';return}
  const taken=['google','facebook','amazon','test','example'].includes(name)||name.length<4;
  out.className=taken?'no':'ok';
  out.textContent=taken?`${name}${tld} is taken. Try another name.`:`${name}${tld} is available.`;
}
document.getElementById('chk').onclick=check;
dom.addEventListener('keydown',e=>{if(e.key==='Enter')check()});
document.querySelectorAll('[data-plan]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('plan').value=a.dataset.plan}));
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('msg').textContent='Request sent. We will email you within one working day. (Demo only)';
  e.target.reset();
});
