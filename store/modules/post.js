import shortid from "shortid";
import { faker } from "@faker-js/faker";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const addPostRequest = () => {
  return {
    type: "ADD_POST_REQUEST",
  };
};
export const removePostRequest = (data) => {
  return {
    type: "REMOVE_POST_REQUEST",
    data,
  };
};

const dummyPost = {
  _id: shortid.generate(),
  writer: {
    _id: shortid.generate(),
    nickname: faker.name.findName(),
  },
  content: faker.lorem.paragraph(),
  images: [
    {
      src: faker.image.imageUrl(),
    },
    {
      src: faker.image.imageUrl(),
    },
    {
      src: faker.image.imageUrl(),
    },
  ],
};

const initialState = {
  addPostLoadding: false,
  addPostDone: false,
  addPostError: false,
  removePostLoading: false,
  removePostDone: false,
  removePostError: false,
  posts: [
    {
      _id: 1,
      writer: {
        _id: 1,
        nickname: "채희태",
      },
      content: faker.lorem.paragraph(),
      images: [
        {
          src: faker.image.imageUrl(),
        },
        {
          src: faker.image.imageUrl(),
        },
        {
          src: faker.image.imageUrl(),
        },
      ],
      comments: [
        {
          user: {
            nickname: "이순신",
          },
          content: "안녕하세요 반갑습니다",
        },
        {
          user: {
            nickname: "홍길동",
          },
          content: "안녕하세요 처음뵙겠습니다",
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoadding: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostLoadding: false,
        addPostDone: true,
        posts: [dummyPost, ...state.posts],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoadding: false,
        addPostError: true,
      };
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoadding: true,
      };
    case REMOVE_POST_SUCCESS:
      const Idx = state.posts.findIndex((post) => post.id === action.data.id);
      const removePost = { ...state.posts[Idx] };
      const removePosts = state.posts.filter((post) => post !== removePost);
      return {
        ...state,
        removePostLoadding: false,
        removePostDone: true,
        posts: [...removePosts],
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoadding: false,
        removePostError: true,
      };
    default:
      return state;
  }
};

export default reducer;
