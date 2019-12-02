const redux=require('redux')
const createStore =redux.createStore

const BUY_CAKE ='BUY_CAKE'

//action:object


//action creator

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
    
}
//reducer (previousState, action)=>newState

//application state has to be represented by a single object
const initialState={
    numOfCakes: 10
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            //ask reducer to make a copy of state by using ...state
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

//redux store
//there is always one store for the entire store
/**
 * Responsibility..
 * 1.Holds application state
 * 2.allows access to state via getState()
 * 3.Allows state to be updated via dispatch(action)
 * 4.Registers listeners via subscribe(listener)
 * 5.Handles unregistering of listeners via the function returned by subscribe(listener)
 */

 //res 1
 const store=createStore(reducer)
 //res 2
 console.log('initial state',store.getState())
 //res 4
 const unsubscribe=store.subscribe(()=> console.log('updated state', store.getState()))

 //res 3
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 unsubscribe()