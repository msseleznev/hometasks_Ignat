import {UserType} from "../HW8"

type ActionType = {
    type: "sort" | "check"
    payload: "up" | "down" | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": {
            const sortName = [...state].sort((a, b) => a.name <= b.name ? -1 : 1)
            if (action.payload === 'up')
                return sortName
            else return sortName.reverse()
        }
        case "check": {
            return state.filter(s => s.age >= action.payload)
        }
        default:
            return state
    }
}