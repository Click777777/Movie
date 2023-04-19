import { RiMovie2Line, RiLockPasswordLine } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { TfiSettings } from "react-icons/tfi";
import { FaHeart, FaUsers, FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";

export const SideLink = [
  // {
  //   name: "Add Movie",
  //   link: "/addmovie",
  //   icon: RiMovie2Line,
  // },
  // {
  //   name: "Categories",
  //   link: "/categories",
  //   icon: HiViewGridAdd,
  // },
  // {
  //   name: "Dashboard",
  //   link: "/dashboard",
  //   icon: BsFillGridFill,
  // },
  // {
  //   name: "Movie List",
  //   link: "/movielist",
  //   icon: FaListUl,
  // },
  // {
  //   name: "User",
  //   link: "/user",
  //   icon: FaUsers,
  // },
  {
    name: "Favourite Movies",
    link: "/favourite",
    icon: FaHeart,
  },
  {
    name: "Change Password",
    link: "/password",
    icon: RiLockPasswordLine,
  },
  {
    name: "Update Profile",
    link: "/profile",
    icon: TfiSettings,
  },
];
