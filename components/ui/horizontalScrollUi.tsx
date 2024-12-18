import React, { useEffect, useRef, useState } from 'react'

export default function HorizontalScrollUi({
    className,
    children
}: {
    className?: string
    children: React.ReactNode
}) {
    const [isScrollable, setIsScrollable] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScrollability = () => {
            if (containerRef.current) {
                const { scrollWidth, clientWidth } = containerRef.current;
                // Check if content width exceeds container width
                const scrollable = scrollWidth > clientWidth;
                setIsScrollable(scrollable);
            }
        };

        // Check on mount and add resize listener
        checkScrollability();
        window.addEventListener('resize', checkScrollability);

        return () => {
            window.removeEventListener('resize', checkScrollability);
        };
    }, []);

    const scrollHandler = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                return setIsAtEnd(true);
            }
            if (scrollLeft < 5) {
                setIsAtEnd(false)
            }
        }
    };

    const scrollContent = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
            scrollHandler();
            if (isAtEnd) {
                containerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
            }
        }
    };
    return (
        <div
            ref={containerRef}
            onScroll={scrollHandler}
            className={`relative hide-scrollbar w-full flex items-center gap-2 scroll-smooth no-scrollbar my-2 ${className}`}>
                {children}
                {isScrollable && <div className={`
                     top-0 h-[40px] min-w-[20px] 
                    flex justify-center items-center 
                    bg-xDark 
                    transition-transform duration-300
                    sticky right-0
                    `}
                    onClick={scrollContent}
                >
                    <svg className={`
                        transition-transform duration-300
                        ${isAtEnd ? 'rotate-180' : ''}
                    `}
                        width="12"
                        height="12"
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.729594 10.1291C0.589143 9.9885 0.510254 9.79791 0.510254 9.5992C0.510254 9.40049 0.589143 9.2099 0.729594 9.0693L4.19959 5.59996L0.729594 2.13062C0.597114 1.98847 0.524991 1.80046 0.528419 1.6062C0.531847 1.41193 0.610559 1.22658 0.747972 1.0892C0.885385 0.951809 1.07077 0.873112 1.26507 0.869685C1.45937 0.866257 1.64742 0.938367 1.78959 1.07082L5.78959 5.07006C5.93004 5.21066 6.00893 5.40125 6.00893 5.59996C6.00893 5.79867 5.93004 5.98926 5.78959 6.12986L1.78959 10.1291C1.64897 10.2695 1.45834 10.3484 1.25959 10.3484C1.06084 10.3484 0.870219 10.2695 0.729594 10.1291Z"
                            fill="#87909F"
                        />
                    </svg>
                </div>
                }
        </div >
    )
}
