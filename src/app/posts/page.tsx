import { ListOfPosts } from "../components/ListOfPosts";

export default async function Posts({ params }: any) {
  return (
    <section>
      <ListOfPosts />
    </section>
  );
}
