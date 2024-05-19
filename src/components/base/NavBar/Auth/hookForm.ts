import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createUserId = z.object({
  firstName: z.string().min(3, { message: "First name required" }),
  lastName: z.string().min(3, { message: "Last name is required" }),
})

type Inputs = z.infer<typeof createUserId>;

export const useCreateUserHookForm = () => {
  return useForm<Inputs>({
    resolver: zodResolver(createUserId),
    defaultValues: {
      firstName: "",
      lastName: "",
    }
  })
}