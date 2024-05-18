import { CreateVideoSheet } from "@/components/base/CreateVideoSheet/CreateVideoSheet";
import { VideoList } from "@/components/base/VideoListComponent/VideoListComponent";

export default function Home() {
  // pre-fetch

  return (
    <main className="flex  flex-col items-center justify-between border">
      <div className="w-full max-w-5xl items-center justify-between  text-sm  py-4 p-2">
        {/* <div className="flex flex-col items-center justify-between w-full border"> */}
        <VideoList />

        <CreateVideoSheet />
      </div>
    </main>
  );
}
