// ── CONFIG ──────────────────────────────────────────────
const SIMILAR_CHARS  = new Set('O0lI1');
const CHAR_SETS = {
  upper  : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower  : 'abcdefghijklmnopqrstuvwxyz',
  nums   : '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}|;:,.<>?',
};
const MAX_HISTORY    = 10;
const TOAST_DURATION = 2000;


// ── STATE ────────────────────────────────────────────────
let currentPwd = '';
let isHidden = true;
let history  =[];

const pwdBox       = document.getElementById('pwdBox');
const eyeBtn       = document.getElementById('eyeBtn');
const copyBtn      = document.getElementById('copyBtn');
const regenIconBtn = document.getElementById('regenIconBtn');
const regenBtn     = document.getElementById('regenBtn');
const lenSlider    = document.getElementById('lenSlider');
const lenBadge     = document.getElementById('lenBadge');
const strengthFill = document.getElementById('strengthFill');
const strengthBadge= document.getElementById('strengthBadge');
const entropyLabel = document.getElementById('entropyLabel');
const historyList  = document.getElementById('historyList');
const emptyMsg     = document.getElementById('emptyMsg');
const clearBtn     = document.getElementById('clearBtn');
const toast        = document.getElementById('toast');
const togglesGrid  = document.getElementById('togglesGrid');

const chk = {
 upper   : document.getElementById('chkUpper'),
  lower   : document.getElementById('chkLower'),
  nums    : document.getElementById('chkNums'),
  symbols : document.getElementById('chkSymbols'),
  exclude : document.getElementById('chkExclude'),
  norepeat: document.getElementById('chkNoRepeat'),
};
// ── CORE: BUILD CHARSET ───────────────────────────────────
 function buildCharset(){
    let pool = '';
    if (chk.upper.checked) pool += CHAR_SETS.upper;
    if (chk.lower.checked) pool += CHAR_SETS.lower;
    if (chk.nums.checked) pool += CHAR_SETS.nums;
    if (chk.symbols.checked) pool += CHAR_SETS.symbols;

    if (chk.exclude.checked) {
pool = [...pool].filter(c => !SIMILAR_CHARS.has(c)).join('');

    }
return pool;
 }
// ── CORE: GENERATE PASSWORD ──────────────────────────────
function generatePassword() {
const len     = parseInt(lenSlider.value);
const noRepeat  = chk.norepeat.checked;
const charset = buildCharset() ;


  if (!charset) {
 showError('select at least one character type');
return;
}
if (noRepeat && charset.length < len) {
showError(`Need at least ${len} unique chars
 — shorten length or disable "No repeating"` );
return;
}
const unique =[...new Set(charset)];
const pool = noRepeat ? [...unique] : unique;
let pwd ='';
for (let i = 0; i < len; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    pwd += pool[idx];
    if (noRepeat) pool.splice(idx, 1);
  }
  

currentPwd = pwd;
isHidden = true;

renderPassword();
renderStrength(pwd, unique.length);
pushHistory(pwd);
}
function showError(msg) {
pwdBox.textContent = msg;
pwdBox.classList.remove('hidden-pwd');
}
// ── RENDER: PASSWORD BOX ──────────────────────────────────
function renderPassword() {
pwdBox.classList.toggle('hidden-pwd', isHidden);
pwdBox.textContent = isHidden ? '•'.repeat(currentPwd.length) : currentPwd;

 // swap eye icon
const eyeSvg = eyeBtn.querySelector('svg');
eyeSvg.innerHTML =isHidden
 ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
    : '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';

  // pop animation
  pwdBox.classList.remove('pop');
  void pwdBox.offsetWidth;       // reflow trigger
  pwdBox.classList.add('pop');
}


