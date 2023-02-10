import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import DraggableCard from './DraggableCard.tsx'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  flex-direction: column;
  display: flex;
  width: 90%;
  min-height: 200px;
  padding: 10px 0;
  border-radius: 5px;
  align-items: center;
`
const Title = styled.h1`
  padding-bottom: 10px;
`
const Area = styled.div<{ isDraggingOver: boolean }>`
  background-color: ${(props) => (props.isDraggingOver ? 'pink' : 'skyblue')};
  width: 100%;
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 10px 0px;
`
interface Iboard {
  toDos: string[]
  boardId: string
}

export default function Board({ toDos, boardId }: Iboard) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((todo, index) => (
              <DraggableCard
                key={`${todo}${index}`}
                index={index}
                todo={todo}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  )
}
