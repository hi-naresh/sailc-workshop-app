import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-primary/30 text-blue-950 rounded-t-3xl py-8">
            <div className="container mb-24 mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <div className="flex flex-col justify-center items-center">
                    <a href="https://sailc.aurouniversity.edu.in/" 
                       className={"flex flex-col justify-center items-center"}
                       target="_blank" rel="noopener noreferrer">
                        <img src="/images/sail.png" alt="Logo" className="w-[50%] mb-4"/>
                    </a>
                    <p className="text-md text-gray-500">Made for SAILC</p>
                </div>
                <div className="text-center md:text-right">
                <p className="text-lg font-bold">By Naresh Jhawar</p>
                    {/*<div className="flex justify-center md:justify-end space-x-4 mt-2">*/}
                    {/*    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">*/}
                    {/*        <FontAwesomeIcon icon={faTwitter} className="text-2xl text-gray-400 hover:text-white" />*/}
                    {/*    </a>*/}
                    {/*    <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">*/}
                    {/*        <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-400 hover:text-white" />*/}
                    {/*    </a>*/}
                    {/*    <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">*/}
                    {/*        <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-400 hover:text-white" />*/}
                    {/*    </a>*/}
                    {/*    <a href="mailto:your-email@example.com">*/}
                    {/*        <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-400 hover:text-white" />*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
