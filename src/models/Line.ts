export interface ILine {
	id?: number
	text?: string
}

export default class Line implements ILine {
	public id: number
	public text: string
}
