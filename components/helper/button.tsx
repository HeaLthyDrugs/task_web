"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";


export function Button() {
    return (
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2 text-sm"
        >
            {/* <DownloadIcon /> */}
            <span>Download now</span>
        </HoverBorderGradient>
    );
}

const DownloadIcon = () => {
    return (
        <svg width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="m3.25 13.25h9m-8.5-6.5 4 3.5 4-3.5m-4-5v8.5"/>
        </svg>
    );
};
