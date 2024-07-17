import React from "react";
import LottieReact from "@lottielab/lottie-player/react";

const Animation = () => {
    return (
        <div className={"relative flex flex-col justify-center items-center "}>
            <LottieReact
                className={"xs:w-1/2 md:w-1/4"}
                src="/animations/hello.json"
                autoplay
            />
        </div>
    );
}

export default Animation;