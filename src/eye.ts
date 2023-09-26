import { Vector } from "p5"
import { Entity } from "./entity"

export class Eye extends Entity {
	public static readonly size = 120
	public static readonly pupilSize = this.size / 5
	private position: Vector

	constructor(position: Vector) {
		super()
		this.position = position
	}

	draw(): void {
		this.style()
		circle(this.position.x, this.position.y, Eye.size)

		strokeWeight(2)
		stroke(0)
		fill(0)
		circle(this.position.x, this.position.y, Eye.pupilSize)
	}

	private style() {
		strokeWeight(2)
		stroke(140, 30, 30)
		fill(255)
	}
}