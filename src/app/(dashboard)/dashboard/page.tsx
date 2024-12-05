import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return redirect("/");
  }
  return (
    <>
      <h1 className="text-7xl font-bold text-white">Hello</h1>
    </>
  );
}
