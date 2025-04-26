"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";

import Link from "next/link";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaTools, FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import { 
  SiNextdotjs, SiRedux, SiTypescript, SiTailwindcss, SiExpress, SiNestjs, SiSpringboot, 
  SiGithubactions, SiFigma, SiPostman, 
  SiUipath,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiXampp
} from "react-icons/si";
import { LuPalette } from 'react-icons/lu';
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
// Add AnimatePresence to the import below:
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { FaOpencart, FaShare } from "react-icons/fa6";
// import { Typewriter } from 'react-typewriter-effect';
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Prasath Subramanian";
  const [currentIndex, setCurrentIndex] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [aboutActive, setAboutActive] = useState(false);

  // Scroll progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Full Stack Developer..!",
    "Software Developer..!",
    "Web Developer..!",
    "UI/UX Designer '..'"
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Role typing animation effect
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    
    if (!isErasing) {
      // Typing phase
      if (roleIndex < currentRoleText.length) {
        const timeout = setTimeout(() => {
          setRoleText(prev => prev + currentRoleText[roleIndex]);
          setRoleIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Start erasing after a pause
        const pauseTimeout = setTimeout(() => {
          setIsErasing(true);
        }, 2000);
        return () => clearTimeout(pauseTimeout);
      }
    } else {
      // Erasing phase
      if (roleText.length > 0) {
        const eraseTimeout = setTimeout(() => {
          setRoleText(prev => prev.slice(0, -1));
        }, 30); // Faster erase speed
        return () => clearTimeout(eraseTimeout);
      } else {
        // Move to next role after erasing
        setIsErasing(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setRoleIndex(0);
      }
    }
  }, [roleIndex, roleText, currentRole, isErasing]);

  // Scroll and animate About section on navbar click
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAboutActive(true);
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setAboutActive(false), 1200); // Remove animation after 1.2s
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Scroll Progress Bar */}
      <div
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.2s cubic-bezier(0.4,0,0.2,1)",
        }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 z-50"
      />
      {/* Enhanced Header with Motion */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-gray-900/90 to-blue-900/90 shadow-lg"
      >
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="text-2xl font-bold text-white tracking-wide"
          >
            Prasath | Portfolio
          </motion.div>
          <ul className="flex gap-6 text-white font-medium">
            {/* Animate nav links on hover */}
            {["About", "Education", "Skills", "Projects", "Certifications", "Contact"].map((item, idx) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.15, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={item === "About" ? handleAboutClick : undefined}
                  className="relative px-2 py-1 transition-transform duration-200 hover:scale-110 active:scale-95
                    before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-blue-400
                    before:transition-all before:duration-300 hover:before:w-full"
                  style={{ display: "inline-block" }}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>
      {/* Add padding top to avoid content being hidden behind navbar */}
      <div className="pt-24">
        {/* Enhanced 3D Background with Motion */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-0 h-screen"
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.4} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <Sphere args={[2, 64, 64]}>
              <meshStandardMaterial
                color="#3b82f6"
                metalness={0.7}
                roughness={0.3}
              />
            </Sphere>
            <Stars radius={100} depth={50} count={2000} factor={4} />
          </Canvas>
        </motion.div>
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Enhanced Bio Section with Typing Animation */}
          <motion.section
            id="about"
            ref={aboutRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left ${
              aboutActive ? "animate-fade-in-scale" : ""
            } shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-500`}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
          >
            {/* Text Content */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 flex flex-col justify-center max-w-xl"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
              >
                Prasath Subramanian
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-2xl text-gray-300 mb-6"
              >
                I'm Determined to be a{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent font-semibold">
                  {roleText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-gray-400 leading-relaxed mb-8"
              >
                "Passionate about creating innovative web solutions with modern technologies,
                Specializing in React.js, Next.js, and Web experiences."
              </motion.p>

              {/* Social Links and Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex flex-col sm:flex-row items-center gap-6 mt-4"
              >
                {/* Social Icons with animation */}
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/PrasathS27"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <FaGithub size={23} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <FaLinkedin size={23} />
                  </motion.a>
                  <motion.a
                    href="mailto:sprasath003@gmail.com"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                  >
                    <FaEnvelope size={23} />
                  </motion.a>
                </div>

                {/* Resume Button with animated arrow */}
                <motion.a
                  href="/PRASATH S.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, background: "linear-gradient(to right, #a78bfa, #3b82f6)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 active:scale-95"
                >
                  <FaDownload className="transition-transform duration-300 group-hover:translate-y-[-2px]" />
                  View My Resume
                  <FaArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </motion.div>
            {/* Image on the right, contained, with hover effect */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(168,139,250,0.25)" }}
              className="flex-shrink-0 self-center md:self-auto"
            >
              <div className="relative w-50 h-60 rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-lg bg-white/10 hidden md:block transition-all duration-500 hover:border-purple-400/60">
                <Image
                  src="/court2.jpg"
                  alt="Prasath Subramanian"
                  width={192}
                  height={192}
                  className="object-cover scale-100 hover:scale-110 hover:rotate-2 transition-transform duration-500 ease-in-out"
                  priority
                />
              </div>
            </motion.div>
          </motion.section>
          {/* Enhanced Skills Section with Staggered Animation */}
          <motion.section 
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
          {/* Education Section - Roadmap/Timeline Design */}
          <motion.section
            id="education"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-white mb-12 text-center tracking-tight"
            >
              Education
            </motion.h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line for roadmap */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 opacity-40"></div>
              <div className="space-y-12 relative z-10">
                {/* Timeline Item 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center w-full"
                >
                  {/* Left content */}
                  <div className="w-1/2 pr-8 text-right hidden md:block">
                    <motion.div
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
                      className="bg-blue-900/80 rounded-xl p-6 shadow-lg inline-block"
                    >
                      <div className="text-gray-400 text-sm">2024</div>
                      <div className="text-lg font-bold text-blue-300">B.TECH, INFORMATION TECHNOLOGY</div>
                      <div className="text-gray-300">K.S. Rangasamy College of Technology</div>
                      <div className="text-gray-400 text-sm">CGPA: 8.94 </div>
                    </motion.div>
                  </div>
                  {/* Center icon */}
                  <div className="flex flex-col items-center w-0 " >
                    <span className="block w-15 h-15 rounded-full bg-blue-400 flex items-center justify-center text-white text-3xl shadow-lg  z-20">
                      <FaGraduationCap />
                    </span>
                  </div>
                  {/* For mobile: icon above card */}
                  <div className="w-1/2 pl-8 md:hidden flex flex-col items-center">
                    <span className="block w-15 h-15 rounded-full bg-blue-400 flex items-center justify-center text-white text-3xl shadow-lg  mb-2">
                      <FaGraduationCap />
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
                      className="bg-blue-900/80 rounded-xl p-6 shadow-lg w-full text-center"
                    >
                      <div className="text-gray-400 text-sm">2024</div>
                      <div className="text-lg font-bold text-blue-300">B.TECH, INFORMATION TECHNOLOGY</div>
                      <div className="text-gray-300">K.S. Rangasamy College of Technology</div>
                      <div className="text-gray-400 text-sm">CGPA: 8.94 </div>
                    </motion.div>
                  </div>
                </motion.div>
                {/* Timeline Item 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center w-full flex-row-reverse"
                >
                  {/* Right content */}
                  <div className="w-1/2 pl-8 text-left hidden md:block">
                    <motion.div
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(168,139,250,0.25)" }}
                      className="bg-purple-900/80 rounded-xl p-6 shadow-lg inline-block"
                    >
                      <div className="text-gray-400 text-sm">2020</div>
                      <div className="text-lg font-bold text-purple-300">HSC (12th Grade)</div>
                      <div className="text-gray-300">Little Angles Hr Sec School Aniyapuram, Namakkal</div>
                      <div className="text-gray-400 text-sm">Percentage: 60%</div>
                    </motion.div>
                  </div>
                  {/* Center icon */}
                
                  <div className="flex flex-col items-center w-0" >
                    <span className="block w-15 h-15 rounded-full bg-purple-400 flex items-center justify-center text-white text-3xl shadow-lg  z-20 ">
                      <FaSchool />
                    </span>
                  </div>
                  
                  {/* For mobile: icon above card */}
                  <div className="w-1/2 pr-8 md:hidden flex flex-col items-center">
                    <span className="block w-15 h-15 rounded-full bg-purple-400 flex items-center justify-center text-white text-3xl shadow-lg  mb-2">
                      <FaSchool />
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(168,139,250,0.25)" }}
                      className="bg-purple-900/80 rounded-xl p-6 shadow-lg w-full text-center"
                    >
                      <div className="text-gray-400 text-sm">2020</div>
                      <div className="text-lg font-bold text-purple-300">HSC (12th Grade)</div>
                      <div className="text-gray-300">Little Angles Hr Sec School Aniyapuram, Namakkal</div>
                      <div className="text-gray-400 text-sm">Percentage: 60%</div>
                    </motion.div>
                  </div>
                </motion.div>
                {/* Timeline Item 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center w-full"
                >
                  {/* Left content */}
                  <div className="w-1/2 pr-8 text-right hidden md:block">
                    <motion.div
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
                      className="bg-indigo-900/80 rounded-xl p-6 shadow-lg inline-block"
                    >
                      <div className="text-gray-400 text-sm">2018</div>
                      <div className="text-lg font-bold text-indigo-300">SSLC (10th Grade)</div>
                      <div className="text-gray-300">DR.V. Gengusamy Naidu High School, Thottiyam</div>
                      <div className="text-gray-400 text-sm">Percentage: 75%</div>
                    </motion.div>
                  </div>
                  {/* Center icon */}
                  <div className="flex flex-col items-center w-0">
                    <span className="block w-15 h-15 rounded-full bg-indigo-400 flex items-center justify-center text-white text-3xl shadow-lg  z-20">
                      <FaSchool />
                    </span>
                  </div>
                  {/* For mobile: icon above card */}
                  <div className="w-1/2 pl-8 md:hidden flex flex-col items-center">
                    <span className="block w-15 h-15 rounded-full bg-indigo-400 flex items-center justify-center text-white text-3xl shadow-lg mb-2">
                      <FaSchool />
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
                      className="bg-indigo-900/80 rounded-xl p-6 shadow-lg w-full text-center"
                    >
                      <div className="text-gray-400 text-sm">2018</div>
                      <div className="text-lg font-bold text-indigo-300">SSLC (10th Grade)</div>
                      <div className="text-gray-300">DR.V. Gengusamy Naidu High School, Thottiyam</div>
                      <div className="text-gray-400 text-sm">Percentage: 75%</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-white mb-12 text-center tracking-tight"
            >
              Skills & Tools
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
                className="bg-gradient-to-br from-blue-900/60 to-blue-600/30 rounded-2xl p-8 shadow-xl border border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaReact className="text-cyan-400 text-3xl animate-spin-slow" />
                  <SiNextdotjs className="text-white text-2xl animate-pulse" />
                  <SiRedux className="text-purple-400 text-2xl animate-bounce" />
                  <SiTypescript className="text-blue-400 text-2xl animate-pulse" />
                  <SiTailwindcss className="text-cyan-300 text-2xl animate-bounce" />
                  <LuPalette className="text-pink-400 text-2xl animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-blue-200 mb-2">Frontend Development</h3>
                <ul className="text-gray-300 text-base space-y-1">
                  <li>React.js, Next.js </li>
                  <li>TypeScript, Tailwind CSS</li>
                  <li>UI/UX</li>
                </ul>
              </motion.div>
              {/* Backend Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(168,139,250,0.25)" }}
                className="bg-gradient-to-br from-purple-900/60 to-purple-600/30 rounded-2xl p-8 shadow-xl border border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaNodeJs className="text-green-400 text-3xl animate-bounce" />
                  <SiExpress className="text-gray-200 text-2xl animate-pulse" />
                  <SiNestjs className="text-red-400 text-2xl animate-bounce" />
                  <SiSpringboot className="text-green-300 text-2xl animate-pulse" />
                  <SiMysql className="text-green-300 text-2xl animate-bounce"  />
                </div>
                <h3 className="text-xl font-bold text-purple-200 mb-2">Backend Development</h3>
                <ul className="text-gray-300 text-base space-y-1">
                  <li>Node.js, Nest.js , APIs </li>
                  <li>MySQL</li>
                </ul>
              </motion.div>
              {/* Tools & Workflow Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
                className="bg-gradient-to-br from-indigo-900/60 to-indigo-600/30 rounded-2xl p-8 shadow-xl border border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaTools className="text-yellow-300 text-3xl animate-bounce" />
                  <SiFigma className="text-pink-400 text-2xl animate-pulse" />
                  <SiPostman className="text-orange-400 text-2xl animate-bounce" />
                  <SiGithubactions className="text-white text-2xl animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-indigo-200 mb-2">Tools & Workflow</h3>
                <ul className="text-gray-300 text-base space-y-1">
                  <li>VS Code, Figma, Postman</li>
                  <li>GitHub</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>
          
  {/* Enhanced Projects Section */}
  <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // Changed background: from glassmorphism to a soft gradient with pattern
            className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 bg-[url('/pattern.svg')] bg-repeat rounded-2xl p-8 mb-20 border-2 border-blue-700/30 shadow-2xl"
          >
            <h2 
              className="text-4xl font-extrabold text-white mb-10 text-center tracking-tight"
            >
              Showcase
            </h2>
            <ProjectCarousel />
          </motion.section>


          {/* Certifications Section - styled like Technical Skills */}
          <motion.section
            id="certifications"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-extrabold text-white mb-10 text-center tracking-tight">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2  }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
                className="bg-gradient-to-br from-blue-900/60 to-blue-600/30 rounded-2xl p-8 shadow-xl border border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-indigo-200 mb-2">Web Development</h3>
                <p className="text-gray-300">Accord Info Matrix</p>
                <motion.a
                  href="https://drive.google.com/file/d/1d-IZRSNOJDF6g9TIEzyUjuLssLdj37xo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  // className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  View Certificate
                  {/* Changed icon here */}
                  <FaArrowRight className="w-4 h-4 ml-1" />
                </motion.a>
      
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(168,139,250,0.25)" }}
                className="bg-gradient-to-br from-purple-900/60 to-purple-600/30 rounded-2xl p-8 shadow-xl border border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-purple-200 mb-2">Python Programming</h3>
                <p className="text-gray-300">Accord Info Matrix</p>

                <motion.a
                  href="https://drive.google.com/file/d/1CmS7PRedJjmYBszpVpkCc91DdikLMIlr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  View Certificate
                  {/* Changed icon here */}
                  <FaArrowRight className="w-4 h-4 ml-1" />
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
                className="bg-gradient-to-br from-indigo-900/60 to-indigo-600/30 rounded-2xl p-8 shadow-xl border border-indigo-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-blue-200 mb-2">Graphic Design</h3>
                <p className="text-gray-300">IPINGU Managed Security Solution LLP</p>
                <motion.a
                  href="https://drive.google.com/file/d/1DmCVbwxIr2z8zkL0FYOxCgsfchonHdtI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  View Certificate
                  {/* Changed icon here */}
                  <FaArrowRight className="w-4 h-4 ml-1" />
                </motion.a>
              
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(236,72,153,0.25)" }}
                className="bg-gradient-to-br from-pink-900/60 to-pink-600/30 rounded-2xl p-8 shadow-xl border border-pink-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-pink-200 mb-2">NPTEL IOT Certification</h3>
                <p className="text-gray-300">Grade: 72%</p>

                <motion.a
                  href="https://drive.google.com/file/d/1oxgRKQ7XQOqO8-0yXctv8d4DjMb9sjFN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                >
                  View Certificate
                  {/* Changed icon here */}
                  <FaArrowRight className="w-4 h-4 ml-1" />
                </motion.a>
              </motion.div>
            </div>
          </motion.section>

        
            
               
            
          {/* Enhanced Contact Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Let's Connect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="flex items-center bg-blue-900/80 rounded-xl p-5 gap-4 shadow-lg transition-transform duration-300 hover:bg-blue-700/80 hover:scale-105">
                  <span className="bg-blue-500 text-white rounded-full p-3 text-2xl transition-transform duration-300 hover:scale-125">
                    {/* Email Icon */}
                    <FaEnvelope />
                  </span>
                  <div>
                    <div className="text-white font-semibold"
                    >Email</div>
                    <a 
                      href="mailto:sprasath003@gmail.com"
                      className="text-gray-300 text-sm hover:text-purple-400 transition-colors"
                    >
                      sprasath003@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center bg-purple-900/80 rounded-xl p-5 gap-4 shadow-lg transition-transform duration-300 hover:bg-purple-700/80 hover:scale-105">
                  <span className="bg-purple-500 text-white rounded-full p-3 text-2xl transition-transform duration-300 hover:scale-125">
                    {/* Phone Icon */}
                    <FaPhone />
                  </span>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <a 
                      href="https://wa.me/+919994565367"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
                    >
                      +91 9994565367
                    </a>
                  </div>
                </div>
                <div className="flex items-center bg-pink-900/80 rounded-xl p-5 gap-4 shadow-lg transition-transform duration-300 hover:bg-pink-700/80 hover:scale-105">
                  <span className="bg-pink-500 text-white rounded-full p-3 text-2xl transition-transform duration-300 hover:scale-125">
                    {/* Location Icon */}
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300 text-sm">Trichy, Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
<form className="space-y-6">
  <div>
    <input
      type="text required"
      placeholder="Your Name"
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
    />
  </div>
  <div>
    <input
      type="email required"
      placeholder="Your Email "
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
    />
  </div>
  <div>
    <textarea
      placeholder="Your Message"
      rows={4}
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
  >
    Send Message
  </button>
</form>
            </div>
          </motion.section>
          {/* Footer */}
          <footer className="mt-20 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Prasath S. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

import { FaArrowLeft } from "react-icons/fa";

function ProjectCarousel() {
  const projects = [
    {
      image: "/od.png",
      title: "Online On-Duty Registration",
      description:
        "Created an OnDuty registration system using HTML/CSS for front-end design and PHP for server-side scripting, enabling smooth user interaction and data processing. Integrated database connectivity via XAMPP, transitioning the conventional OnDuty process to an online system with CRUD operations for thorough management of on-duty requests and records.",
      tags: ["HTML", "CSS", "PHP", "XAMPP"],
      role: "Web Developer",
      demo: "https://github.com/PrasathS27/WebTechnology_MiniProject.git",
      demoLabel: "View Project",
    },
    {
      image: "/Toyshop.png",
      title: "Toyshop Website",
      description:
        "I developed a dynamic, user-friendly web page for an online toy shop, incorporating interactive elements such as product filters, Forntend only, and seamless navigation to enhance the overall shopping experience and engagement for customers.",
      tags: ["HTML", "CSS", "JavaScript", "Netlify"],
      role: "Frontend Developer",
      demo: "https://toyshop-demo.netlify.app/",
      demoLabel: "Live Demo",
    },
    {
      image: "/Figma.png",
      title: "ACADEMIC SPHERE UI/UX",
      description:
        "Academic Sphere is a Figma-based educational UI connecting students, parents, and teachers. It features a clean design, meeting access, academic tools, and interactive elements, all focused on accessibility, engagement, and a student-centered learning experience.",
      tags: ["Figma"],
      role: "UI/UX",
      demo: "https://figma.fun/isYuDW",
      demoLabel: "Live Demo",
    },
    {
      image: "/Figma.png",
      title: "Prasath | Portfolio ",
      description:
        "I built a user-friendly personal portfolio using React (with Next.js) and Tailwind CSS to showcase my professional achievements and skills. The portfolio integrates Framer Motion for animations, Three.js for 3D graphics, and React Icons for improved iconography. Built with TypeScript, JavaScript, JSX/TSX, HTML, and CSS, it is hosted on Firebase for seamless deployment and performance.",
      tags: ["React JS", "Next JS", "Tailwind CSS", "TypeScript","Firebase"],
      role: "Fullstack Developer",
      demo: "/",
      demoLabel: "Live Demo",
    }
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Animation variants for sliding
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Language badge color map
  const badgeColors: Record<string, string> = {
    HTML: "bg-orange-500",
    CSS: "bg-blue-500",
    PHP: "bg-purple-500",
    XAMPP: "bg-yellow-500 text-black",
    JavaScript: "bg-yellow-400 text-black",
    Netlify: "bg-blue-400 text-black",
    Figma: "bg-pink-500",
    "React JS": "bg-cyan-500",
    "Next JS": "bg-gray-800",
    "Tailwind CSS": "bg-blue-400",
    Firebase: "bg-yellow-400 text-black",
    TypeScript: "bg-blue-700",
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden transition-transform bg-transparent">
        {/* Image on the left with fade in/out effect, NO hover background */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-4 relative group">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.img
              key={projects[current].image}
              src={projects[current].image}
              alt={projects[current].title}
              className="rounded-xl w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          {/* Removed the hover background overlay here */}
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg z-20 transition-all"
            aria-label="Previous Project"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
        </div>
        {/* Content on the right with slide animation */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8 relative">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={projects[current].title}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              variants={variants}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative"
            >
              <h3 className="text-2xl font-bold text-blue-200 mb-2">{projects[current].title}</h3>
              <p className="text-gray-300 mb-4">{projects[current].description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[current].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColors[tag] || "bg-gray-600 text-white"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 text-white px-4 py-2 rounded-lg font-semibold">{projects[current].role}</span>
                <a
                  href={projects[current].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%)"
                  }}
                >
                  {projects[current].demoLabel}
                </a>
              </div>
              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg z-10 transition-all"
                aria-label="Next Project"
              >
                <FaArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Dots Indicator */}
      <div className="flex gap-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-blue-400" : "bg-gray-400/40"} transition-all`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
