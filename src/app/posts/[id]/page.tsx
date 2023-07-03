export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div>Este es el post {id}</div>;
}
