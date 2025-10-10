import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      {/* <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src="/images/logo/logo-white.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
      /> */}
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          width: "",
          height: "",
          paddingTop: "5px",
          marginTop: "5px",
        }}
      >
        {" "}
        World Citizens Alliance
      </h1>
    </Link>
  );
};

export default Logo;
