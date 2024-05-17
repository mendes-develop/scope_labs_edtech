'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const createVideoSchema = z.object({
  title: z.string().min(3, { message: "Title required" }),
  description: z.string().min(3, { message: "Description is required" }),
  videoUrl: z.string().url({ message: "Url is required" })
})

type Inputs = z.infer<typeof createVideoSchema>;

export const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
export const useCreateHookForm = () => {
  return useForm<Inputs>({
    resolver: zodResolver(createVideoSchema),
  })
}