document.addEventListener('DOMContentLoaded', () => {


    // O evento DOMContentLoaded é acionado quando todo o HTML foi completamente carregado e analisado, sem aguardar pelo CSS, imagens

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })





})

function handleClick(event) {



    let square = event.target
    let position = square.id

    if (handleMove(position)) {


        setTimeout(() => {
            alert("O jogo Acabou - O vencedor foi o jogador" + playerTime)
        }, 10)

    }

    updateSquares(position)


}



function updateSquares() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {

        let position = square.id
        let symbol = board[position]

        if (symbol != '') {
            square.innerHTML = `<div class = '${symbol}'></div>`
        }


    })

}