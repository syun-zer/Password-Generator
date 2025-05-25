'use strict';

{
  function showPassword() {
    const result = document.getElementById('result');
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!#$%&()';
    let password = '';
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked) {
      seed += numbers;
    }

    if (symbolsCheckbox.checked) {
      seed += symbols;
    }

    for (let i = 0; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = password;
  }

  const slider = document.getElementById('slider');
  const btn = document.getElementById('btn');

  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');

    passwordLength.textContent = slider.value;
  });

  btn.addEventListener('click', () => {
    showPassword();
  });

  showPassword();
  // 独自の機能としてコピー機能を追加
  document.getElementById('copy').addEventListener('click', async () => {
  const text = document.getElementById('result').textContent;
  try {
    await navigator.clipboard.writeText(text);
    alert('コピーしました！');
  } catch (err) {
    alert('コピーに失敗しました');
  }
});
// ここまで
}
