"use Client"; 
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import React from "react";

function Navbar(){
    const router = useRouter();
    return (<div className="w-full py-4 flex items-center justify-between ">
        <div className="left"></div>
        <div className="search-conatiner flex shrink-0 w-full gap-2 sm:w-fit">
            <Button className="source-code flex items-center gap-2 ">Search</Button>
        </div>
    </div>);
}

export default Navbar;
