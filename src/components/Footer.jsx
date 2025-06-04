import React from "react";
import {useContext, useEffect} from "react";

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <footer className="text-center bg-[#002B4C] text-white">
                <div className="px-6 pt-6">
                    {/* Grid layout for 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Column 1: Información de contacto */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Información de contacto</h4>
                            <p className="flex items-center mb-2 text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                Avenida Central del Norte 39-115, 150003 Tunja, Tunja, Boyacá, Colombia
                            </p>

                            <p className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mr-2"
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M16.003 3C9.374 3 3.875 8.5 3.875 15.125c0 2.668.875 5.126 2.343 7.118L3 29l6.974-3.195c1.85 1.017 3.974 1.57 6.03 1.57 6.628 0 12.127-5.5 12.127-12.125S22.63 3 16.003 3zm.09 21.843c-1.736 0-3.434-.468-4.933-1.347l-.355-.207-4.14 1.901.878-4.033-.238-.37c-1.032-1.59-1.58-3.424-1.58-5.258 0-5.418 4.419-9.843 9.845-9.843 5.426 0 9.844 4.425 9.844 9.843 0 5.419-4.418 9.814-9.822 9.814zm5.62-7.314c-.306-.153-1.818-.89-2.1-.99-.282-.099-.489-.152-.696.154-.206.306-.799.99-.979 1.195-.18.205-.359.23-.666.077-.306-.154-1.292-.476-2.462-1.515-.91-.812-1.525-1.814-1.703-2.12-.18-.306-.02-.47.135-.622.138-.135.306-.358.459-.537.154-.18.204-.306.307-.511.102-.205.05-.384-.026-.537-.077-.153-.695-1.677-.95-2.296-.25-.6-.504-.518-.695-.527-.18-.008-.384-.01-.589-.01-.205 0-.538.077-.82.384-.282.306-1.077 1.05-1.077 2.555 0 1.504 1.103 2.958 1.257 3.162.154.205 2.164 3.306 5.238 4.632.732.316 1.303.505 1.748.647.734.233 1.402.2 1.93.122.589-.088 1.818-.741 2.075-1.456.256-.715.256-1.327.179-1.456-.077-.128-.282-.204-.589-.358z"/>
                                </svg>
                                +57 3138426821
                            </p>
                        </div>

                        {/* Column 2: Numero de contacto */}
                        <div className="text-center">
                            <h4 className="text-lg font-bold mb-4 text-white">Formulario de contacto</h4>
                            <a
                                href="/Contact"
                                className="flex items-center justify-center text-blue-500 hover:text-blue-700"
                            >
                                Ir a Contacto
                            </a>
                        </div>

                        {/* Column 3: Redes sociales */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Redes sociales</h4>
                            <div className="flex justify-center mb-6">
                                {/* Social Media Icons */}
                                <a
                                    href="https://www.facebook.com/semillero.innovacion.5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    type="button"
                                    className="
                                        rounded-full border-2 border-white text-white
                                        w-9 h-9 m-1
                                    -   hover:bg-black hover:bg-opacity-5
                                    +   hover:bg-white hover:text-[#003054]
                                    +   hover:shadow-lg
                                    +   hover:scale-110
                                        focus:outline-none focus:ring-0
                                        transition duration-200 ease-in-out
                                    "
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="facebook-f"
                                        className="w-2 h-full mx-auto"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://twitter.com/SIIIS2013"
                                    type="button"
                                    className="
                                    rounded-full border-2 border-white text-white
                                    w-9 h-9 m-1
                                    hover:bg-white hover:text-[#003054]
                                    hover:shadow-lg
                                    hover:scale-110
                                    focus:outline-none focus:ring-0
                                    transition duration-200 ease-in-out
                                    flex items-center justify-center
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M19.778 2H4.222A2.222 2.222 0 0 0 2 4.222v15.556A2.222 2.222 0 0 0 4.222 22h15.556A2.222 2.222 0 0 0 22 19.778V4.222A2.222 2.222 0 0 0 19.778 2zM16.016 17h-2.314l-2.678-4.223L8.25 17H6l4.02-5.815L6.366 7h2.314l2.435 3.842L13.685 7H16l-4.065 5.487L16.016 17z"/>
                                    </svg>
                                </a>

                                <a
                                    href="https://www.instagram.com/semillero_siiis/"
                                    type="button"
                                    className="
                                        rounded-full border-2 border-white text-white
                                        w-9 h-9 m-1
                                    -   hover:bg-black hover:bg-opacity-5
                                    +   hover:bg-white hover:text-[#003054]
                                    +   hover:shadow-lg
                                    +   hover:scale-110
                                        focus:outline-none focus:ring-0
                                        transition duration-200 ease-in-out
                                    "
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="instagram"
                                        className="w-3 h-full mx-auto"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/semillero-siiis-639019171/"
                                    type="button"
                                    className="
                                        rounded-full border-2 border-white text-white
                                        w-9 h-9 m-1
                                    -   hover:bg-black hover:bg-opacity-5
                                    +   hover:bg-white hover:text-[#003054]
                                    +   hover:shadow-lg
                                    +   hover:scale-110
                                        focus:outline-none focus:ring-0
                                        transition duration-200 ease-in-out
                                    "
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="linkedin-in"
                                        className="w-3 h-full mx-auto"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCHASg2rhbc4gB26n1gZQ-8w"
                                    type="button"
                                    className="
                                        rounded-full border-2 border-white text-white
                                        w-9 h-9 m-1
                                    -   hover:bg-black hover:bg-opacity-5
                                    +   hover:bg-white hover:text-[#003054]
                                    +   hover:shadow-lg
                                    +   hover:scale-110
                                        focus:outline-none focus:ring-0
                                        transition duration-200 ease-in-out
                                    "
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="youtube"
                                        className="w-3 h-full mx-auto"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="https://semillerosiiis.blogspot.com/"
                                    type="button"
                                    className="
                                        rounded-full border-2 border-white text-white
                                        w-9 h-9 m-1
                                    -   hover:bg-black hover:bg-opacity-5
                                    +   hover:bg-white hover:text-[#003054]
                                    +   hover:shadow-lg
                                    +   hover:scale-110
                                        focus:outline-none focus:ring-0
                                        transition duration-200 ease-in-out
                                    "
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fab"
                                        data-icon="blogger-b"
                                        className="w-3 h-full mx-auto"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 496 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8.6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7.7 165.8.2 246.8c-.6 101.5.1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4.1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5.2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5.9c-68.1.8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div
                        className="text-center p-4"
                        style={{backgroundColor: "#002B4C"}} // Este es el mismo color que el fondo azul del footer
                    >
                        Copyright © 2025 SIIIS | Todos los derechos reservados
                        <br/>

                    </div>

                </div>
            </footer>
        </>
    )
        ;
};

export default Footer;
