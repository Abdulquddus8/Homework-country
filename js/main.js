let a = 0;
document.getElementById('modeBtn').addEventListener('click',function(){
    document.body.classList.toggle('dark');
    if (a == 0){
        this.textContent = 'Light mode';
        a++;
    }else{
        this.textContent = 'dark mode';
        a = 0;
    }
});