import Link from 'next/link';
import Image from 'next/image';
import  MainButton from './MainButton';

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image
                    src="/logo.png"
                    alt="Car Hub Logo"
                    width={188}
                    height={188}
                    className='object-contain'
                />
            </Link>

            <MainButton 
                title = "Sign In"
                btnType= "button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            
            
            />

        </nav>
    </header>
  )
}

export default NavBar