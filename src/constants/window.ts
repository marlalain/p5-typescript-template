export type P5Window = {
	setup: () => void
	draw: () => void
} & typeof window

export const w = window as unknown as P5Window
