import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export async function ListOfPosts() {
  try {
    const posts = await fetchPosts();

    return posts.slice(0, 5).map((post: any) => (
      <article key={post.id}>
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <h2 className="text-lg font-semibold text-sky-600">{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </Link>
      </article>
    ));
  } catch (error) {
    console.log(error);
  }
}
