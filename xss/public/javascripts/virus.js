let normal = false

function start() {
  // const audio =   
    setInterval(() => {
    const body = document.body
    if(normal) {
      body.style.color = 'black'
      body.style.backgroundColor = 'white'
    }
    else {
      body.style.color = 'white'
      body.style.backgroundColor = 'black'
    }
    
    normal = !normal
  }, 1000)

}

document.addEventListener('load', start())

document.write('VIRUS VIRUS VIRUS')