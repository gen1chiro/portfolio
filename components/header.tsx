import Image from 'next/image';
import headerImage from '@/public/images/header.png';

export default function Header() {
    return (
        <header className='w-responsive sticky top-4 z-50 bg-glass-white rounded-sm mt-4 font-medium text-sm'>
            <div className='w-full flex justify-between items-center p-2'>
                <div className='flex justify-center items-center gap-2'>
                    <Image
                        src={headerImage}
                        alt='profile photo'
                        width={25}
                        height={25}
                        className='rounded-sm grayscale-50'
                    />
                    <h1>JJ</h1>
                </div>
                <h1>Bacolod, Philippines</h1>
            </div>
        </header>
    )
}