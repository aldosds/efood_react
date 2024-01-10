import { NoteContainer } from './styles'

export type Props = {
  size?: 'small'
  // children: JSX.Element
  children: string
}

const Note = ({ children, size = 'small' }: Props) => (
  <NoteContainer size={size}>{children}</NoteContainer>
)

export default Note
