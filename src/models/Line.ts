import { generate as generateId } from 'shortid'

export interface ILine {
	id?: string
	text?: string
}

export default class Line implements ILine {
	public id: string
	public text: string

	constructor(line: ILine) {
		this.id = generateId()
		Object.assign(this, line)
	}
}
