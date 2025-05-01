import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="p-5 flex justify-center items-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
