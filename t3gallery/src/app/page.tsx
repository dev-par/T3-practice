import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
     Hello (gallery in progress)
    </main>
  );
}
