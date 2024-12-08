"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { UrlObject } from "url";

interface Props {
  hrf: string | UrlObject;
  children: React.ReactNode;
}
const NavLink = ({ hrf, children }: Props) => {
  const router = useRouter();
  const isActive = router.pathname === hrf;

  return (
    <div>
      <Link href={hrf}>
        <a className={` ${isActive && "  text-[#007580] "} `}> {children} </a>
      </Link>
    </div>
  );
};

export default NavLink;
