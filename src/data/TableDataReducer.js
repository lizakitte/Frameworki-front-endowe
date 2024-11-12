export default function TableDataReducer(state, action) {
  switch (action.sortOrder) {
    case "SET_DATA":
      return action.payload;
    case "descending":
      const newState = state.toSorted((first, second) =>
        action.field(second).localeCompare(action.field(first))
      );
      return newState;
    case "ascending": {
      const newState = state.toSorted((first, second) =>
        action.field(first).localeCompare(action.field(second))
      );
      return newState;
    }
    case "natural": {
      return action.payload;
    }
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}
