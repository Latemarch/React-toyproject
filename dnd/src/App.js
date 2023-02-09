import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import styled from 'styled-components'
import { toDoState } from './atoms.ts'
import { useRecoilState } from 'recoil'

const Wrapper = styled.div`
  display: flex;
  background-color: #4d98ff;
  height: 100vh;
  display: flex;
  max-width: 480px;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  //grid-template-columns: repeat(1, 1fr);
  justify-content: center;
`
const Board = styled.div`
  background-color: gray;
  flex-direction: column;
  display: flex;
  width: 100px;
  padding: 10px 10px;
  min-height: 100px;
  border-radius: 5px;
  align-items: center;
`

const Card = styled.div`
  display: flex;
  width: 100%;
  margin: 0 10px;
  border-radius: 5px;
  height: 20px;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = ({ draggableId, destination, source }) => {
    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos]
      copyToDos.splice(source.index, 1)
      copyToDos.splice(destination?.index, 0, draggableId)
      console.log(copyToDos)
      return copyToDos
    })
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((todo, index) => (
                  <Draggable
                    draggableId={todo}
                    key={`${index}${todo}`}
                    index={index}
                  >
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.draggableProps}
                        {...magic.dragHandleProps}
                      >
                        {todo}
                        {index}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  )
}

export default App
