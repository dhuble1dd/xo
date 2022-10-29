const cell = document.querySelectorAll('.cell');

let player = 'X';
let winPos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false)
}

function cellClick() {

    let data = [];

    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert('Ячейка занята');
        return;
    }

    for(let i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if (checkWin(data)) {
        if (player == 'X') {
            restart('Победа первого игрока!!!');
        } else {restart('Победа второго игрока!!!') }
    } else {
        let draw = true;
        for (let i in cell) {
            if(cell[i].innerHTML == '') {
                draw = false;
            }
        }
        if (draw) {
            restart('Ничья');
        }
    }


    player = player == 'X' ? 'O' : 'X';
}

function checkWin(data) {
    for (let i in winPos) {
        let win = true;
        for (let j in winPos[i]) {
            let id = winPos[i][j];
            let ind = data.indexOf(id);

            if (ind == -1) {
                win = false
            }
        }

        if (win) {
            return true;
        }
    }
    return false;
}

function restart(text) {
    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
        player = 'O';
    }
}