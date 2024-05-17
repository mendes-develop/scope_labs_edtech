'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SLInput } from "../base/SLInput"
import { useCreateHookForm, onSubmit } from "./hookForm"

export function SheetDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors } } = useCreateHookForm()

  errors.title && console.log(errors.title.message)
  errors.description && console.log(errors.description.message)
  errors.videoUrl && console.log(errors.videoUrl.message)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          Start Adding your videos!
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* <SLInput />
          <SLInput />
          <SLInput /> */}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Title
            </Label>
            <Input
              {...register("title")}
              id="username" placeholder="Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Description
            </Label>
            <Input
              {...register("description")}
              id="username" placeholder="Great Video" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Video URL
            </Label>
            <Input
              {...register("videoUrl")}
              id="username" placeholder="https://youtu.be/ZvwUzcMvKiI?si=iXnEpmulBN4lnkKR" className="col-span-3" />
          </div>

        </div>
        <SheetFooter>
          <SheetClose asChild onClick={handleSubmit(onSubmit)}>
            <Button type="submit" >Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
