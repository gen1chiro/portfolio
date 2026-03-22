import { motion } from 'motion/react';
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import type { AccordionItemProps } from "@/types";

export default function AccordionItem({item, handleToggle, isLastItem}: AccordionItemProps) {
    const {id, position, company, durationFull, durationShort, details, tags, isOpen} = item;

    return (
        <div
            onClick={() => handleToggle(id)}
            className={`w-full flex flex-col items-start justify-center gap-3 ${isLastItem ? '' : 'border-b'} border-black/30 dark:border-zinc-100/30`}>
            <div className= {
                `w-full flex justify-between items-center p-2 cursor-pointer rounded-sm text-sm sm:text-base
            ${isOpen ? 'bg-zinc-900 dark:bg-zinc-200' : ''}
            `}>
                <div className='flex justify-start items-center gap-3'>
                    {isOpen ? <FaChevronDown className='text-xs text-white dark:text-zinc-900'/> : <FaChevronRight className='text-xs dark:text-zinc-100'/>}
                    <h1 className={`${isOpen ? 'text-white dark:text-zinc-900' : ''}`}>{position}</h1>
                    <h1 className={`font-semibold ${isOpen ? 'text-white dark:text-zinc-900' : ''}`}>{company}</h1>
                </div>
                <p className={`hidden sm:block ${isOpen ? 'text-white dark:text-zinc-900' : ''}`}>{durationFull}</p>
                <p className={`sm:hidden ${isOpen ? 'text-white dark:text-zinc-900' : ''}`}>{durationShort}</p>
            </div>
            {
                isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className='w-full'>
                        <ul className='list-disc w-full px-10 text-sm sm:text-base dark:marker:text-zinc-100'>
                            {details.map((detail, index) => (
                                <li key={index}><p>{detail}</p></li>
                            ))}
                        </ul>
                        <div className={`flex justify-start items-center gap-6 text-sm sm:text-base px-10 mt-3 ${isLastItem ? '' : 'mb-6'}`}>
                            {tags.map((tag, index) => (
                                <p key={index} className='text-zinc-600 dark:text-zinc-300'>{tag}</p>
                            ))}
                        </div>
                    </motion.div>
                )
            }
        </div>
    )
}