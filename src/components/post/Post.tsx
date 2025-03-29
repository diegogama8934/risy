import { Button } from "../ui/button";
import { Input, Divider, Image as AntImage } from "antd";
import { fakePosts } from "@/constants/Post";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Post as IPost } from "@/interfaces/Post";


export function Post({ title, description, images, comments }: IPost) {
  const { id } = useParams();
  const router = useRouter();
  const singleFakePost = fakePosts.find(post => post.id === id);

  return (
    <div className="flex flex-col gap-4 p-8 w-full border rounded-2xl bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold ">{title}</h1>
        <Button
          onClick={() => router.push(`/users/providers/${singleFakePost?.userId}`)}
        >
          Me interesa
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <p>{description}</p>
        </div>

        <div className="flex-1 flex gap-2 flex-wrap">
          {
            images.map(image => {
              return (
                <AntImage
                  key={image}
                  src={image}
                  alt=""
                  width={192}
                  height={192}
                  className="object-cover rounded-lg"
                  fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL3FeRfpb0YfZ168d3qcJg20m63e4AAXx8A&s"
                />
              )
            })
          }
        </div>

        <form className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Comentarios</h3>
          <div className="flex flex-col gap-2">
            {comments.map(comment => (
              <div key={comment.id} className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border">
                <Image
                  src={comment.userImage}
                  alt={comment.username}
                  width={32}
                  height={32}
                  className="rounded-full !w-10 !h-10"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold">{comment.username}</h4>
                  <p className="text-sm">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>

          <Divider type="horizontal" />

          <p className="text-sm">Escribe un comentario</p>

          <Input.TextArea
            autoSize={{ minRows: 2, maxRows: 4 }}
            placeholder="Escribe un comentario"
          />
          <Button
            className="w-fit self-end"
          >
            Comentar
          </Button>
        </form>

      </div>
    </div>
  );
}