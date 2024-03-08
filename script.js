const bgClrChange = document.querySelector('.content');
const clrChange = document.getElementById('dm');
const navClrChange = document.querySelector('.navbar');
const footClr = document.querySelector('.footer');

function darkMode()
{
    clrChange.style.color = 'white';
    navClrChange.style.backgroundColor = '#000120';
    footClr.style.backgroundColor = 'black';
    bgClrChange.style.backgroundImage = "url('./SourceFiles/pxfuel.jpg')";
    const darkBtn = document.getElementById('darkModeBtn');
    darkBtn.innerHTML = 'Light Mode';
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
    const darkBtn = document.getElementById('darkModeBtn');
    darkBtn.innerHTML = 'Dark Mode';
    darkBtn.addEventListener('click', () => {
                darkMode();
            });
}