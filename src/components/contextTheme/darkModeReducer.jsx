/**
 * The DarkModeReducer function is a reducer for managing the state of a dark mode feature in a React
 * application.
 * @returns The DarkModeReducer function returns an object with a single property "darkMode" whose
 * value depends on the action type. If the action type is "LIGHT", the value of "darkMode" is set to
 * false. If the action type is "DARK", the value of "darkMode" is set to true. If the action type is
 * "TOGGLE", the value of "darkMode
 */
const DarkModeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT": {
            return {
                darkMode: false,
            };
        }
        case "DARK": {
            return {
                darkMode: true,
            };
        }
        case "TOGGLE": {
            return {
                darkMode: !state.darkMode,
            };
        }
        default:
            return state;
    }
};

export default DarkModeReducer;