function draw_to_canvas(){ // Defining a function
  let c = document.querySelector("canvas")
  if(c.getContext){
    let ctx = c.getContext('2d')

    ctx.fillStyle = '#FF0000'
    ctx.strokeStyle = '#0000FF'

    let is_circle = document.getElementById('shape-type').checked
    if (is_circle){
      ctx.beginPath();
      ctx.arc(100, 150, 50, 0, 2 * Math.PI);
      ctx.arc(400, 150, 50, 0, 2 * Math.PI);
      ctx.fillStyle = '#00FF00'

      ctx.fill();
    }
      
    ctx.fillRect(100, 150, 300, 200)
    ctx.strokeRect(100, 150, 300, 200) 

    ctx.fillRect(100, 150, 300, 200)

    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 4; j++){
        if((i * 4 + j) % 2 == 0) {
          ctx.strokeStyle = '#FF00FF'

          if(i * 50 + 20 < 200 || i * 50 + 20 > 300 ){
            ctx.strokeRect(i * 50 + 20, 400 + j * 50, 40, 40) 
          }
        } else {
          ctx.strokeStyle = '#00FF00'
          ctx.fillRect(i * 50 + 20, 400 + j * 50, 40, 40) 
        }
      }
    }

  }

}

draw_to_canvas() // Calling a function
document.getElementById('shape-type').onchange = draw_to_canvas
