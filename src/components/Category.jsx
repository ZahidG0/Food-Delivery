import { CiBurger } from "react-icons/ci";
import { FaBorderAll } from "react-icons/fa";
import { FaL } from "react-icons/fa6";
import { LuDessert } from "react-icons/lu";
import { MdDinnerDining, MdFaceRetouchingNatural, MdFreeBreakfast, MdLunchDining } from "react-icons/md";

export const categories = [
    {
        id: 1,
        name: "All",
        image: <FaBorderAll className="w-16 h-16 text-green-500" />
    },
    {
        id: 2,
        name: "Breakfast",
        image: <MdFreeBreakfast className="w-16 h-16 text-green-500" />
    },
    {
        id: 3,
        name: "Soups",
        image: <MdLunchDining className="w-16 h-16 text-green-500" />
    },
    {
        id: 4,
        name: "Pasta",
        image: <MdDinnerDining className="w-16 h-16 text-green-500" />
    },
    {
        id: 5,
        name: "Main-Course",
        image: <CiBurger className="w-16 h-16 text-green-500" />
    },
    {
        id: 6,
        name: "Pizza",
        image: <LuDessert className="w-16 h-16 text-green-500" />
    },
    {
        id: 7,
        name: "Burger",
        image: <MdFaceRetouchingNatural className="w-16 h-16 text-green-500" />
    },
]