const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
      input.oninput = () => {
        const outputs = document.querySelectorAll('output')
        const result = document.querySelector('#coloredSquare')

        const red = inputs[0].value
        const green = inputs[1].value
        const blue = inputs[2].value
            
        outputs[0].innerHTML = red
        outputs[1].innerHTML = green
        outputs[2].innerHTML = blue
       
        inputs[0].style.backgroundColor = `rgb(${red}, 0, 0)`
        inputs[1].style.backgroundColor = `rgb(0, ${green}, 0)`
        inputs[2].style.backgroundColor = `rgb(0, 0, ${blue})`
        
        result.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        
      }
    })
    