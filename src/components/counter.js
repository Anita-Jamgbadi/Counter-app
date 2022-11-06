//sets initial count to 0
const initial = 0;

//Custom useReducer hook, useCounter
const useCounter = (state, action) => {
    switch (action.type) {
        case 'ADD':
            if (state < 5000) {
                return (state = state + 1);
            }
            else {
                return (state)
            }

        case 'SUB':
            if (state === 0) {
                return (state)
            }
            else {
                return (state = state - 1)
            };

        case 'RESET':
            return (state = 0);

        case 'SET':
            return (state = action.payload)
            
        default:
            return (state)
        
    }
}

export { initial, useCounter };