import Link from "next/link";

const fetchComments = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul className="text-sm">
      {comments.map((comment: any) => (
        <li key={comment.id}>
          <h2 className="text-sm text-sky-600">{comment.name}</h2>
          <h2>{comment.body}</h2>
        </li>
      ))}
    </ul>
  );
}
