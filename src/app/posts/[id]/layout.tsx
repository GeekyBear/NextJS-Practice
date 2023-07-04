import Link from "next/link";

const fetchSinglePost = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export default async function Post({
  children,
  params,
}: {
  children: any;
  params: { id: string };
}) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <article>
      <h2 className="text-lg font-semibold text-sky-600">{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
}
