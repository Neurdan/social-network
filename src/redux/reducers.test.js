import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let initialState = {
    posts: [
        {id: 1, message: "Hey, im first post", likesCount: 11},
        {id: 2, message: "Hey, im second post", likesCount: 12}
    ]
}

test('testing profile-reducer', () => {
    //1. test data
    let action = addPostActionCreator("Kolya")

    //2. action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts.length).toBe(3)
});

test('length posts decremented after delete post', () => {
    //1. test data
    let action = deletePost(2)

    //2. action
    let newState = profileReducer(initialState, action)

    //3. expectation
    expect(newState.posts.length).toBe(1)
});
