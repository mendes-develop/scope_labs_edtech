'use client'

import { useGetVideoCommentsQuery } from "@/lib/api"

export const CommentSection = () => {
  const { data } = useGetVideoCommentsQuery('54KvaYl8FV6yiezMh5VU')
  console.log({
    data
  })

  return (
    <div className='w-full h-2/5 bg-gray-200 p-4 overflow-y-auto'>
      {/* Comment Components */}
      <div className='bg-white p-4 rounded-md mb-4'>
        <p>This is a comment.</p>
      </div>
      <div className='bg-white p-4 rounded-md mb-4'>
        <p>This is another comment.</p>
      </div>
      {/* Add more comment components here */}
    </div>
  )
}