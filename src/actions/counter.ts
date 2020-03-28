export enum CounterActionType {
 ADD = 'COUNTER/ADD',
 DECREMENT = 'COUNTER/DECREMENT',
 INCREMENT = 'COUNTER/INCREMENT',
}

export interface CounterActionADD {
  type: typeof CounterActionType.ADD
  amount: number;
}

export interface CounterActionDECREMENT {
  type: typeof CounterActionType.DECREMENT
}

export interface CounterActionINCREMENT {
  type: typeof CounterActionType.INCREMENT
}

export type CounterAction = CounterActionADD | CounterActionDECREMENT | CounterActionINCREMENT

export const add = (amount: number): CounterAction => ({
  amount,
  type: CounterActionType.ADD
})

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT
})

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT
})

