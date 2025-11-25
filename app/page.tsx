import Hero from '@/components/hero/hero';
import Experience from '@/components/experience/experience';
import Education from '@/components/experience/education';
import Divider from '@/components/shared/divider';

export default function Home() {
  return (
    <div className="w-responsive flex flex-col justify-center items-center gap-10">
        <Hero />
        <Divider />
        <Experience />
        <Divider />
        <Education />
    </div>
  );
}
