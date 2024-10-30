export default function AppReducer(state, action) {
    const index = state.findIndex((item) => item.id == action.id);
    switch(action.type){
        case "edit":
            return state;
        case "rate": {
            const newState = structuredClone(state);
            newState[index].rating = (newState[index].rating + 1) % 11;
            return newState;
        }
        case "delete": {
            const newState = structuredClone(state);
            newState.splice(index, 1);
            return newState;   

        }
    }
}