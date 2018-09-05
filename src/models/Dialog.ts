import { generate as generateId } from 'shortid'

import Line from './Line'

export interface IDialog {
	id?: string
	name?: string
	lines?: Line[]
}

export default class Dialog implements IDialog {
	public id: string
	public name: string
	public lines: Line[]

	constructor(dialog: IDialog) {
		this.id = generateId()
		Object.assign(this, dialog)
	}
}
