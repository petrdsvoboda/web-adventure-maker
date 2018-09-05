import { generate as generateId } from 'shortid'

import Line from './Line'

export interface ICharacter {
	id?: string
	name?: string
	description?: string
	lines?: Line[]
}

export default class Character implements ICharacter {
	public id: string
	public name: string
	public description: string
	public lines: Line[]

	constructor(character: ICharacter) {
		this.id = generateId()
		Object.assign(this, character)
	}
}
