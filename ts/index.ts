import { HitAndBlow } from './class/hitandblow';
import { mainPage } from './main.page';

const hitandblow = new HitAndBlow();
let list: string[] = [];

const app = document.getElementById('app')!;
app.innerHTML = mainPage;
for (let i = 0; i < 10; i++) {
  document.getElementById(
    'render'
  )!.innerHTML += `<input type="checkbox" value=${i} name="number">
  <label>${i}</label>`;
}

const checkbox = document.querySelectorAll(
  "input[type='checkbox']"
) as NodeListOf<HTMLInputElement>;

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', (_) => {
    if (list.length >= 3) {
      alert('数字は3つ選択してね!');
      if (list.includes(checkbox[i].value)) {
        checkbox[i].checked = true;
      } else checkbox[i].checked = false;
      return;
    }
    if (!checkbox[i].checked) {
      checkbox[i].checked = true;
      return;
    } else {
      list.push(i.toString());
      document.getElementById('select')!.innerHTML += `${i}`;
    }
  });
}

const startButton = document.getElementById('start-button');
startButton?.addEventListener('click', () => {
  hitandblow.play(list);
  list = [];
});

const resetButton = document.getElementById('reset');
resetButton?.addEventListener('click', () => {
  list = [];
  document.getElementById('select')!.innerHTML = '';
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = false;
  }
});

window.addEventListener('load', () => {
  hitandblow.setting();
  list = [];
});
