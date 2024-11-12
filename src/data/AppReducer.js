export default function AppReducer(state, action) {
    const index = state.findIndex((item) => item.id == action.id);
    switch(action.type){
        case "edit":
            const newState = structuredClone(state);
            newState[index] = {...action.person};
            return newState;
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
        case "add": {
            const newState = structuredClone(state);
            newState.push({...action.person});
            return newState;
        }
        default:
            throw new Error(`Unknown action type ${action.type}`)
    }
}