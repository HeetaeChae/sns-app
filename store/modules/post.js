const dummyPost = {
  id: 2,
  content: "더미데이터 입니다.",
  User: {
    id: 1,
    nickname: "채희태",
  },
  Images: [],
  Comments: [],
};

const ADD_POST = "ADD_POST";

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

const initialState = {
  mainPosts: [],
  imagePaths: [],
  postAdded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
