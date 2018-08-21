import Line from './Line'

export interface IDialog {
	id?: number
	name?: string
	lines?: Line[]
}

export default class Dialog implements IDialog {
	public id: number
	public name: string
	public lines: Line[]
}
