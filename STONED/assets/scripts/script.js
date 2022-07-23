



function about(){



    const aboutTitle = document.getElementById("title")

    aboutTitle.innerHTML = "Somos uma empresa nova no mercado "
    
    const aboutText = document.getElementById("text")
    aboutText.innerHTML = ""

    const image = document.getElementById("social").style.display = "none"

    document.getElementById("button").style.display = "none"
   
}

function info(){



    const infoTitle = document.getElementById("title")
    
    infoTitle.innerHTML = "Estamos localizados na rua abc"
   
    const infoText = document.getElementById("text")
    infoText.innerHTML = ""

    const image = document.getElementById("social").style.display = "none"

    
    document.getElementById("button").style.display = "none"
    
}

function contact(){



    const contactTitle = document.getElementById("title")
        
    contactTitle.innerHTML = "Redes sociais:"
    contactTitle.style.fontSize = "36px"

    const contactText = document.getElementById("text")

    contactText.innerHTML = ""

    const image = document.getElementById("social").style.display = "flex"

    
        
    document.getElementById("button").style.display = "none"
    
        
}