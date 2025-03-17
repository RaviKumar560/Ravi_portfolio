import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-8 py-10">
      <a
        href="https://github.com/yourgithub"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-4 rounded-full bg-[#2A3749] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <Github className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href="https://linkedin.com/in/yourlinkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-4 rounded-full bg-[#2A3749] hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <Linkedin className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
      <a
        href="mailto:techkumarravi563@gmail.com"
        className="group relative p-4 rounded-full bg-[#2A3749] hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <Mail className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default SocialMedia;
