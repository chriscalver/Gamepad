ctrlR = 40;
ctrlX = 0;
ctrlY = 0;

function setup() {
  createCanvas(800, 550);
  background(20);
  
  if (Controller && Controller.supported) {
    Controller.search();
  
    window.addEventListener('gc.button.press', function(event) {
      if (event.detail.value > 0.1) {
        console.log(event.detail);
        if (event.detail.name == 'FACE_2' || event.detail.name == 'MISCBUTTON_5') { 
          // A button or LT
          //ctrlR += 5;
        } else if (event.detail.name == 'FACE_1' || event.detail.name == 'MISCBUTTON_6') { 
          // B button or RT
          //ctrlR -= 5;
        } else if (event.detail.name.indexOf('DPAD_')>-1) { 
          // arrows
          dpad_dir = event.detail.name.replace('DPAD_', '')
          ctrlX += (dpad_dir == 'RIGHT') ? 10 : 
                         (dpad_dir == 'LEFT') ? -10 : 0;
          ctrlY += (dpad_dir == 'DOWN') ? 10 : 
                         (dpad_dir == 'UP') ? -10 : 0;
        } else if (event.detail.name.indexOf('MISCBUTTON_')>-1) { 
          // xbox
          dpad_dir = event.detail.name.replace('MISCBUTTON_', '')
          ctrlX += (dpad_dir == '2') ? 10 : 
                         (dpad_dir == '3') ? -10 : 0;
          ctrlY += (dpad_dir == '1') ? 10 : 
                         (dpad_dir == '4') ? -10 : 0;
        }
      }
    }, false);
  }    
}

function draw() {  
  background(20);
  ellipse(
    width/2 + ctrlX, 
    height/2 + ctrlY, 
    ctrlR
  ); 
  
  
}