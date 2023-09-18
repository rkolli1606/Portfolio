function render()
{
    const schemeMode = document.querySelector('#select-color').value
    console.log(schemeMode)
    fetch(`https://www.thecolorapi.com/scheme?hex=0047AB&mode=${schemeMode}&count=5`)
    .then(response=>response.json())
    .then(data=>{//console.log(data)
        const html = document.querySelector('.seed-scheme')
        html.innerHTML = ''
        const footer = document.querySelector('footer')
        let htmlMain = ''
        let footerHtml = ''
        data.colors.map((ele,index)=>
        {
            htmlMain +=`<div class='item${index} item'></div>`
            footerHtml += `<div class="footer-item">${ele.hex.value}</div>`
        })
        html.innerHTML = htmlMain
        footer.innerHTML = footerHtml
        data.colors.map((ele,index)=>
        {
            document.querySelector(`.item${index}`).style.background = ele.hex.value
        })
        
    })
    
}
document.querySelector('button').addEventListener('click',render)
render()


