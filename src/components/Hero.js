import React from 'react';
import Animation from "./animated";
import UseLogin from "../hooks/useLogin";
import {useAuth} from "../contexts/AuthContext";
import AnimatedButton from "./AnimatedButton";

const HeroSection = () => {
    const Login = UseLogin();
    const { currentUser } = useAuth();


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
                {currentUser ? (
                    <div></div>
                ) : (
                    <AnimatedButton
                        onClick={login}>
                        <h3 className="text-white text-lg font-bold">
                            Register
                        </h3>
                    </AnimatedButton>
                )}
                <p className="text-md text-gray-500 text-center p-10">
                    We are excited to invite you to our upcoming Art and Craft Workshop! Join us for an inspiring day filled with creativity and camaraderie. We look forward to creating artful memories together!</p>
            </div>
        </section>
    );
};

export default HeroSection;
