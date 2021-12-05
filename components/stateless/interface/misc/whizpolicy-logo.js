import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const WhizpolicyLogo = ({ size = 1 }) => {
  return (
    <Link href="/dashboard">
      <a>
        <Image src="/whizpolicy-blue-gray.svg" alt="WhizPolicy Logo" width={106 * size} height={67 * size} />
      </a>
    </Link>
  );
};
export default WhizpolicyLogo;
