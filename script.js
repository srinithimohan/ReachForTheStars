//Variables
let startButton;
let button1, button2, button3;
let startButton1, startButton2, startButton3;
let startOver;

let theFont;

let score1 = 0;
let score2 = 0;
let score3 = 0;

let homePage;
let winnerIm;
let game1back;
let game2back;
let game3back;

let screen = 0;

let slider1, slider2, slider3;
let circ1, circ2, circ3;


function preload()
{
  theFont = loadFont("assets/pixel.ttf");
  game1back = loadImage("assets/game1.png");
 game2back = loadImage("assets/realgame2.png");
  game3back = loadImage("assets/game3.png");
  winnerIm = loadImage('assets/star.png');
  homePage = loadImage("assets/home2.png");
}

//Set-Up
function setup()
{
  createCanvas(400,500);
  background("#8286ff");
  imageMode(CENTER);
  image(homePage, width/2, height/2, width, height);

  //Create walls
  walls = new Group();
	walls.w = 10;
	walls.h = 500;
  walls.collider = "static";
  walls.visible = false;

  // left and right walls
	new walls.Sprite(0, height/2);
	new walls.Sprite(width, height / 2);
  
  //top wall
	let wallTop = new walls.Sprite(width / 2, 0);
	wallTop.rotation = 90;

  showScreen0();
  
}


//Draw
function draw()
{
  noStroke();
  noSmooth();
  if (screen == 0) {
    if (startButton.mouse.presses()) {
      screen = 1;
      showScreen1();
    }
  } 

  if(screen == 1)
  {
    background("#89d1f5");
    imageMode(CENTER);
    image(game1back, width/2, height/2, width, height);
    
    slider1.moveTowards(mouse.x,460,1);

      //When ball collides with paddle bounce off 
    if (circ1.collides(slider1)) {
  		circ1.speed = 8;
      circ1.direction = circ1.direction + random(-10,10);
    }

    // Colliding bricks and making them disseapear
    for (let brick of bricks) {
  		if (brick.collides(circ1)) {
  			brick.pos = {x: -50, y: -50};
        score1 += 1;
  		  }
  	 }
  
    //When ball hits ground you lose
    if (circ1.y > 470) {
      circ1.y = 510;
      circ1.speed = 0;
      
      // Draw you lose to screen
      fill("#083454");
      textSize(20);
      text('You lose!', width/2, 250); 
    }
    else if(score1 == 18)
    {
      slider1.pos = {x: -500,y: 700};
      circ1.pos = {x: -500, y: -10}
      
      startButton1.pos = {x: 200, y: 300};
      startButton1.color = "#d5f6fa";
      startButton1.textColor = "#083454";
      startButton1.textSize = 15;
      startButton1.text = "Next\nGame>";

      if (startButton1.mouse.presses()) {
        screen = 2;
        showScreen2();
      }  
      
    }
    
  }




  
  if(screen == 2)
  {
    background("#f797f3");

    imageMode(CENTER);
    image(game2back, width/2, height/2, width, height);

        slider2.moveTowards(mouse.x,460,1);

      //When ball collides with paddle bounce off 
    if (circ2.collides(slider2)) {
  		circ2.speed = 8;
      circ2.direction = circ2.direction + random(-10,10);
    }

    // Colliding bricks and making them disseapear
    for (let brick of bricks) {
  		if (brick.collides(circ2)) {
  		brick.pos = {x: -50, y: -50};
        score2 += 1;
  		 }
  	 }
  
    //When ball hits ground you lose
    if (circ2.y > 470) {
      circ2.y = 510;
      circ2.speed = 0;
      
      // Draw you lose to screen
      fill("#751b57");
      textSize(20);
      text('You lose!', width/2, 250); 
    }
    else if(score2 == 35)
    {
      slider2.pos = {x: -500,y: 700};
      circ2.pos = {x: -500, y: -10}
      
      startButton2.pos = {x: 200, y: 300};
      startButton2.color = "#fcd6e0";
      startButton2.textColor = "#bf6589";
      startButton2.textSize = 15;
      startButton2.text = "Next\nGame>";

      if (startButton2.mouse.presses()) {
        screen = 3;
        showScreen3();
      }  
      
    }

  }

  if(screen == 3)
  {
    background("#362085");

    imageMode(CENTER);
    image(game3back, width/2, height/2, width, height);

    slider3.moveTowards(mouse.x,460,1);

    
      //When ball collides with paddle bounce off 
    if (circ3.collides(slider3)) {
  		circ3.speed = 8;
      circ3.direction = circ3.direction + random(-10,10);
    }
    

    // Colliding bricks and making them disseapear
    for (let brick of bricks) {
  		if (brick.collides(circ3)) {
  		brick.pos = {x: -50, y: -50};
        score3 += 1;
  		 }
  	 }
  
    //When ball hits ground you lose
    if (circ3.y > 470) {
      circ3.y = 510;
      circ3.speed = 0;
      
      // Draw you lose to screen
      fill("#f0e784");
      textSize(20);
      text('You lose!', width/2, 250); 
    }
      
    else if(score3 == 14)
    {
      slider3.pos = {x: -500,y: 700};
      circ3.pos = {x: -500, y: -10}
      
      startButton3.pos = {x: 200, y: 300};
      startButton3.color = "#bda959";
      startButton3.textColor = "#301e36";
      startButton3.textSize = 20;
      startButton3.text = "Next>";

      if (startButton3.mouse.presses()) {
        screen = 4;
        showScreen4();
      }  
      
    }
    
  }

  if(screen == 4)
  {
  background("#2b2859");
   // imageMode(CENTER);
   imageMode(CENTER);
  image(winnerIm, width/2, height/2, width, height);
    fill("#f0e784");
    textSize(25);
    textAlign(CENTER);
    text("Congrats!", 200, 145);
    textSize(18);
    text("You have reached\nthe stars!",200,330);
  }
}




//Screens

//Home Page

function showScreen0()
{

  //Create the title
  fill("#ffffe3");
  textFont(theFont);
  textSize(25);
  textAlign(CENTER);
  text("Reach for\nthe Stars!", 200, 125);

  startButton = new Sprite(200,300,100,50, 'k');
  startButton.color = "white";
  startButton.textColor = "#0d0a26";
  startButton.textSize = 17;
  startButton.text = "Begin";
  
}

// First Game
function showScreen1()
{
  
  startButton.pos = {x: -50,y: -50};

  startButton1 = new Sprite(-200,-300,100,60, 'k');

  slider1 = new Sprite(200,460,120,20,"k");
  slider1.color = color("#083454");
  slider1.rotationLock = true;

  circ1 = new Sprite(200,200, 20);
  circ1.color = color("#167321");
  circ1.direction = 'down';
  circ1.speed = 5;
  circ1.bounciness = 1;
  circ1.friction = 0;


  //Tiles!
  bricks = new Group();
	bricks.w = 20;
	bricks.h = 10;
	bricks.tile = '=';
  bricks.collider = "k";
  bricks.color = "#084454";

	new Tiles(
		[
      '......==......',
			'...==....==...',
			'==....==....==',
			'...==....==...',
      '......==......',

		],
		40,
		60,
		bricks.w + 4,
		bricks.h + 4
	);
}


//Second Game
function showScreen2()
{
  slider1.remove();
  circ1.remove();
  startButton1.pos = {x: -50,y: -50};

  startButton2 = new Sprite(-200,-300,100,60, 'k');

  slider2 = new Sprite(200,460,120,20,"k");
  slider2.color = color("#c72e94");
  slider2.rotationLock = true;

  circ2 = new Sprite(200,230, 20);
  circ2.color = color("#7c1f8f");
  circ2.direction = 'down';
  circ2.speed = 5;
  circ2.bounciness = 1;
  circ2.friction = 0;


  //Tiles!
  bricks.color = "#cc5ca7";

	new Tiles(
		[
      '.......=......',
      '.......=......',
      '...=...=...=..',
			'....=.....=...',
			'.....=.=.=....',
			'......===.....',
      '..===.===.===.',
			'......===.....',
			'.....=.=.=....',
      '....=.....=...',
      '...=...=...=..',
      '.......=......',
      '.......=......',

		],
    35,
		25,
		bricks.w + 4,
		bricks.h + 4
	);
  
}


//Third Game
function showScreen3()
{

  slider2.remove();
  startButton2.pos = {x: -50,y: -50};

  startButton3 = new Sprite(-200,-300,100,60, 'k');

  slider3 = new Sprite(200,460,120,20,"k");
  slider3.color = color("#b08427");
  slider3.rotationLock = true;

  
  circ3 = new Sprite(200,200, 20);
  circ3.color = color("#f0e784");
  circ3.direction = 'down';
  circ3.speed = 5;
  circ3.bounciness = 1;
  circ3.friction = 0;

  
  //Tiles!
  bricks.color = "#a38321";

	new Tiles(
		[
			'......==......',
			'...==....==...',
			'..=........=..',
			'...==....==...',
			'......==......'

		],
    50,
		60,
		bricks.w + 4,
		bricks.h + 4
	);
 
}


//Fourth Game
function showScreen4()
{
  slider3.remove();
  startButton3.pos = {x: -50,y: -50};
}
