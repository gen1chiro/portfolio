import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function HeroIcons() {
    const GithubMotion = motion.create(FaGithub);
    const LinkedinMotion = motion.create(FaLinkedin);
    const MailMotion = motion.create(IoMdMail);

    return (
        <div className="flex justify-start items-center gap-6 text-2xl font-bold text-[#52525b]">
            <a href='https://github.com/gen1chiro' target='_blank'>
                <GithubMotion
                    whileHover={{
                        scale: 1.1,
                        color: '#171515'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                />
            </a>
            <a href='https://www.linkedin.com/in/jul-leo-javellana-b03832344/' target='_blank'>
                <LinkedinMotion
                    whileHover={{
                        scale: 1.1,
                        color: '#0A66C2'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                />
            </a>
            <MailMotion
                whileHover={{
                    scale: 1.1,
                    color: '#EA4335'
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                }}
            />
        </div>
    )
}