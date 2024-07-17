import React from 'react';
const data = [
    {
        heading: "A Sanctuary for Silent Contemplation",
        description: [
            "SAILC is a haven designed for individual silent introspection—a place that warrants a serene mental and physical disposition. It beckons those seeking self-inquiry and self-discovery to approach in a state of tranquility.",
            "Dhyanshala, surrounded by water and lush greens, symbolizes the inner light of the SAIL campus. It offers a serene atmosphere where one can effortlessly enter into silence and explore their own consciousness.",
            "Sensory Sound garden provides a chance to personally experience the enchanting effects of sound, to physically feel the strength of vibrations, and to understand direct influence on our bodies and minds.",
        ],
    },
    {
        heading: "Visiting SAILC: Guidelines to Follow",
        description: [
            "Upon arrival, the reception desk will greet you as your initial point of entry into Dyanashala. For security, kindly deposit all your belongings, including mobile phones and wallets, at the desk. In return, you will receive a key for your secure storage.",
        ],
    },
    {
        heading: "Dhyanshala and Petals: Booking Information",
        description: [
            "Dhyanshala and Petals are available for booking by AURO family members, students, and visitors. Reservations need to be made on an individual basis. To secure your slots, please use the provided form or scan the QR code. To ensure a smooth experience, please make Dhyanshala booking requests at least 3 days in advance. If there is no rush, same-day appointments can be accommodated. Complete the form as needed, and expect a confirmation message from the SAILC Team.",
        ],
    },
    {
        heading: "Dhyanshala Booking Procedure",
        description: [
            "To book your Dhyanshala session, kindly scan the provided Booking QR Code or use the link to submit your details. Please note that Sunday is designated as a weekly off day for Dhyanshala.",
        ],
    },
    {
        heading: "Operating Hours for Dhyanashala at the SAIL Centre",
        description: [
            "Monday to Saturday: Mornings from 8:00 am to 10:00 am and Evenings from 03:30 pm to 6:30 pm.",
        ],
    }
    ];

const About = () => {
    return (
        <div className="about">
            <img className="w-full xs:h-72 md:h-96 object-cover mb-8" src="/images/about.jpg" alt="About Us"/>
            <h2 className="text-3xl font-bold px-10 text-dark text-center mb-10">Sri Aurobindo Integral Life Center: A
                Sanctuary for Silent Contemplation</h2>
            <a href="https://sailc.aurouniversity.edu.in/" className="text-center block text-ternary font-bold text-xl mb-10">Visit SAILC Site</a>
            <div className="max-w-4xl mb-40 mx-auto px-10 text-center">
                <img className=" h-96 object-cover rounded-3xl  mb-8" src="/images/about1.jpg" alt="About Us"/>
                <div>
                    {data.map((item, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-2xl font-bold mb-4">{item.heading}</h3>
                            {item.description.map((desc, i) => (
                                <p key={i} className="text-gray-600 text-justify">{desc}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600">The slot is allocated between 10:30 to 03:00 pm for those who
                    want to visit in a group/groups, kindly select the appropriate slot/slots provided in the form or
                    scan the booking QR Code below.</p>
                <img className="w-full xs:h-48 md:h-48 object-contain mb-8" src="/images/scan.png" alt="About Us"/>
                <h3 className="text-2xl font-bold mb-4">Timing for Dhyanashala at the SAIL Centre</h3>
                <p> Monday to Friday., 8.30 a.m. – 6.30 p.m.<br/>
                    Saturday and Sunday are closed for maintenance.</p>
            </div>

        </div>
    );
};

export default About;
