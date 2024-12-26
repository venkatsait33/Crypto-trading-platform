import CountUp from "../utils/CountUp"

const Numbers = () => {
    return (
        <div className="p-4 bg-black ">
            <div className="flex items-center justify-between w-full px-4 py-2 text-white bg-black border-t-2 rounded-t-3xl ">
                {/* Left Text */}
                <h1 className="text-2xl font-bold">Stats</h1>

                {/* Right Text */}
                <span className="text-sm text-gray-400">Platform performance</span>
            </div>
            <div className="bg-[url('/src/assets/numbers-bg.png')] bg-no-repeat bg-cover bg-center h-[100vh]">
                <div className="flex">
                    <div className="ml-12 w-[50%]">
                        <h1 className="font-[FontSpring-medium]   max-sm:text-xl text-[150px]">$ <span><CountUp from={0}
                            to={14}
                            separator=","
                            direction="up"
                            duration={3}
                            className="count-up-text" /></span> B+ </h1>
                        <p className="font-[FontSpring-medium]   max-sm:text-xl text-[42px]">Total trading</p>
                        <p className="font-[FontSpring-medium]   max-sm:text-xl text-[42px]">volume</p>
                    </div>
                    <div className="grid grid-cols-2 gap-10 mr-12 w-[50%]">
                        <div className="border w-[300px] h-[240px] rounded-[40px] border-r-[#955cf0] mx-auto mt-20 flex justify-center items-center flex-col gap-10 ">
                            <h1 className="font-[FontSpring-medium]   max-sm:text-xl text-[60px]"> <span><CountUp from={0}
                                to={50}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text" /></span>&nbsp;M+ </h1>
                            <p className="text-xl">we are online</p>
                        </div>
                        <div>

                        </div>
                        <div className="border w-[300px] h-[240px] rounded-[40px] border-r-[#955cf0] mx-auto mt-20 flex justify-center items-center flex-col gap-10 ">
                            <h1 className="font-[FontSpring-medium]   max-sm:text-xl text-[60px]"> <span><CountUp from={0}
                                to={15}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text" /></span>&nbsp;K+ </h1>
                            <p className="text-xl">we are online</p>
                        </div>
                        
                        <div className="border w-[300px] h-[240px] rounded-[40px]  border-r-[#955cf0] mx-auto mt-20 flex justify-center items-center flex-col gap-10 ">
                            <h1 className="font-[FontSpring-medium]   max-sm:text-xl text-[60px]"> <span><CountUp from={0}
                                to={10}
                                separator=","
                                direction="up"
                                duration={2}
                                className="count-up-text" /></span> &nbsp;M+ </h1>
                            <div>
                                <p className="text-xl">Total</p>
                                <p className="text-xl">deals in platform</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Numbers