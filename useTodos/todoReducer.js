

export const todoReducer = ( initialState = [], action) => {


    switch (action.type) {
        //aplica cuando se envia la tarea con el formulario
        case '[TODO] Add Todo':

        //recibe todos los parametros y agrega el payload del action al final
        // hay que evitar mutar los arreglos (no usar push)
        return [ ...initialState, action.payload ]
            
        case '[TODO] Remove Todo':

        // se puede usar filter porque no muta el arreglo recibido, sino que devuelve uno nuevo a partir de este

        return initialState.filter( todo => todo.id !== action.payload );
            
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if(todo.id === action.payload ){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
    
        default:
            return initialState;
    }


}