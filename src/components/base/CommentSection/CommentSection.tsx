'use client'

import { useGetVideoCommentsQuery } from "@/lib/api/api"
import { CommentForm } from "./CommentForm"
import { useParams } from 'next/navigation'

const CommentTile = ({ comment, user_id }: any) => {
  return (
    <div className='flex flex-row gap-2 bg-white p-2 rounded-md mb-4 border'>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://api.dicebear.com/8.x/initials/svg?radius=50&seed=${user_id}`}
          alt="avatar"
          width={20}
          height={20}
        />
      </div>

      <div className={""}>
        <p className="text-sm">{user_id}</p>
        <p>{comment}</p>
      </div>
    </div>
  )
}
export const CommentSection = () => {
  const params = useParams<{ "videoId": string; }>()
  const { data } = useGetVideoCommentsQuery(params["videoId"])

  return (
    <div className='w-full p-4 overflow-y-auto flex flex-col gap-4'>
      <CommentForm />
      <div className="">
        {data?.data.comments.map((comment: any) =>
          <CommentTile
            key={comment.id}
            comment={comment.content}
            user_id={comment.user_id}
          />)}
      </div>
    </div>
  )
}