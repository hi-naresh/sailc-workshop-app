import React from 'react';
import Animation from "./animated";
// import UseLogin from "../hooks/useLogin";
import {useAuth} from "../contexts/AuthContext";
import AnimatedButton from "./AnimatedButton";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const HeroSection = () => {
    // const Login = UseLogin();
    const { currentUser } = useAuth();
    const auth = getAuth();



    

    const login = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };
    
    
    return (
        <section className={"xs:pt-0 md:pt-20"}>
            <Animation />
            <div className="flex flex-col space-y-2 justify-center items-center">
                <h1 className="text-3xl font-bold">Welcome to</h1>
                <span className="text-5xl text-primary font-extrabold">KYB</span>
                <span className="text-5xl pb-4 text-secondary font-bold">Support</span>
                {currentUser ? (
                    <div></div>
                ) : (
                    <>
                        <h3 className="text-lg font-bold">Register Now and have a chance to try out the
                            app. </h3>
                        <AnimatedButton>
                            <div
                                onClick={login}
                                className={"text-white text-lg font-bold"}>
                                Register
                            </div>
                        </AnimatedButton>

                    </>
                )}
                <p className="text-md text-gray-500 text-center p-10">
                    You can write up your issues, you can report not working features, you can add ideas that could lead it to better vision.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
