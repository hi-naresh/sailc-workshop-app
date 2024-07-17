import React from 'react';
import Animation from "./animated";
import UseLogin from "../hooks/useLogin";

const HeroSection = () => {
    const Login = UseLogin();
    
    const login = async () => {
        await Login.handleLogin();
    }
    return (
        <section className={"xs:pt-0 md:pt-20"}>
            <Animation />
            <div className="flex flex-col space-y-2 justify-center items-center">
                <h1 className="text-3xl font-bold">Welcome to</h1>
                <span className="text-5xl text-primary font-extrabold">SAILC</span>
                <span className="text-5xl pb-4 text-secondary font-bold">Workshops</span>
                <button
                    onClick={login}
                    className="bg-primary w-[60%] px-10 font-bold py-3 rounded-3xl">
                    Register Now</button>
                <p className="text-lg text-text-secondary text-center p-8">
                    Institute for Applied Research in Integral Studies to foster inquiry and new thinking
                    in academia in the light of Sri Aurobindo’s integral world vision.</p>
            </div>
        </section>
    );
};

export default HeroSection;
