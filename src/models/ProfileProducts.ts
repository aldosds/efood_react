class ProfileProducts {
  id: number
  title: string
  description: string
  image: string
  serve: string
  descriptionModal: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    serve: string,
    descriptionModal: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.serve = serve
    this.descriptionModal = descriptionModal
  }
}

export default ProfileProducts
