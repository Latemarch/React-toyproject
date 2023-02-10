import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { toDoState } from './atoms.ts'
import { useRecoilState } from 'recoil'
import DraggableCard from './Components/DraggableCard.tsx'
import Board from './Components/Board.tsx'

const Wrapper = styled.div`
  display: flex;
  background-color: #d5dae7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  max-width: 500px;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = ({ draggableId, destination, source }) => {
    console.log(destination)
    console.log(source)
    if (!destination) return
    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const copyToDos = [...oldToDos[source.droppableId]]
        copyToDos.splice(source.index, 1)
        copyToDos.splice(destination?.index, 0, draggableId)
        console.log(copyToDos)
        return {
          ...oldToDos,
          [source.droppableId]: copyToDos,
        }
      })
    } else {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]]
        const destinationBoard = [...allBoards[destination.droppableId]]
        sourceBoard.splice(source.index, 1)
        destinationBoard.splice(destination?.index, 0, draggableId)
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        }
      })
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId, i) => (
            <Board
              boardId={boardId}
              key={`${boardId}${i}`}
              toDos={toDos[boardId]}
            />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  )
}

export default App
