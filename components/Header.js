import Image from 'next/image';
import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <div className="w-20 h-13 block mx-auto border-solid border-2 border-black">
        <Image
          src="https://github.com/equitablefactor/equitable-factor/assets/75151961/7926cd60-23f8-4df0-9649-e94ff9e6c382"
          width={122}
          height={83}
          alt="Equitable Factor logo"
        />
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
