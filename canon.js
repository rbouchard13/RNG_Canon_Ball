//   Canon Animation    ****************************************************************
var velX = {};
var velY = {};
var i = 1;
function fireCanon(){	
	velX[i] = 3; velY[i] = -1;
    	var bgColor = "rgb(" + Math.floor(Math.random() * 256) + "," + (100 + Math.floor(Math.random() * 256)) + "," + (50 + Math.floor(Math.random() * 256)) + ")";
  		ball = document.createElement("div");
  		ball.style.backgroundColor = bgColor;
  		ball.className = "ball";
		ball.id = "ball" + i;
  		ball.style.height = "30px"; ball.style.width = "30px";
  		ball.style.bottom = "135px"; ball.style.left = "180px";
  		ball.style.border= "solid";
  		document.body.appendChild(ball);i++;
}
function moveBall(){
	var els = document.getElementsByClassName("ball");
	if( els.length > 0){
    	var edgew = window.innerWidth - 36; var edgeh = window.innerHeight -36;
	var c; 
	for (c = 1; c < i; c++){
		var posX = document.getElementById("ball" + c).offsetLeft; posX = posX + velX[c]; document.getElementById("ball" + c).style.left = posX +'px';
		var posY = document.getElementById("ball" + c).offsetTop; posY = posY + velY[c]; document.getElementById("ball" + c).style.top = posY +'px';
			if (posX >= edgew || posX <= 1){velX[c] = velX[c] * -1;}
			if (posY >= edgeh || posY <= 1){velY[c] = velY[c] * -1;}
		}
	}	
}
setInterval(moveBall, 3);
setInterval(fireCanon, 3850);
