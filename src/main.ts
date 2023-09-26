import { w } from "./constants/window";
import { Eye } from "./eye";

let eye: Eye | undefined

let eyes: Eye[] = []

const generateVector = (size: number) =>
	createVector(
		floor(random(size / 2, windowWidth - size / 2)),
		floor(random(size / 2, windowHeight - size / 2)))

w.setup = () => {
	createCanvas(windowWidth / 1.1, windowHeight / 1.1)
	background(90, 30, 30)

	eye = new Eye(createVector(windowWidth / 4, windowHeight / 4))
	eye.setup()

	eyes = Array
		.apply(null, Array(25))
		.map(() => new Eye(generateVector(Eye.size)))
}

w.draw = () => {
	eye.draw()
	eyes.forEach(eye => eye.draw())
}