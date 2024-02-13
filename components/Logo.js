import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const staticLogo = (
    <div className="-z-100 absolute invisible w-20 h-13 block mx-auto border-solid border-2 border-black rounded-md">
      <Image
        src="https://github.com/equitablefactor/equitable-factor/assets/75151961/7926cd60-23f8-4df0-9649-e94ff9e6c382"
        width={122}
        height={83}
        alt="Equitable Factor logo"
      />
    </div>
  );

  const dynamicLogo = (
    <Link href="/">
      <a className="transition delay-75 hover:text-yellow-400 duration-500 font-math italic text-3xl text-white hover:drop-shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
        <div className="w-24 h-16 flex items-center justify-center block border-solid border-2 border-black bg-black">
          {'E(x)'}
        </div>
      </a>
    </Link>
  );
  return (
    <>
      {/* Render the static logo for SEO purposes but hide it behind the dynamic logo */}
      {staticLogo}
      {dynamicLogo}
    </>
  );
};

export default Logo;
