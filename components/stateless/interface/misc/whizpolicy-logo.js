import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const WhizpolicyLogo = () => {
  return (
    <Link href="/dashboard">
      <a>
        <Image
          src="/whizpolicy-blue-gray.svg"
          alt="WhizPolicy Logo"
          width={106}
          height={67}
        />
      </a>
    </Link>
  );
};
export default WhizpolicyLogo;
