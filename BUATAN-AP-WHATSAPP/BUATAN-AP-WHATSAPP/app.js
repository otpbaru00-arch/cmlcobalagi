
const screens = [...document.querySelectorAll('.screen')];
const steps = [...document.querySelectorAll('.step')];
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

const session = crypto.getRandomValues(new Uint32Array(4))
  .reduce((a,b)=>a+b.toString(16).padStart(8,'0'),'')
  .match(/.{1,8}/g).join('-');
document.getElementById('sessionId').textContent = session;

function demoId(prefix){
  const n = Math.floor(100000000000000 + Math.random()*899999999999999);
  return `${prefix}-${n}`;
}

function render(){
  screens.forEach((el,i)=>el.classList.toggle('active',i===current));
  steps.forEach((el,i)=>el.classList.toggle('active',i===current));

  if(current===0){
    backBtn.textContent = 'Batal';
    nextBtn.textContent = 'Lanjutkan';
  }else if(current===screens.length-1){
    backBtn.textContent = 'Kembali';
    nextBtn.textContent = 'Selesai';
  }else{
    backBtn.textContent = 'Kembali';
    nextBtn.textContent = 'Berikutnya';
  }
}

backBtn.addEventListener('click',()=>{
  if(current===0){
    alert('Demo onboarding dibatalkan.');
    return;
  }
  current--;
  render();
});

nextBtn.addEventListener('click',()=>{
  if(current < screens.length-1){
    current++;

    if(current===3){
      const business = document.getElementById('businessName').value || 'Buatan AP';
      const portfolio = document.getElementById('portfolio').value || '—';
      document.getElementById('sumBusiness').textContent = business;
      document.getElementById('sumPortfolio').textContent = portfolio;
      document.getElementById('sumWabaId').textContent = demoId('WABA');
      document.getElementById('sumPhoneId').textContent = demoId('PHONE');
    }

    render();
  }else{
    alert('Simulasi selesai. Untuk koneksi nyata, integrasikan Meta Embedded Signup resmi pada backend Anda.');
  }
});

document.getElementById('copyEndpoint').addEventListener('click', async ()=>{
  const txt = 'POST /api/demo/messages';
  try{
    await navigator.clipboard.writeText(txt);
    alert('Endpoint simulasi disalin.');
  }catch(e){
    alert(txt);
  }
});

render();
