export default function Portfolio() {
    return (
        <>
            {/* {//!NAVBAR} */}
            <nav className="md:flex justify-between items-center text-white bg-gradient-to-r from-gray-600 to-gray-800 px-20 py-4">
                <div className="flex-row">
                    <h1 className="mx-auto text-4xl self-end text-green-400">Pilton</h1>
                    <h1 className="text-xl hidden md:inline-block self-end ml-6">
                        <a href="#!" className="hover:text-red-500">Home</a>
                    </h1>
                    <h1 className="text-xl hidden md:inline-block self-end ml-6">
                        <a href="#!" className="hover:text-red-500">Portfolio</a>
                    </h1>
                    <h1 className="text-xl hidden md:inline-block self-end ml-6">
                        <a href="#!" className="hover:text-red-500">Contact</a>
                    </h1>
                </div>

                <div className="hidden md:block justify-self-end">
                    <button className="py-2 px-4 text-xl text-black bg-yellow-400 rounded-lg shadow
            hover:bg-yellow-300 outline-none">Contact me</button>
                </div>
            </nav>

            {/* //!PROFILE  */}
            <div className="flex flex-col md:flex-row items-center md:py-10 md:px-20 space-x-6 bg-gradient-to-r from-gray-600 to-gray-700 text-white">
                {/* left  */}
                <div className="w-100 md:w-1/2 px-4">
                    <p className="text-2xl text-red-600"> - Introducing</p>
                    <h1 className="text-4xl md:text-6xl">I'm Pilton </h1>
                    <h1 className="text-4xl md:text-6xl">Swrang Brahma</h1>

                    <p className="my-6">Since 2020 when the world was shut down and everyone was locked in their house, I started learning making websites on my own. So far, I have make 3 big projects and multiple small projects all on my own .</p>

                    <div className="sm:text-left text-center">
                        <button className="py-3 mb-4 md:mb-0 px-6 text-xl text-black bg-yellow-400 rounded-lg shadow
          hover:bg-yellow-300 outline-none">Contact me</button>
                    </div>
                </div>

                {/* right  */}
                <div className="w-100 md:w-1/2 text-center">
                    <img className="w-100 relative right-3 md:right-0" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" />
                </div>
            </div>

            {/* //! PROJECTS - 00 */}
            <div className="flex md:flex-row flex-col items-center p-6 md:p-20 md:space-x-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                {/* left  */}
                <div className="md:w-1/2 mb-6 md:mb-0 flex-row flex-wrap justify-between order-2 sm:order-1 ">

                    <div className="md:w-1/2 relative bg-gray-900 text-white text-center p-6 md:right-4 rounded-lg
          bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500">
                        <h1 className="text-2xl capitalize font-semibold mb-4  mt-4">Product desginger</h1>
                        <p className="text-lg">Lorem Ips dolor sit amet, consectetur adip</p>
                    </div>

                    <div className="md:w-1/2 relative bg-gray-900 text-white text-center p-6 mt-4 rounded-lg
          bg-gradient-to-r from-red-300 via-red-400 to-red-500">
                        <h1 className="text-2xl capitalize font-semibold mb-4 mt-4">Logo desginger</h1>
                        <p className="text-lg">Lorem Ips dolor sit amet, consectetur adip</p>
                    </div>

                    <div className="md:w-1/2 relative bg-gray-900 text-white text-center p-6 md:right-4 mt-4 rounded-lg
          bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                        <h1 className="text-2xl capitalize font-semibold md:mb-4 mt-4">UI/UX desginger</h1>
                        <p className="text-lg">Lorem Ips dolor sit amet, consectetur adip</p>
                    </div>

                    <div className="md:w-1/2 relative bg-gray-900 text-white text-center p-6 mt-6 rounded-lg
          bg-gradient-to-r from-yellow-600 to-red-600">
                        <h1 className="text-2xl capitalize font-semibold md:mb-4 mt-4">Icon desginger</h1>
                        <p className="text-lg">Lorem Ips dolor sit amet, consectetur adip</p>
                    </div>

                </div>

                {/* right  */}
                <div className="md:w-1/2 sm:mb-6 order-1 sm:order-2 ">
                    <p className="text-2xl text-red-600"> - Skills</p>
                    <h1 className="md:text-6xl text-4xl capitalize">Why hire me for next project ?</h1>

                    <p className="my-6 text-xl">I have been working on web devlopement and deployment ever since I started learning on my own. I would provide you with the most advanced technologies available on the market and deliver the project within short period.</p>
                </div>
            </div>

            {/* //! PROJECTS - 01 */}

            <div className="flex md:flex-row flex-col p-4 items-center md:p-20 md:space-x-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                {/* left  */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <p className="text-2xl text-red-600"> - Project 01</p>
                    <h1 className="md:text-6xl text-4xl capitalize">NEWBO Entertainment</h1>

                    <p className="my-6 text-xl">An entertainment website and website app where people can signup their account and enjoy the shows available on the website. A high-end user friendly designed website with amazing SEO and incredibly fast loading speed.</p>

                    <a className="text-red-300 text-xl hover:text-red-500" href="#!"> ➡ Read more</a>
                </div>

                {/* right  */}
                <div className="md:w-1/2 flex-row flex-wrap justify-between">
                    <div className="relative md:py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 transform sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <img className="w-100" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img" />
                        </div>

                    </div>

                </div>
            </div>

            {/* //! PROJECTS - 02 */}

            <div className="flex md:flex-row flex-col items-center p-6 md:p-20 md:space-x-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                {/* left  */}
                <div className="md:w-1/2 order-2 sm:order-1 flex-row flex-wrap justify-between">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-600 transform sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <img className="w-100" src="https://images.unsplash.com/photo-1541018939203-36eeab6d5721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img" />
                        </div>

                    </div>
                </div>

                {/* right  */}
                <div className="md:w-1/2 order-1 sm:order-2 mb-6 md:mb-0">
                    <p className="text-2xl text-red-600"> - Project 02</p>
                    <h1 className="md:text-6xl text-4xl capitalize">Aryabhatta Ashram</h1>

                    <p className="my-6 text-xl">An Education website for UPSC aspirants where users can interact with the teachers. As  the lockdown is still going on this was indeed a thing to build especially for students .</p>

                    <a className="text-red-300 text-xl hover:text-red-500 mb-6" href="#!"> ➡ Read more</a>
                </div>
            </div>

            {/* //! PROJECTS - 03 */}
            <div className="flex md:flex-row flex-col p-6 items-center md:p-20 md:space-x-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                {/* left  */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <p className="text-2xl text-red-600"> - Project 03</p>
                    <h1 className="md:text-6xl text-4xl capitalize">New Millances Store</h1>

                    <p className="my-6 text-xl">A shopping app for a particular shop demanded by the client inorder to grow their store reach and sell. Users can create their account and buy the available items with inbuilt safe and secured payment method .</p>

                    <a className="text-red-300 text-xl hover:text-red-500" href="#!"> ➡ Read more</a>
                </div>

                {/* right  */}
                <div className="md:w-1/2 flex-row flex-wrap justify-between">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 transform sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <img className="w-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img" />
                        </div>

                    </div>
                </div>
            </div>

            {/* //! BUTTON */}
            <div className="flex items-center p-6 md:pb-20 bg-gradient-to-r from-gray-700 to-gray-800 ">
                <button className="mx-auto bg-gray-300 hover:bg-gray-200 text-xl text-black outline-none rounded-lg shadow py-3 px-8">View All</button>
            </div>

            {/* //! ACHIVEMENTS */}
            <div className="flex md:flex-row flex-col items-center md:p-6 md:pb-20 md:space-x-4 px-20 text-center bg-gradient-to-r from-gray-700 to-gray-800 ">
                <div className="md:w-1/4 bg-gray-900 p-6 my-4 md:py-10 md:px-6 rounded-lg">
                    <h1 className="text-6xl mb-4 text-green-500">24</h1>
                    <h1 className="text-3xl text-white">
                        Happy client</h1>
                </div>
                <div className="md:w-1/4 bg-gray-900 p-6 my-4 md:py-10 md:px-6 rounded-lg">
                    <h1 className="text-6xl mb-4 text-green-500">24</h1>
                    <h1 className="text-3xl text-white">Project Done</h1>
                </div>
                <div className="md:w-1/4 bg-gray-900 p-6 my-4 md:py-10 md:px-6 rounded-lg">
                    <h1 className="text-6xl mb-4 text-green-500">2</h1>
                    <h1 className="text-3xl text-white">Award Winning</h1>
                </div>
                <div className="md:w-1/4 bg-gray-900 p-6 my-4 md:py-10 md:px-6 rounded-lg">
                    <h1 className="text-6xl mb-4 text-green-500">4</h1>
                    <h1 className="text-3xl text-white">Years Experience</h1>
                </div>
            </div>

            {/* //! QUOTE */}

            <div className="flex md:flex-row flex-col items-center p-6 md:p-20 md:space-x-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                {/* left  */}
                <div className="md:w-1/2 flex-row flex-wrap mb-6 md:mb-0">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-red-600 transform sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <img className="w-100" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" />
                        </div>

                    </div>
                </div>

                {/* right  */}
                <div className="md:w-1/2 sm:mb-6">
                    <h1 className="text-5xl text-green-400 mb-0">"</h1>
                    <p className="my-6 text-2xl">Everyday is a new day to live , to learn so always be grateful for life . For life is to be lived to its fullest and if you like my work then do consider to contact me. Thank you </p>

                    <h1 className="text-3xl text-green-400 mb-0">Pilton Swrang Brahma</h1>
                </div>
            </div>

            {/* //! WORK TOGETHER */}
            <div className="flex px-4 py-20 md:p-20 bg-gradient-to-r from-gray-700 to-gray-800 text-white text-center">
                <div className="mx-auto px-6 md:px-12 md:w-3/4 py-10 bg-gray-900 rounded-3xl	">
                    <h1 className="text-4xl capitalize border-t-4 border-yellow-700 md:mb-4 pt-4">Let's Work together</h1>
                    <p className="text-lg md:w-3/4 mx-auto my-6">
                        Take your business, work, art to the next level by getting your own website with all the essential features like amazing SEO, incredibly fast loading speed , image optimization and secured website.
                    </p>
                    <button className="py-2 px-4 text-xl text-black bg-yellow-400 rounded-lg shadow
          hover:bg-yellow-300 outline-none">Contact me</button>
                </div>
            </div>

            {/* //! FOOTER  */}
            <footer>
                <div className="text-center py-6 px-12 bg-gray-900 text-white">
                    Copyright &copy; 2021 - Infinity All Rights Reserved.
                </div>
            </footer>
        </>
    )
}
