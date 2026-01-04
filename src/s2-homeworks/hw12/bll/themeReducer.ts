
export type IniteStateType = {
    themeId: number;
}

const initState: IniteStateType = {
    themeId: 1,
}



export const themeReducer = (state = initState, action: Action): IniteStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = ( id: number ) => ({ type: 'SET_THEME_ID', id } as const)  // fix any

export type changeThemeIdAT = ReturnType<typeof changeThemeId>

export type Action = changeThemeIdAT