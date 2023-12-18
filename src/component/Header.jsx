import React from "react";
import AuthStatus, { AuthStatusMobile } from "./AuthStatus";
import Link from "next/link";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

const Header = async () => {
  const session = await getAuthSession();

  return (
    <nav className="fixed flex justify-between py-4 sm:py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
      <div className="flex items-center">
        <Image
          src="/image/logo/gsja.png"
          alt="Logo"
          className="w-10 md:w-14 aspect-square"
          width={200}
          height={200}
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <ul className="font-montserrat items-center hidden md:flex">
        {session && session?.token?.role === "USER" && (
          <li className="mx-3 ">
            <Link className="growing-underline" href="/register">
              Register
            </Link>
          </li>
        )}
        <li className="growing-underline mx-3">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="growing-underline mx-3">
          <Link href="/#how_it_works">How</Link>
        </li>
      </ul>
      <div className="font-montserrat hidden md:block my-auto">
        <AuthStatus />
      </div>
      <AuthStatusMobile />
    </nav>
  );
};

export default Header;
