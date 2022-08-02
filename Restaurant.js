import React from 'react'
export default function App() {
    return (
        <div className="bg-gradient-to-br from-gray-50 via-green-50 to-yellow-200 bg-opacity-25 backdrop-filter backdrop-blur-lg">
            <nav className="flex justify-between items-center py-5 px-20">
                <div>
                    <h1 className="text-2xl font-semibold">FoodMan</h1>
                </div>

                <div className="flex-row">
                    <h1 className="text-xl ml-3 hover:text-red-500 duration-300">
                        <a href="#!">Why us ?</a>
                    </h1>
                    <h1 className="text-xl ml-3 hover:text-red-500 duration-300">
                        <a href="#!">Services</a>
                    </h1>
                    <h1 className="text-xl ml-3 hover:text-red-500 duration-300">
                        <a href="#!">Menu</a>
                    </h1>
                    <h1 className="text-xl ml-3 hover:text-red-500 duration-300">
                        <a href="#!">Contact</a>
                    </h1>
                </div>
            </nav>

            {/* //!HEAD */}
            <div className="flex items-center py-5 px-20 space-x-4 ">
                <div className="w-1/2 py-10">
                    <h1 className="text-8xl capitalize font-semibold">Order <span className="text-yellow-400">tasty and fresh</span> food anytime <span className="text-yellow-400 ">.</span></h1>

                    <h1 className="text-2xl capitalize my-8">food taste better when you eat it with your friends or family</h1>

                    <button className="rounded-2xl text-xl font-semibold capitalize text-black bg-yellow-400
          hover:bg-yellow-500  hover:shadow-xl duration-300 py-4 px-6">get started</button>
                </div>
                <div className="w-1/2 py-10">
                    <img className="w-100 rounded-3xl" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                </div>
            </div>


            {/* //! SPECIAL DISHES */}
            <div className="py-12 px-20">
                <h1 className="text-center text-6xl w-1/2 mx-auto capitalize font-bold mb-10">
                    Our Special Dishes</h1>

                <div className="flex  items-center justify-center space-x-20">
                    <div className="text-center">
                        <img className="rounded-full w-36 mx-auto relative -bottom-10 z-10" src="https://images.unsplash.com/photo-1497415717352-4493b50879f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=459&q=80" alt="" />
                        <div className="pt-14 pb-5 px-16 bg-gray-300 rounded-3xl
                        bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-2xl">
                            <h1 className="text-2xl font-bold">Egg Rice </h1>
                            <h1 className="text-xl font-bold my-2">⭐⭐⭐⭐⭐</h1>
                            <h1 className="text-xl font-bold">$12.9</h1>
                            <button className="rounded-xl shadow-lg px-4 py-2 mt-3 bg-green-500 hover:bg-green-400 text-white">Add to cart</button>
                        </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-36 mx-auto relative -bottom-10 z-10" src="https://images.unsplash.com/photo-1497415717352-4493b50879f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=459&q=80" alt="" />
                        <div className="pt-14 pb-5 px-16 bg-gray-300 rounded-3xl
                        bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-2xl">
                            <h1 className="text-2xl font-bold">Egg Rice </h1>
                            <h1 className="text-xl font-bold my-2">⭐⭐⭐⭐⭐</h1>
                            <h1 className="text-xl font-bold">$12.9</h1>
                            <button className="rounded-xl shadow-lg px-4 py-2 mt-3 bg-green-500 hover:bg-green-400 text-white">Add to cart</button>
                        </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-36 mx-auto relative -bottom-10 z-10" src="https://images.unsplash.com/photo-1497415717352-4493b50879f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=459&q=80" alt="" />
                        <div className="pt-14 pb-5 px-16 bg-gray-300 rounded-3xl
                        bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-2xl">
                            <h1 className="text-2xl font-bold">Egg Rice </h1>
                            <h1 className="text-xl font-bold my-2">⭐⭐⭐⭐⭐</h1>
                            <h1 className="text-xl font-bold">$12.9</h1>
                            <button className="rounded-xl shadow-lg px-4 py-2 mt-3 bg-green-500 hover:bg-green-400 text-white">Add to cart</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* //!HEAD */}
            <div className="flex items-center py-5 px-20 space-x-14 ">

                <div className="w-2/4">
                    <img className="w-100 rounded-3xl" src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                </div>

                <div className="w-2/4">
                    <h1 className="text-6xl capitalize">We serve tasty and healthy food</h1>

                    <h1 className="text-2xl capitalize my-8">food taste better when you eat it with your friends or family</h1>

                    <button className="rounded-2xl text-xl font-semibold capitalize text-white bg-gray-700
          hover:bg-gray-800 hover:shadow-xl duration-300 py-4 px-6">Explore more</button>
                </div>
            </div>

            {/* //! FAVOURITE DISHES */}
            <div className="py-12 px-20">
                <h1 className="text-center text-6xl w-1/2 mx-auto capitalize font-bold mb-10">Get you favorite foods under 30 mins </h1>

                <div className="flex items-center justify-between space-x-8">
                    <div className="rounded-2xl shadow-lg bg-gray-100 px-6 py-10 bg-opacity-25 backdrop-filter backdrop-blur-lg">
                        <h1 className="text-2xl font-bold capitalize mb-6">your food</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, saepe itaque optio adipisci quo quibusdam doloribus quod!</p>
                    </div>
                    <div className="rounded-2xl shadow-lg bg-gray-100 px-6 py-10 bg-opacity-25 backdrop-filter backdrop-blur-lg">
                        <h1 className="text-2xl font-bold capitalize mb-6">Pick up your food</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, saepe itaque optio adipisci quo quibusdam doloribus quod!</p>
                    </div>
                    <div className="rounded-2xl shadow-lg bg-gray-100 px-6 py-10 bg-opacity-25 backdrop-filter backdrop-blur-lg">
                        <h1 className="text-2xl font-bold capitalize mb-6">Enjoy your food</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, saepe itaque optio adipisci quo quibusdam doloribus quod!</p>
                    </div>
                </div>

            </div>

            {/* //! REVIEWS  */}
            <div className="flex items-center py-12 px-20 space-x-10">
                <div className="w-1/2">
                    <p className="text-3xl font-semibold">
                        <span className="text-6xl text-green-400 mr-4">"</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iure ea architecto laudantium, natus eum odio dolore numquam corrupti molestias praesentium quidem mollitia, minima quia saepe asperiores aliquid consequuntur cumque.
                    </p>
                    <h1 className="text-4xl mt-5 mb-2 text-green-400 mr-4">J. Quely Mac</h1>
                    <h1 className="text-xl">⭐⭐⭐⭐⭐</h1>
                </div>

                <div className="w-1/2">
                    <img className="w-100 rounded-3xl" src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
                </div>
            </div>

        </div>
    )
}
