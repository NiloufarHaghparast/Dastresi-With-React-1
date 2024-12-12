import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
 return ( 
  <>
  

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-items-start mx-auto col-24 p-4">
        <a href="https://www.dastresi.com/" className="flex items-center  ">
            <img src="https://www.dastresi.com/images/logo/logo.png" className="h-8" alt="Flowbite Logo"/>
        </a>
        <div className="flex items-center mr-8 space-x-2">
           <form className="max-w-md mx-auto ml-8 mr-5">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
         dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="جستجو محصولات" required />
    </div>
</form>
<ul className="flex flex-row ml-8 font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg pr-12">
                <li>
                    <a href="#" className="text-gray-400 dark:text-white hover:text-blue-950" aria-current="page">باشگاه مشتریان</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 dark:text-white hover:text-blue-950">بلاگ</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 dark:text-white hover:text-blue-950">ارتباط با ما</a>
                </li>
                <li>
                    <a href="#" className="text-gray-400 dark:text-white hover:text-blue-950">درباره ما</a>
                </li>
            </ul>
            <div className="pr-80">
        <button type="button" className="px-3 py-2 text-sm font-medium 
text-center text-orange-500 hover:text-blue-950 bg-gray-100 rounded-lg focus:ring-4 
focus:outline-none  "><FaCartShopping className="w-4 h-5 " />
</button></div>
<div className="pr-2">
 
 <NavLink to="/post" ><button type="button" className="px-3 py-2 text-sm font-medium 
text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
focus:ring-4 focus:outline-none focus:ring-blue-300 
dark:bg-blue-600 dark:hover:bg-blue-700 
dark:focus:ring-blue-800">ورود و ثبت نام</button></NavLink></div>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-16 mr-6
rtl:space-x-reverse text-md">
                <li>
                    <a href="#" className="text-gray-500  
hover:text-red-600" aria-current="page">خانه</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500  
hover:text-red-600">لوازم جانبی موبایل و کامپیوتر</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500  
hover:text-red-600">کابل-مبدل-رابط</a>
                </li>
                <li>
                    <a href="#" className="text-gray-500  
hover:text-red-600">لوازم تولید محتوا</a>
                </li>
                <li>
     <a href="#" className="text-gray-500  
hover:text-red-600">لوازم شبکه</a>
 </li>
 <li>
     <a href="#" className="text-gray-500  
hover:text-red-600">کنسول بازی و لوازم جانبی</a>
 </li>
 <li>
     <a href="#" className="text-gray-500  
hover:text-red-600">لوازم خانگی و شخصی</a>
 </li>
 <li>
     <a href="#" className="text-gray-500  
hover:text-red-600">برند ها</a>
 </li>
            </ul>
        </div>
    </div>
</nav>

  </>
  );
}
 
export default Header;