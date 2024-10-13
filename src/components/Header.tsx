import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Header: React.FC = () => {
    return (
        <>
            <style>{`
                .sticky-header {
                    position: -webkit-sticky; /* For Safari */
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    width: 100%;
                    background-color: rgba(9,9,11, 0.8); /* Semi-transparent background */
                    color: white;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    backdrop-filter: blur(10px); /* Blur effect */
                    -webkit-backdrop-filter: blur(10px); /* Safari support */
                }
            `}</style>
            <header className="sticky-header w-full flex justify-between items-center p-4">
                <div className="flex items-center">
                    <h1 className="mr-4 font-bold text-2xl">Dev Resources</h1>
                </div>
                <div className="flex items-center">
                    <a href="https://github.com/markdhelwebb" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
