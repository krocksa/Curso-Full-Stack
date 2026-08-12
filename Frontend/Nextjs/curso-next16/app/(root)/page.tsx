import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <div className="flex items-center justify-center gap-4 flex-col">
        <Image src="/logo.webp" alt="FVF Logo" width={100} height={100} />
        <h1>
          <span className="font-bold">FVF</span> Official
        </h1>
        <h2 className="text-3xl font-bold">Welcome to FVF Official!</h2>
        <p className="text-gray-500">
          Official La Vinotinto's Page. Know about all La Vinotinto's news!
        </p>
      </div>
      <div
        className="flex items-center justify-center gap-2
      "
      >
        <Link href={"/signup"}>
          <Button className="bg-[#11CC95] hover:bg-[#0F946D] font-bold">
            Sign Up
          </Button>
        </Link>

        <Link href={"/signin"}>
          <Button className="font-bold hover:bg-gray-300 hover:text-black">
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
}
