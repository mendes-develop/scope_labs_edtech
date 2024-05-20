import { CreateVideoSheet } from "@/components/base/CreateVideoSheet/CreateVideoSheet";
import { VideoList } from "@/components/base/VideoListComponent/VideoListComponent";

export default function Home() {
  // TODO: pre-fetch

  return (
    <main className="flex  flex-col items-center justify-between">
      <div className="w-full max-w-5xl items-center justify-between  text-sm  py-4 p-2">
        <VideoList />
        <CreateVideoSheet />
      </div>
    </main>
  );
}
