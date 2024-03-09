const bgClrChange = document.querySelector('.content');
const clrChange = document.getElementById('dm');
const navClrChange = document.querySelector('.navbar');
const footClr = document.querySelector('.footer');
const darkBtn = document.getElementById('darkModeBtn');
const btnBackground = document.querySelector('.dark-mode-toggle');
const textClr1 = document.querySelector('.text-center');
const textClr2 = document.querySelector('.txt');
const textClr3 = document.querySelector('.list');
const bgClr = document.querySelector('.main_con_sec');
const navOptions = document.querySelector('.navOptions');

function darkMode()
{
    clrChange.style.color = 'white';
    navClrChange.style.backgroundColor = '#000120';
    footClr.style.backgroundColor = 'black';
    bgClrChange.style.backgroundImage = "url('./SourceFiles/pxfuel.jpg')";
    darkBtn.innerHTML = 'Light Mode';
    btnBackground.style.backgroundColor = '#000120';
    btnBackground.style.color = '#9acaee';
    textClr1.style.color = 'white';
    textClr2.style.color = 'white';
    textClr3.style.color = '#000120';
    bgClr.style.backgroundColor = '#000120';
    navOptions.style.backgroundColor = '#9acaee';
    navOptions.style.color = '#000120';
    darkBtn.style.border = '1px solid #9acaee';
    darkBtn.addEventListener('click', () => {
                lightMode();
            });
}

function lightMode()
{
    bgClrChange.style.backgroundImage = "url('https://i.stack.imgur.com/7X3An.png')";
    clrChange.style.color = 'black';
    navClrChange.style.backgroundColor = '#9acaee';
    footClr.style.backgroundColor = '#9acaee';
    darkBtn.innerHTML = 'Dark Mode';
    btnBackground.style.backgroundColor = '#9acaee';
    btnBackground.style.color = '#000120';
    bgClr.style.backgroundColor = '#9acaee';
    textClr1.style.color = '#000120';
    textClr2.style.color = '#000120';
    textClr3.style.color = '#000120';
    navOptions.style.backgroundColor = '#000120';
    darkBtn.style.border = '1px solid #000120';
    navOptions.style.color = '#9acaee';
    darkBtn.addEventListener('click', () => {
                darkMode();
            });
}

function show() 
{   
    console.log(navOptions.style.display);
    if (navOptions.style.display == 'none' || navOptions.style.display == '') {
      navOptions.style.display = 'block';
    } else {
      navOptions.style.display = 'none';
    }
  }
  