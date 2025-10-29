import NewsFeed from "@/components/NewsFeed";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-8 bg-white text-black dark:bg-black dark:text-white">
      <NewsFeed />
    </div>
  );
}
