let turn = 'x';
let title = document.querySelector('.title');
let square = [];

function end(num1, num2, num3) {
    title.textContent = `${square[num1]} Winner!`;
    document.getElementById("item" + num1).style.background = "#000";
    document.getElementById("item" + num2).style.background = "#000";
    document.getElementById("item" + num3).style.background = "#000";

    setInterval(function () {
        title.textContent += '.'
    }, 1000);
    setTimeout(function () {
        location.reload()
    }, 3000);
}

function winner() {
    for (let index = 1; index < 10; index++) {
        square[index] = document.getElementById('item' + index).textContent;
    }

    // (square[i] != '') hadi min ajl mo9aranat almoraba3at wahiya farigha
    if (square[1] == square[2] && square[2] == square[3] && square[1] != '') {
        end(1, 2, 3)

    } else if (square[4] == square[5] && square[5] == square[6] && square[4] != '') {
        end(4, 5, 6)

    } else if (square[7] == square[8] && square[8] == square[9] && square[7] != '') {
        end(7, 8, 9)

    } else if (square[1] == square[4] && square[4] == square[7] && square[4] != '') {
        end(1, 4, 7)

    } else if (square[2] == square[5] && square[5] == square[8] && square[5] != '') {
        end(2, 5, 8)

    } else if (square[3] == square[6] && square[6] == square[9] && square[6] != '') {
        end(3, 6, 9)

    } else if (square[1] == square[5] && square[5] == square[9] && square[9] != '') {
        end(1, 5, 9)

    } else if (square[3] == square[5] && square[5] == square[7] && square[7] != '') {
        end(3, 5, 7)

    }
}

function game(id) {
    let element = document.getElementById(id);

    if (turn === 'x' && element.innerHTML == '') {
        element.textContent = 'X';
        turn = 'o';
        title.textContent = 'O';
    } else if (turn === 'o' && element.innerHTML == '') {
        element.textContent = 'O';
        turn = 'x';
        title.textContent = 'X';
    }
    winner();
}