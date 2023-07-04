import Image from "next/image";
import Link from "next/link";

const fetchComments = async (id: string) => {
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
      {comments.map(
        ({
          postId,
          id,
          name,
          email,
          body,
        }: {
          postId: string;
          id: string;
          name: string;
          email: string;
          body: string;
        }) => (
          <li key={id}>
            <Image
              width={50}
              height={50}
              alt={name}
              src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${email}`}
            />
            <h2 className="text-sm text-sky-600">{name}</h2>
            <h2>{body}</h2>
          </li>
        )
      )}
    </ul>
  );
}
