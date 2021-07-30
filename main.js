let timer = document.getElementById('timer');
let text = document.getElementById('text');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let body = document.querySelector('body');
let parol = prompt('Введи пароль молодой');
if (parol == 'Гришин Рот') {
   body.style = 'display: block;'
}else {
   body.style = 'display: none;'
};
stop.style = 'display: none;';
let predsKaz = ['Сегодня тебе вставят в рот', 'Сегодня ты встанешь раком',
   'Сегодня ты дашь за прняик', 'Тебя вынесут с двух ног',
   'Ты будешь жрать г*вно'];
//for (let i = 1; i <= predsKaz.length; i++) {}
start.onclick = function () {
   let inter = setInterval(function pidor() {
      let vremya = Math.floor(Math.random() * predsKaz.length);
      timer.innerHTML = vremya;
   }, 70);
   start.style = 'display: none;'
   stop.style = 'display: block; margin: 0 auto;'
   stop.onclick = function () {
      clearInterval(inter);
      text.innerHTML = predsKaz[timer.innerHTML];
      stop.style = 'display: none;'
      return;
   }
}

