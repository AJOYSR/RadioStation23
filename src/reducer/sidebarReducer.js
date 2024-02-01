/**
 * The sidebarReducer function is a JavaScript reducer that toggles the state of the sidebar by
 * updating the isSidebarOpen property.
 * @param state - The `state` parameter represents the current state of the sidebar. It is an object
 * that contains the properties and values representing the state of the sidebar, such as whether it is
 * open or closed.
 * @param action - The `action` parameter is an object that describes the action being performed. It
 * typically has a `type` property that indicates the type of action being performed. In this case, the
 * `action` parameter is used to check if the `type` property is equal to "TOGGLE_SIDEBAR
 * @returns The sidebarReducer function returns a new state object with the isSidebarOpen property
 * toggled to its opposite value.
 */
const sidebarReducer = (state, action) => {
    if(action.type === "TOGGLE_SIDEBAR"){
        return { ...state, isSidebarOpen: !state.isSidebarOpen}
    }
    throw new Error(`No matching "${action.type} action type`);
}

export default sidebarReducer;