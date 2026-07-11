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
 function buildCharest() {






    
 }
