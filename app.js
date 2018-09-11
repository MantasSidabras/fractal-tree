// import { config } from './config.js';

const height = 600;
const width = 800;
const len = (height * 2) / 9;
let bound = 2;
let angle = 45;
let lenScale = 0.65;
let sliderAngleAngle;
let sliderBound;
let sliderScale;

function setup() {
	angleMode(DEGREES);
	createCanvas(width, height);
	sliderAngle = createSlider(0, 180, 45, 0.01);
	sliderAngle.position(20, 20);
	sliderBound = createSlider(1, 100, 2, 1);
	sliderBound.position(20, 40);
	sliderScale = createSlider(0.1, 0.7, 0.65, 0.05);
	sliderScale.position(20, 60);
	// createCanvas(600, 600);
}

function draw() {
	stroke(255);
	text('angle', 500, 40, 20);
	angle = sliderAngle.value();
	bound = sliderBound.value();
	lenScale = sliderScale.value();
	background(50);
	strokeWeight(2);
	stroke(255);
	translate(width / 2, (height * 4) / 5);
	push();
	rotate(-angle);
	branch(len);
	pop();
	push();
	branch(len);
	pop();
	push();
	rotate(angle);
	branch(len);
	pop();
}

function branch(len) {
	if (len > bound) {
		line(0, 0, 0, -len);
		translate(0, -len);
		push();
		rotate(angle);
		branch(len * lenScale);
		pop();
		push();
		rotate(-angle);
		branch(len * lenScale);
		pop();
	}
}
