const optionImages = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const userResult = document.querySelector('.user-result  img')
const computerResult = document.querySelector('.computer-result img')

const winner = {
    RR: "Empate!",
    RP: "Computador venceu!",
    RS: "Você venceu!",
    PP: "Empate!",
    PR: "Você venceu!",
    PS: "Computador venceu!",
    SS: "Empate!",
    SR: "Computador venceu!",
    SP: "Você venceu!"
}

const computerImgSrc = ['./imagens/pedra.png', './imagens/papel.png', './imagens/tesoura.png']

handleOptionClick = (event) => {
    const clickedImage = event.currentTarget
    const clickedIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add('start')
    resultText.textContent = "..."

    userResult.src = computerResult.src = computerImgSrc[0]

    setTimeout(() => {
        container.classList.remove('start')

        userResult.src = computerImgSrc[clickedIndex]

        const randomNumber = Math.floor(Math.random() * computerImgSrc.length)
        computerResult.src = computerImgSrc[randomNumber]

        const userValue = ['R', 'P', 'S'][clickedIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalValue = winner[userComputerResult]
      
        resultText.textContent = computerValue === userValue ? "Empate" : finalValue
    }, 2000)
}

optionImages.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})

