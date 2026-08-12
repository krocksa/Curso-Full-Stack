import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4 p-3">
      <div className="flex flex-row gap-12">
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
        <div>
          <form className="flex flex-col gap-2 w-75">
            <h1 className="ml-2 text-2xl font-semibold">Signup</h1>

            <div className="flex flex-col">
              <label className="ml-2 font-semibold">Name</label>
              <Input placeholder="Name" />
            </div>

            <div className="flex flex-col">
              <label className="ml-2 font-semibold">Email</label>
              <Input placeholder="Email" />
            </div>

            <div className="flex flex-col">
              <label className="ml-2 font-semibold">Password</label>
              <Input placeholder="Name" />
            </div>

            <div className="flex flex-col">
              <label className="ml-2 font-semibold">Confirm Password</label>
              <Input placeholder="Confirm Password" />
            </div>

            <Button className="bg-[#11CC95] hover:bg-[#0F946D] font-bold w-full">
              Submit
            </Button>
            <div className="flex flex-row items-center justify-center gap-2">
              <p className="text-gray-500">Already have an account?</p>
              <Link
                href={"/signin"}
                className="text-[#11CC95] hover:text-[#0F946D] font-semibold"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
//Clase#7/36
