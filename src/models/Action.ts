import { generate as generateId } from 'shortid'

export interface IAction {
	id?: string
	name?: string
}

export default class Action implements IAction {
	public id: string
	public name: string

	constructor(action: IAction) {
		this.id = generateId()
		Object.assign(this, action)
	}
}
