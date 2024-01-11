class Food {
  id: number
  title: string
  description: string
  infos: string[]
  image: string
  star: string
  note: string

  constructor(
    id: number,
    title: string,
    description: string,
    infos: string[],
    image: string,
    star: string,
    note: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.infos = infos
    this.image = image
    this.star = star
    this.note = note
  }
}

export default Food
