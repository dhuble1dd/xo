var cell = document.querySelectorAll('.cell');

var player = 'X';
var winPos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false)
}

function cellClick() {

    var data = [];

    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert('Ячейка занята');
        return;
    }

    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if (checkWin(data)) {
        restart('Победа игрока ' + player);
    } else {
        var draw = true;
        for (var i in cell) {
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
    for (var i in winPos) {
        var win = true;
        for (var j in winPos[i]) {
            var id = winPos[i][j];
            var ind = data.indexOf(id);

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
    for (var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
}