export function reducer(state: any, action: any) {
    switch (action.type) {
        case "NAME":
            state.user.name = action.payload
            break
        case "AGE":
            state.user.age = action.payload
            break
        case "EMAIL":
            state.user.email = action.payload
            break
        case "ADD_USER":
            state.users.push(state.user)
            state.user = {name: "", age: 0, email: ""}
            break
    }
    return { ...state }
}
