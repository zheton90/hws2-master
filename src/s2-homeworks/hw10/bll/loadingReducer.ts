const initState = {
    isLoading: false,
}

export const loadingReducer = (state: IniteStateType = initState, action: LoadingActionType): IniteStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
            case 'CHANGE_LOADING':{
                return {isLoading: action.isLoading}
            }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

export type IniteStateType = {
    isLoading: boolean
}