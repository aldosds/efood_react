import { useState } from 'react'
import Button from '../Button'

import close1 from '../../assets/images/close1.png'

import {
  Card,
  Descricao,
  Titulo,
  IntoTitulo,
  CardModal,
  DescricaoModal,
  TituloModal,
  IntoTituloModal,
  Modal,
  ImageModal,
  ImageFecharModal,
  ModalContent
} from './styles'

type Props = {
  title: string
  description: string
  serve: string
  image: string
  descriptionModal: string
}

const Product = ({
  title,
  description,
  serve,
  image,
  descriptionModal
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const closeModal = () => {
    setModalEstaAberto(false)
  }

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <IntoTitulo>
          <div>
            <Titulo>{title}</Titulo>
          </div>
        </IntoTitulo>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          onClick={() => setModalEstaAberto(true)}
          title="Clique aqui para saber mais"
        >
          Mais detalhes
        </Button>
      </Card>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <CardModal>
            <header>
              <ImageFecharModal
                src={close1}
                alt="Fechar"
                onClick={() => {
                  closeModal()
                }}
              />
            </header>
            <div className="container">
              <div>
                <ImageModal src={image} alt={title} />
              </div>
              <div>
                <IntoTituloModal>
                  <div>
                    <TituloModal>{title}</TituloModal>
                  </div>
                </IntoTituloModal>
                <DescricaoModal>{descriptionModal}</DescricaoModal> <br />
                <DescricaoModal>{serve}</DescricaoModal>
                <Button type="button" title="Clique aqui para saber mais">
                  Adicionar ao carrinho - R$ 60,90
                </Button>
              </div>
            </div>
          </CardModal>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Product
