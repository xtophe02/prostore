import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./menu";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex items-center justify-between">
        <div className="flex justify-start items-center">
          <Link href="/" className="flex justify-start items-center">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority
            />
            <span className="hidden lg:block text-2xl font-bold ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}
