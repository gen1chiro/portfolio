//Taken from react bits
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';

import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';
export interface CarouselItem {
    img: string;
    alt: string;
}

export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
    {
        title: 'Text Animations',
        description: 'Cool text animations for your projects.',
        id: 1,
        icon: <FiFileText className="h-[16px] w-[16px] text-white" />
    },
    {
        title: 'Animations',
        description: 'Smooth animations for your projects.',
        id: 2,
        icon: <FiCircle className="h-[16px] w-[16px] text-white" />
    },
    {
        title: 'Components',
        description: 'Reusable components for your projects.',
        id: 3,
        icon: <FiLayers className="h-[16px] w-[16px] text-white" />
    },
    {
        title: 'Backgrounds',
        description: 'Beautiful backgrounds and patterns for your projects.',
        id: 4,
        icon: <FiLayout className="h-[16px] w-[16px] text-white" />
    },
    {
        title: 'Common UI',
        description: 'Common UI components are coming soon!',
        id: 5,
        icon: <FiCode className="h-[16px] w-[16px] text-white" />
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;

export default function Carousel({
    items = DEFAULT_ITEMS,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
}: CarouselProps): JSX.Element {
    const containerPadding = 0;
    const [containerWidth, setContainerWidth] = useState(0);
    const itemWidth = containerWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0
            }
        };

    return (
        <div
            ref={containerRef}
            className={'flex flex-col items-center relative w-full aspect-video py-2 overflow-hidden'}
        >
            <motion.div
                className="flex w-full grow"
                drag="x"
                {...dragProps}
                style={{
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                transition={
                    isResetting
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 400, damping: 30 }
                }
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
                    const outputRange = [90, 0, -90];
                    const rotateY = useTransform(x, range, outputRange, { clamp: false });
                    return (
                        <motion.div
                            key={index}
                            className={'relative shrink-0 flex flex-col items-start justify-between bg-white rounded-sm overflow-hidden cursor-grab active:cursor-grabbing'}
                            style={{
                                width: itemWidth,
                                height: '100%',
                                rotateY: rotateY
                            }}
                            transition={
                                isResetting
                                    ? { duration: 0 }
                                    : { type: 'spring', stiffness: 400, damping: 30 }
                            }
                        >

                        </motion.div>
                    );
                })}
            </motion.div>
            <div className={'absolute bottom-4 flex justify-center bg-glass-dark shadow-inner shadow-white/30'}>
                <div className="flex justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-[4px] w-[4px] sm:h-[6px] sm:w-[6px] rounded-full cursor-pointer transition-colors duration-150 ${
                                currentIndex % items.length === index
                                    ? 'bg-zinc-100'
                                    : 'bg-zinc-400'
                            }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
