export enum CounterActionType {
 ADD = 'COUNTER/ADD',
 DECREMENT = 'COUNTER/DECREMENT',
 INCREMENT = 'COUNTER/INCREMENT',
}

export interface CounterActionAdd {
  type: typeof CounterActionType.ADD
  amount: number;
}

export interface CounterActionDecrement {
  type: typeof CounterActionType.DECREMENT
}

export interface CounterActionIncrement {
  type: typeof CounterActionType.INCREMENT
}

export const add = (amount: number): CounterActionAdd => ({
  amount,
  type: CounterActionType.ADD
})

export const decrement = (): CounterActionDecrement => ({
  type: CounterActionType.DECREMENT
})

export const increment = (): CounterActionIncrement => ({
  type: CounterActionType.INCREMENT
})

export type CounterAction =
    ReturnType<typeof add>
  | ReturnType<typeof decrement>
  | ReturnType<typeof increment>

