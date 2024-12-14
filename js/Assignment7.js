let plane, ground, obstacles, gameOver;
let bg,planeImg,myfont



function preload() {
	bg = loadImage('img/Background.png')
	planeImg = loadImage('img/Plane.png')
	myfont = loadFont('font/PixelifySans-Medium.ttf')
}

function setup() {
	let canvas = createCanvas(400, 600);
	canvas.parent('sketch-container');
	noStroke();
	world.autoStep = false;

	ground = new Sprite(0,650,650,50,"none");

	obstacles = new Group();
	obstacles.collider = 'static';

	plane = new Sprite(0, 300, [[50,15],[-50,15],[0,-30]]);
	plane.image = planeImg

	camera.x = 150;
	gameOver = true;
	canStartNewGame = true;


	
}

function draw() {
	if (mouse.pressing() || kb.pressing('space')) {
		if (canStartNewGame) newGame();
		plane.vel.y = -3;
	}

	if (!gameOver) {
		plane.rotation = plane.direction * 0.2;

		if (plane.y < 0) plane.y = 0;

		if (plane.y > 600 || plane.collides(obstacles)) die();

		if (plane.y == 0) die();

		if (frameCount % 60 == 0) {
			let pos = random(0, 250);

			let bottomBox = new obstacles.Sprite();
			bottomBox.x = width + plane.x;
			bottomBox.y = ground.y - pos*0.6;
			bottomBox.width = 150
			bottomBox.height = 250
			bottomBox.color = color(56, 76, 113)

			let midBox1 = new obstacles.Sprite();
			midBox1.x = bottomBox.x + plane.x
			midBox1.y = ground.y - pos - 200 - random(0,100);
			midBox1.width = 80
			midBox1.height = 40
			midBox1.color = color(157, 178, 187, 70)

			let midBox2 = new obstacles.Sprite();
			midBox2.x = bottomBox.x + plane.x + pos
			midBox2.y = ground.y - pos - 300 - random(0,100);
			midBox2.width = 100
			midBox2.height = 25
			midBox2.color = midBox1.color


			let topBox2 = new obstacles.Sprite();
			topBox2.x = bottomBox.x + width + pos
			topBox2.y = ground.y - pos - 400 - random(0, 150);
			topBox2.width =120
			topBox2.height = 50
			topBox2.color = midBox1.color
		}

		for (let obstacle of obstacles) {
			if (obstacle.x < plane.x - width / 2) {
				obstacle.remove();
			}
		}

		if (camera.x > ground.x + width / 2) {
			ground.x += width;
		}
	}

	camera.off();

	background(243, 248, 252);
	image(bg, 0, ground.y - 500);
	let ms = round((camera.x - 100)/20)
	if (!gameOver){
		textFont(myfont)
		textSize(24)
		text(`Travelled: ${ms} km`, 110, 30)
	} else if (ms > 5 && die) {
		push()
		fill('black')
		textFont(myfont)
		textSize(50)
		text(`GAME OVER`, 75, 250)
		pop()
		fill(56,76,133)
		textSize(25)
		text(`You have travelled ${ms} km`,45,300)
		textSize(15)
		text('press Space or LMB to try again!',80,350)
	}
	

	camera.on();

	if (!gameOver) {
		camera.x = plane.x + 150;
		world.step();

	}

	if (gameOver){
		textFont(myfont);
		textSize(35);
		fill(56,76,113)
		text('Arriving at NYC',16,200)
		push()
		fill(0)
		textSize(15)
		text('steer away from the clouds!',40,230)
		pop()
		textSize(20);
		text('Press Space or LMB to start,',3,400)
		text('Hold Space or LMB to fly!',30,440)
	}

}

async function die() {
	gameOver = true;
	await delay(500);
	canStartNewGame = true;
}

function newGame() {
	obstacles.removeAll();
	gameOver = false;
	canStartNewGame = false;
	plane.x = 0;
	plane.y = height / 2;
	plane.vel.x = 4;
	plane.vel.y = 0;
	ground.x = -150;
	world.gravity.y = 24;

}
