import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">

                {/* Company Info */}
                <div className="footer-logo mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">Workify</h2>
                    <p className="text-sm mt-2">Connecting talent with opportunities</p>
                </div>

                {/* Useful Links */}
                <div className="footer-links mb-6 md:mb-0">
                    <ul className="space-y-4 md:space-y-0 md:flex md:gap-8">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/jobs" className="hover:underline">Browse Jobs</a></li>
                        <li><a href="/post-job" className="hover:underline">Post a Job</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="footer-social flex gap-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-600"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-700"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8">
                <p className="text-sm">&copy; 2025 JobPortal. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;