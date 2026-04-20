import React from 'react';
import { FaShippingFast, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

export default function Features() {
    const features = [
        {
            id: 1,
            icon: <FaShippingFast className="text-2xl text-blue-500 mb-2" />,
            title: "Free Shipping",
            desc: "Get free shipping on all orders over 500 EGP."
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-2xl text-green-500 mb-2" />,
            title: "Secure Payment",
            desc: "We ensure 100% secure payment with PEV."
        },
        {
            id: 3,
            icon: <FaUndo className="text-2xl text-orange-500 mb-2" />,
            title: "Easy Returns",
            desc: "30 days return policy for a hassle-free experience."
        },
        {
            id: 4,
            icon: <FaHeadset className="text-2xl text-purple-500 mb-2" />,
            title: "24/7 Support",
            desc: "Our dedicated team is here to help you anytime."
        }
    ];

    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
                <div
                    key={feature.id}
                    className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
                >
                    {feature.icon}
                    <h3 className="text-base font-bold mb-1 text-gray-800">{feature.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
            ))}
        </section>
    );
}
