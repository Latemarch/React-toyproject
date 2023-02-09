import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { FiAlignJustify } from 'react-icons/fi'

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

const toDos = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function App() {
  const onDrageEnd = () => {}
  return (
    <>
      <DragDropContext onDrageEnd={onDrageEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                  {toDos.map((todo, index) => (
                    <Draggable draggableId={todo} key={index} index={index}>
                      {(magic) => (
                        <Card
                          ref={magic.innerRef}
                          {...magic.draggableProps}
                          {...magic.dragHandleProps}
                        >
                          {todo}
                          {console.log(todo, index)}
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
    </>
  )
}

export default App
