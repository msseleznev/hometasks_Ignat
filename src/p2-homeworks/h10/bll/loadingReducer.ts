const initState = {
    isLoading: false
}

type initStateType = typeof initState

export const loadingReducer = (state: initStateType = initState, action: TogglePreloaderType): initStateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPE.TOGGLE_PRELOADER: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}


export const loadingAC = (isLoading: boolean): TogglePreloaderType => {
    return {
        type: ACTIONS_TYPE.TOGGLE_PRELOADER,
        isLoading

    }
} // fix any


enum ACTIONS_TYPE {
    TOGGLE_PRELOADER = 'TOGGLE_PRELOADER',
}

type TogglePreloaderType = {
    type: ACTIONS_TYPE.TOGGLE_PRELOADER
    isLoading: boolean
}