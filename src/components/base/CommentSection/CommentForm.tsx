import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useCreateMessageHookForm } from "./hookForm"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createComment } from "@/lib/api/axios"
import { useParams } from "next/navigation"

export const CommentForm = () => {
  const form = useCreateMessageHookForm()

  // get id from params
  const params = useParams<{ ["videoId"]: string }>()

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: createComment,
    // onError,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          ['videos-comments', params.videoId] as const,
      })
      form.reset()
    }
  })

  return (
    <div className="grid w-full gap-1.5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(data => mutation.mutate({
            video_id: params.videoId,
            content: data.content
          }))}
          className="space-y-4 grid grid-1">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type your message here."
                    id="message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!form.formState.isValid}
          >
            Send message
          </Button>
        </form>
      </Form>
    </div>
  )
}