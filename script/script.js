var imgList = new Array(  
            "images/Homer2.png",
            "images/Homer3.png",
            "images/Homer4.png",
            "images/Homer5.png",
            "images/Homer6.png",
            "images/Homer9.png",
            "images/Homer12.png",
            "images/Homer13.png",
            "images/Homer14.png"
        );	

        var imgListLeft = new Array(  
            "images/Homer14Kopie.png",
            "images/Homer13Kopie.png",
            "images/Homer12Kopie.png",
            "images/Homer9Kopie.png",
            "images/Homer6Kopie.png",
            "images/Homer5Kopie.png",
            "images/Homer4Kopie.png",
            "images/Homer3Kopie.png",
            "images/Homer2Kopie.png"
        );

var spriteImage;
          var sprite;
          var MAX_X = 950;
          var MAX_Y = 400;
          var frame = 0;
          var counter = 0;  
          
		function init(){
		  document.onkeydown = keyListener;
            spriteImage = document.getElementById("image");
            createDonut();
		}

		function moveSprite(dx, dy){
            
				var sprite = document.getElementById("sprite");
				var x = parseInt(sprite.style.left);
				var y = parseInt(sprite.style.top);
            
				x += dx;
                y += dy;
            
            if(dx > 0){
                updateImageRight();
            }else if(dx < 0){
                updateImageLeft(); 
            }else if(dy != 0){
                updateImageRight();
            }
            
            updatePosition(x, y);
            collisionDetection();
            
            console.log("Donut Top : " + donut.style.top);
            console.log("Sprite  : " + sprite.style.top);
            console.log("Donut Left:" + donut.style.left);
            console.log("Sprite  :" + sprite.style.left);
		}
          
		function keyListener(e){
     switch (e.keyCode) {
      case 37: moveSprite(-10, 0);
         break;
      case 38: moveSprite(0, -10);
           break;
      case 39: moveSprite(10, 0);
             break;
      case 40: moveSprite(0, 10);
               break;
       default:
       break;
     }
		}
           function updateImageRight(){
              frame++;
              if(frame == imgList.length){
                  frame=0;
              }
              spriteImage.src = imgList[frame];
        }
          function updateImageLeft(){
              frame++;
              if(frame == imgList.length){
                  frame=0;
              }
              spriteImage.src = imgListLeft[frame];
        }
          
          function updatePosition(x, y){
              sprite = document.getElementById("sprite");
              if(x > MAX_X){
                    x = MAX_X;            
              }
              if(x < 0){
                  x = 0;
              }
              if(y > MAX_Y){
                    y = MAX_Y;
              } 
              if(y < 0){
                  y = 0;
              }
				sprite.style.left = x + "px";
				sprite.style.top = y + "px";
          }
          
          function collisionDetection(){
              sprite = document.getElementById("sprite");
              donut = document.getElementById("donut");
              output = document.getElementById("counter");
              var spriteLeft = parseInt(sprite.style.left);
              var spriteTop = parseInt(sprite.style.top);
              var donutLeft = parseInt(donut.style.left);
              var donutTop = parseInt(donut.style.top);
              
              if(spriteLeft == donutLeft && spriteTop == donutTop){
                  counter++;
                  createDonut();
                  console.log(counter);
              }
              output.innerHTML = "<p>Donuts collected: " + counter + "</p>";
          }          
          function createDonut(){
              donut = document.getElementById("donut");
              
              donut.style.left = (Math.floor(Math.random() * (90-10+1) + 10))*10 + "px";
              donut.style.top = (Math.floor(Math.random() * (40-10+1) + 10))*10 + "px";
          }

function collisionDetection(){
              sprite = document.getElementById("sprite");
              donut = document.getElementById("donut");
              output = document.getElementById("counter");
              var spriteLeft = parseInt(sprite.style.left);
              var spriteTop = parseInt(sprite.style.top);
              var donutLeft = parseInt(donut.style.left);
              var donutTop = parseInt(donut.style.top);
              
              if(spriteLeft == donutLeft && spriteTop == donutTop){
                  counter++;
                  createDonut();
                  console.log(counter);
              }
              output.innerHTML = "<p>Donuts collected: " + counter + "</p>";
          }          
          function createDonut(){
              donut = document.getElementById("donut");
              
              donut.style.left = (Math.floor(Math.random() * (90-10+1) + 10))*10 + "px";
              donut.style.top = (Math.floor(Math.random() * (40-10+1) + 10))*10 + "px";
          }