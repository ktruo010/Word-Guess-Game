let passwordList = ['complainer', 'complaints', 'completing', 'complexity', 'compulsive', 'configured', 'demography', 'depilatory', 'desolating', 'despicably', 'destroying', 'dextrously', 'disbarment', 'greyhounds', 'wanderlust', 'windbreaks', 'aftershock', 'algorithms']
let password = passwordList[Math.floor(Math.random() * passwordList.length)]

for (let i = 0; i < password.length; i++) {
  let unknown = document.createElement('span')
  unknown.textContent = '_ '
  unknown.className = password[i]
  document.getElementById('password').append(unknown)
}
// console.log(document.getElementsByClassName('a'))

document.onkeyup = ({ keyCode, key }) => {
  if (keyCode <= 90 && keyCode >= 65) {
    if (password.indexOf(key) > -1) {
      document.querySelector(`.` + key).textContent = key
      console.log(event)
    } else {
      setInterval(function () {
        document.querySelector('#password').style.borderColor = 'red' }, 1)
    }
  }
}
