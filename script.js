let currentPlayer = "P1";
let column1_Details = document.querySelector(".column-size");
let container = document.querySelector("#container");
let success = document.querySelector('.first-off')


function cellClik(row, column, ele) {


    let elementdet = document.querySelector(`#${ele}`)

    if (currentPlayer == "P1") {
        currentPlayer = "P2"
        const div_ele = document.createElement("div");
        div_ele.classList.add('cross-shape');
        elementdet.setAttribute("player", "P1")

        elementdet.classList.add('disable')
        elementdet.appendChild(div_ele)
    } else {
        currentPlayer = "P1"
        const div_ele = document.createElement("div");
        div_ele.classList.add('zero-shape');
        elementdet.setAttribute("player", "P2")
        elementdet.classList.add('disable')
        elementdet.appendChild(div_ele)
    }

    checkFunctionality();

}
document.querySelector('#player1').addEventListener('click', ele => {


    ele.target.classList.add("disable")
    document.querySelector('#player2').target.classList.remove("disable");

    // ele.classList.add('disable')
})

document.querySelector('#player2').addEventListener('click', ele => {

    ele.target.classList.add("disable")
    document.querySelector('#player1').target.classList.remove("disable");

})


function checkFunctionality() {
    for (let i = 0; i < 3; i++) {
        let first_ele = document.querySelector(`#cell_${i}_0`).getAttribute("player")
        let match = true;
        for (let j = 0; j < 3; j++) {

            let value = document.querySelector(`#cell_${i}_${j}`).getAttribute("player")



            if (value && first_ele) {

                if (first_ele != value) {

                    match = false;


                }

            } else {
                match = false;
            }


        }
        if (match == true) {

            if (first_ele == 'P1') {
                const node = document.createTextNode("Player 1 ");
                success.appendChild(node)
                success.classList.add("winner-annocement")
                container.classList.add("disable")
            } else {
                const node = document.createTextNode("Player 2 ");
                success.appendChild(node)
                success.classList.add("winner-annocement")
                container.classList.add("disable")
            }
            break;
        }

    }

    for (let i = 0; i < 3; i++) {
        let first_ele = document.querySelector(`#cell_0_${i}`).getAttribute("player")
        let match = true;
        for (let j = 0; j < 3; j++) {

            let value = document.querySelector(`#cell_${j}_${i}`).getAttribute("player")



            if (value && first_ele) {

                if (first_ele != value) {

                    match = false;


                }

            } else {
                match = false;
            }


        }
        if (match == true) {


            if (first_ele == 'P1') {
                const node = document.createTextNode("Player 1 ");
                success.appendChild(node)
                success.classList.add("winner-annocement")
                container.classList.add("disable")
            } else {
                const node = document.createTextNode("Player 2 ");
                success.appendChild(node)
                success.classList.add("winner-annocement")
                container.classList.add("disable")
            }



            break;
        }



    }


    let cross_value = document.querySelector(`#cell_0_0`).getAttribute("player")
    let match1 = true;
    for (let i = 0; i < 3; i++) {

        let cross_match = document.querySelector(`#cell_${i}_${i}`).getAttribute("player")

        if (cross_match && cross_value) {


            if (cross_value != cross_match) {
                match1 = false
            }


        } else {
            match1 = false;
        }

    }
    if (match1 == true) {


        if (cross_value == 'P1') {
            const node = document.createTextNode("Player 1 ");
            success.appendChild(node)
            success.classList.add("winner-annocement")
            container.classList.add("disable")
        } else {
            const node = document.createTextNode("Player 2 ");
            success.appendChild(node)
            success.classList.add("winner-annocement")
            container.classList.add("disable")
        }



    }

    let cross_value1 = document.querySelector(`#cell_0_2`).getAttribute("player")
    let match2 = true;
    let k = 3
    for (let i = 0; i < 3; i++) {
        k--;
        let cross_match = document.querySelector(`#cell_${i}_${k}`).getAttribute("player")

        if (cross_match && cross_value) {


            if (cross_value1 != cross_match) {
                match2 = false
            }


        } else {
            match2 = false;
        }

    }
    if (match2 == true) {


        if (cross_value1 == 'P1') {
            const node = document.createTextNode("Player 1");
            success.appendChild(node)
            success.classList.add("winner-annocement")
            container.classList.add("disable")
        } else {
            const node = document.createTextNode("Player 2 ");
            success.appendChild(node)
            success.classList.add("winner-annocement")
            container.classList.add("disable")
        }




    }

}
function reset() {
    document.querySelectorAll('.column-size').forEach(data => {

        data.childNodes.forEach(child => {

            child.childNodes.forEach(data1 => {

                if (data1.tagName == 'DIV') {
                    data1.remove();
                }


            })

            if (child.id) {
                document.getElementById(`${child.id}`).removeAttribute("player")
            }
            if (child?.classList?.contains('disable')) {
                child?.classList?.remove('disable');
            }
        })
    })
    container.classList.remove('disable')
    success.classList.remove("winner-annocement")

    success.childNodes.forEach(data => {
        data.data = ""

    })

    currentPlayer = "P1";
}

