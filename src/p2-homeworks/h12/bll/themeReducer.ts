const initState = {
    theme: 'default'
};
type initStateType = typeof initState
export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => {
    return {
        type: "CHANGE_THEME",
        theme
    }

}; // fix any

type ActionType = ReturnType<typeof changeThemeC>