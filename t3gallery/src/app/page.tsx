import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://r3uvndu328.ufs.sh/f/xTpNYJOpXr71L7ME1YJcKBkZtHY0sXfVmiOAQu83q6jr4UoN",
  "https://r3uvndu328.ufs.sh/f/xTpNYJOpXr71dnT7aLbVw5gcUK4ZmEkdyGjMACQxL6iJFpYs",
  "https://r3uvndu328.ufs.sh/f/xTpNYJOpXr71tJUdt36P1we32cYf78xn4OTjXAb9iLoplDJv",
  "https://r3uvndu328.ufs.sh/f/xTpNYJOpXr71ogLkzMmAvrQ5zXVO39SWymEiGN04n61MLhJj"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
          ))}

        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
     Hello (gallery in progress)
    </main>
  );
}
