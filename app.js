let count = 0;
const countValue = document.getElementById('value');
const btns = document.querySelectorAll(".btn");

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        switch(index) {
            case 0:
                count--;
                break;
            case 1:
                count = 0;
                break;
            case 2:
                count++;
                break;
        }
        if (count > 0) {
            countValue.classList.add('green')
        } else if (count < 0) {
            countValue.classList.add('red')
        } else if (count === 0) {
            countValue.classList.remove('green', 'red');
        }

        countValue.textContent = count;
    })
})
