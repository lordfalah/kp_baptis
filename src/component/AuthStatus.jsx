"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { LogOut, LogIn } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Dashboard from "@/assets/icon/Dashboard";
import { Fragment } from "react";
import UserPlus from "@/assets/icon/UserPlus";
import Home from "@/assets/icon/Home";
import Cliboard from "@/assets/icon/Cliboard";
import BarThree from "@/assets/icon/BarThree";

const AuthStatus = () => {
  const { data: session } = useSession();
  const role = session && session?.token?.role;

  return (
    <div>
      {session && session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image
              src={session?.user?.image}
              width={150}
              height={150}
              className="w-8 h-8 rounded-full cursor-pointer"
              alt={session?.user?.name}
              priority
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-20">
            <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {role === "ADMIN" && (
                <DropdownMenuItem>
                  <Dashboard className="mr-2 h-4 w-4" />
                  <Link href={"/dashboard"}>Dashboard</Link>
                  <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>

            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={"/login"} className="text-black flex items-center gap-x-2">
          <LogIn className="w-4 h-4" /> <span>Sign In</span>
        </Link>
      )}
    </div>
  );
};

export const AuthStatusMobile = () => {
  const { data: session } = useSession();
  const role = session && session?.token?.role;

  return (
    <div className="md:hidden my-auto">
      {session && session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image
              src={session?.user?.image}
              width={150}
              height={150}
              className="w-8 h-8 rounded-full cursor-pointer"
              alt={session?.user?.name}
              priority
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-20">
            <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {role === "ADMIN" ? (
                <Fragment>
                  <DropdownMenuItem>
                    <Dashboard className="mr-2 h-4 w-4" />
                    <Link href={"/dashboard"}>Dashboard</Link>
                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Fragment>
              ) : (
                <Fragment>
                  <DropdownMenuItem>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <Link href={"/register"}>Register</Link>
                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Home className="mr-2 h-4 w-4" />
                    <Link href={"/"}>Home</Link>
                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Cliboard className="mr-2 h-4 w-4" />
                    <Link href={"#how_it_works"}>How</Link>
                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Fragment>
              )}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button">
              <BarThree />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-20">
            <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Home className="mr-2 h-4 w-4" />
                <Link href={"/"}>Home</Link>
                <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Cliboard className="mr-2 h-4 w-4" />
                <Link href={"#how_it_works"}>How</Link>
                <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <LogIn className="mr-2 h-4 w-4" />
                <Link href={"/login"} className="text-black">
                  Sign In
                </Link>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default AuthStatus;
