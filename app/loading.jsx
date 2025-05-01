import Image from "next/image";
import loader from "@/assets/loader.gif";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={loader} alt="loader" width={100} height={100} />
    </div>
  );
}
