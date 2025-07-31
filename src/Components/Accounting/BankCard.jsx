import React from 'react';
import abaImg from "../../assets/accounting/aba.jpg";
import acledaImg from "../../assets/accounting/acleda.png";
import mohanokorImg from "../../assets/accounting/mohanokor.png";
import sbiImg from "../../assets/accounting/sbi-lyhour.jpg";
import wingImg from "../../assets/accounting/wing.png";

const imageList = [mohanokorImg, abaImg, acledaImg, sbiImg, wingImg];

const BankCard = () => {
    return (
        <section className="shadow-md rounded-md border text-sm">
            <section className="grid grid-row justify-between p-4">
                <div>
                    <p className="font-medium text-primary">Bank</p>
                    <p className="text-gray-600">Contact your bank. Much invoices automatically</p>
                </div>
                <div className="mt-2 w-full grid grid-cols-4 gap-2">
                    <div className="bg-primary rounded-md items-center flex p-5 shadow-sm">
                        <p className="text-white text-center">Search over 26 000 banks</p>
                    </div>
                    {imageList.map((image, index) => (
                        <div key={index} className="bg-gray-100 flex items-center rounded-md p-5 shadow-sm">
                            <img
                                src={image}
                                alt={`Bank ${index + 1}`}
                                className="w-full h-14 object-contain rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default BankCard;
