import { redirect } from "next/navigation";
import { Upload } from "~/app/(dashboard)/dashboard/_components/upload";
import { auth } from "~/server/auth";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return redirect("/");
  }
  return <Upload />;
}
