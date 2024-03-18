"use client"

import Link from "next/link"
import {HiChevronLeft,HiChevronRight} from "react-icons/hi"
import { usePathname,useSearchParams } from "next/navigation"
import clsx from "clsx"
import { boolean, number } from "zod"
import { dir } from "console"
import { generatePagination } from "@/lib/util"

const pagination = ({totalPages}:{totalPages:number}) => {

    const pathname = usePathname()
    const searchParam = useSearchParams()
    const currentPage = Number(searchParam.get("page")) || 1

    const createPageURL = (pageNumber:string | number) => {
        const params = new URLSearchParams(searchParam)
        params.set("page",pageNumber.toString())

        return `${pathname}?${params.toString()}`
    }

    const allPages = generatePagination(currentPage,totalPages)

    const PaginationNumber = ({
        page,
        href,
        position,
        isActive
    }:{
        page: number | string;
        href: string;
        position?: "first" | "last" | "middle" | "single";
        isActive: boolean;
    }
    ) => {
        const className = clsx("flex h-10 w-10 items-center justify-center rounded-sm text-sm border",{
            "rounded-l-sm":position === "first" || position === "single",
            "rounded-r-sm":position === "last" || position === "single",
            "z-10 bg-blue-100 border-blue-500 text-white":isActive,
            "hover:bg-gray-100":!isActive && position !== "middle",
            "text-gray-300 pointer-events-none":position === "middle"
        })

        return isActive && position === "middle" ? (
            <div className={className}>{page}</div>
        ):
        (
            <Link href={href} className={className}>{page}</Link>
        )
    }


    const PaginationArrow = ({
        href,
        direction,
        isDisabled
    }:{
        href: string;
        direction: "left" | "right";
        isDisabled?: boolean;
    }) => {
        const className = clsx("flex h-10 w-10 items-center justify-center rounded-sm text-sm border",{
            "pointer-events-none text-gray-300":isDisabled,
            "hover:bg-gray-100":!isDisabled,
            "mr-2":direction === "left",
            "ml-2":direction === "right"
        })

        const icon = direction === "left" ? <HiChevronLeft size={20}/> : <HiChevronRight size={20}/>

        return isDisabled? (
            <div className={className}>{icon}</div>
        ):
        (
            <Link href={href} className={className}>{icon}</Link>
        )
    }

  return (
    <div className="inline-flex">
        <PaginationArrow
         direction="left" 
         href={createPageURL(currentPage-1)} 
         isDisabled={currentPage <= 1}
         />

        <div className="flex -space-x-2">
            {allPages.map((page,index) => {
                let position: "first" | "last" | "middle" | "single" | undefined;

                if(index === 0) position == "first";
                if(index === allPages.length - 1) position == "last";
                if(allPages.length === 1) position == "single";
                if(page === "...") position = "middle";

                return (
                    <PaginationNumber
                     key={index}
                     page={page}
                     href={createPageURL(page)}
                     position={position}
                     isActive={page === currentPage}
                    />
                )
                })}
        </div>

        <PaginationArrow
         direction="right" 
         href={createPageURL(currentPage+1)} 
         isDisabled={currentPage >= totalPages}
         />
    </div>
  )
}

export default pagination