import deepFreeze from 'deep-freeze'

export const reducerReduce = (reducer, actions) => {
 var state = reducer(undefined, {type: 'NO_SUCH_ACTION'})
 for (var action of actions) {
   deepFreeze(state)
   state = reducer(state, action)
 }
 return state
}