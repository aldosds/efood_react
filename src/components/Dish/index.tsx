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
import { ButtonContainer } from '../Button/styles'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { DadosRestaurantes } from '../../pages/Home'

type Props = {
  cart: DadosRestaurantes
  title: string
  description: string
  serve: string
  image: string
  descriptionModal: string
  priceModal: string
  id: number
}

const Dish = ({
  cart,
  title,
  description,
  serve,
  image,
  descriptionModal,
  priceModal,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 171) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const closeModal = () => {
    setModalEstaAberto(false)
  }

  const dispatch = useDispatch()

  // const addToCart = () => {
  //   dispatch(add(cart))
  //   dispatch(open())
  // }

  const addToCart = () => {
    const foundDish = cart.cardapio.find((dish) => dish.id === id)

    if (foundDish) {
      const itemToAdd = {
        ...cart,
        cardapio: [foundDish] as [typeof foundDish] // Asserção de tipo
      }
      dispatch(add(itemToAdd))
      dispatch(open())
    } else {
      console.error('Item não encontrado no cardápio.')
    }
  }
  return (
    <>
      {/* CARD */}
      <Card key={id}>
        <img src={image} alt={title} />
        <IntoTitulo>
          <div>
            <Titulo>{title}</Titulo>
          </div>
        </IntoTitulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <Button
          type="button"
          onClick={() => setModalEstaAberto(true)}
          title="Clique aqui para saber mais"
        >
          Mais detalhes
        </Button>
      </Card>
      {/* MODAL */}
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
              <div className="info-modal">
                <div>
                  <IntoTituloModal>
                    <div>
                      <TituloModal>{title}</TituloModal>
                    </div>
                  </IntoTituloModal>
                  <DescricaoModal>{descriptionModal}</DescricaoModal> <br />
                </div>
                <div>
                  <DescricaoModal>{serve}</DescricaoModal>
                  <ButtonContainer
                    type="button"
                    title="Clique aqui para adicionar ao carrinho"
                    onClick={addToCart}
                  >
                    Adicionar ao carrinho - {priceModal}
                  </ButtonContainer>
                </div>
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

export default Dish
