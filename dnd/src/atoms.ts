import { atom, selector } from 'recoil'

interface IToDo {
  [key: string]: string[]
}
export const toDoState = atom<IToDo>({
  key: 'toDo',
  default: {
    ToDo: ['a', 'b'],
    Doing: ['c', 'd', 'e'],
    Done: ['f'],
  },
})
