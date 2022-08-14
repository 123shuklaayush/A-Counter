let count = 0;
const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("dec")){
            count--;
        }
        value.textContent = count;
        if(styles.contains("res")){
            count =0;
        }
        value.textContent = count;
        if(styles.contains("inc")){
            count++;
        }
        value.textContent = count;
    })
})