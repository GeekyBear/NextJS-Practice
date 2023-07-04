import Counter from "./Counter";

export default function PostsLayout({ children }: any) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  );
}
