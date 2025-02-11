import { NoteContainer } from './styles'

export type Props = {
  size?: 'small'
  children: number
}

const Note = ({ children, size = 'small' }: Props) => (
  <NoteContainer size={size}>{children}</NoteContainer>
)

export default Note
