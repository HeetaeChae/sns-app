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
  mainPosts: [
    {
      id: 1,
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      User: {
        id: 1,
        nickname: "채희태",
      },
      Images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyC3tks5LkwLlHEGt3N9IBZXcNggSWEy9MPaMF7PiGJw&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyC3tks5LkwLlHEGt3N9IBZXcNggSWEy9MPaMF7PiGJw&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyC3tks5LkwLlHEGt3N9IBZXcNggSWEy9MPaMF7PiGJw&s",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "이순신",
          },
          content: "안녕하세요 반갑습니다",
        },
        {
          User: {
            nickname: "홍길동",
          },
          content: "안녕하세요 처음뵙겠습니다",
        },
      ],
    },
  ],
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
