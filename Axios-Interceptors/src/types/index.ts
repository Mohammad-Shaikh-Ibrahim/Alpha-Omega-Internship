export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface LoginProps {
  onLogin: () => void;
}

export interface PostsProps {
  onLogout: () => void;
}
