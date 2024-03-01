export interface Post {
  id: string | number;
  title: string;
  body: string;
}

export interface InitialState {
  post: Post;
  cachedId: number;
}

export interface Action {
  type: string;
  payload: Post | number;
}
