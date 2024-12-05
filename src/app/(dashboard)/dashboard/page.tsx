import { redirect } from "next/navigation";
import { Uploader } from "~/app/(dashboard)/dashboard/_components/uploader";
import { auth } from "~/server/auth";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return redirect("/");
  }
  return <Uploader />;
}
