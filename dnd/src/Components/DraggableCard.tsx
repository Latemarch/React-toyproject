import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import React from 'react'
const Card = styled.div<{ isDragging: boolean }>`
  display: flex;
  margin: 0 10px;
  border-radius: 5px;
  height: 20px;
  background-color: ${(props) => (props.isDragging ? 'tomato' : 'white')};
  box-shadow: ${(props) =>
    props.isDragging ? '0px 10px 10px rgba(0,0,0,0.5)' : 'none'};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
interface ICard {
  todo: string
  index: number
}

function DraggableCard({ todo, index }: ICard) {
  console.log(todo, 'rendered')
  return (
    <Draggable draggableId={todo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  )
}

export default React.memo(DraggableCard)
