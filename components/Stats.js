import MacImg from '../img/Mackbook.png'
import Image from 'next/legacy/image'

export default function Stats(){
    return(
        <div className="mt-[50px] flex flex-row justify-center w-full px-[120px]">
            <div className="w-full">
                <Image
                    src={MacImg}
                    alt='macbook and phone image'
                    width={748}
                    height={600}
                    />
            </div>
            <div className='w-full justify-start items-center flex flex-col gap-4 mt-8'>
                <div className="w-6/12 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] p-5 rounded-2xl">
                    <h1 className="">90%</h1>
                    <p>Timely Deliveries</p>
                </div>
                <div className="w-6/12 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] p-5 rounded-2xl">
                    <h1 className="">90%</h1>
                    <p>Timely Deliveries</p>
                </div>
                <div className="w-6/12 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] p-5 rounded-2xl">
                    <h1 className="">90%</h1>
                    <p>Timely Deliveries</p>
                </div>
                <div className="w-6/12 flex bg-gradient-to-r from-[#F7BC06] to-[#ffefbf] p-5 rounded-2xl">
                    <h1 className="">90%</h1>
                    <p>Timely Deliveries</p>
                </div>
            </div>
        </div>
    )
}