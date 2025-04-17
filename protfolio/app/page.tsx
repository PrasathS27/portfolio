"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import Link from "next/link";
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import { 
  SiNextdotjs, SiRedux, SiTypescript, SiTailwindcss, SiExpress, SiNestjs, SiSpringboot, 
  SiGithubactions, SiFigma, SiPostman, SiVisualstudiocode 
} from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 h-screen">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Sphere args={[2, 64, 64]}>
            <meshStandardMaterial
              color="#4f46e5"
              metalness={0.7}
              roughness={0.3}
            />
          </Sphere>
          <Stars radius={100} depth={50} count={2000} factor={4} />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Bio Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-20 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Prasath S
          </h1>
          <p className="text-xl text-gray-300 mb-6">Full Stack Developer & UI/UX Designer</p>
          <p className="text-gray-400 leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies.
            Specializing in React, Next.js, and 3D web experiences.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-tight">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-900/60 to-blue-600/30 rounded-2xl p-8 shadow-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <FaReact className="text-cyan-400 text-3xl animate-spin-slow" />
                <SiNextdotjs className="text-white text-2xl" />
                <SiRedux className="text-purple-400 text-2xl" />
                <SiTypescript className="text-blue-400 text-2xl" />
                <SiTailwindcss className="text-cyan-300 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-2">Frontend Development</h3>
              <ul className="text-gray-300 text-base space-y-1">
                <li>React.js, Next.js </li>
                <li>TypeScript, Tailwind CSS</li>
                <li>Responsive UI/UX</li>
              </ul>
            </div>
            {/* Backend */}
            <div className="bg-gradient-to-br from-purple-900/60 to-purple-600/30 rounded-2xl p-8 shadow-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-100">
              <div className="flex items-center gap-3 mb-4">
                <FaNodeJs className="text-green-400 text-3xl animate-bounce" />
                <SiExpress className="text-gray-200 text-2xl" />
                <SiNestjs className="text-red-400 text-2xl" />
                <SiSpringboot className="text-green-300 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">Backend Development</h3>
              <ul className="text-gray-300 text-base space-y-1">
                <li>Node.js, Nest.js</li>
                {/* <li>Spring Boot</li> */}
                <li>APIs</li>
              </ul>
            </div>
            {/* Tools & Workflow */}
            <div className="bg-gradient-to-br from-indigo-900/60 to-indigo-600/30 rounded-2xl p-8 shadow-xl border border-indigo-500/30 hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-200">
              <div className="flex items-center gap-3 mb-4">
                <FaTools className="text-yellow-300 text-3xl animate-pulse" />
                <SiFigma className="text-pink-400 text-2xl" />
                <SiPostman className="text-orange-400 text-2xl" />
                <SiGithubactions className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-indigo-200 mb-2">Tools & Workflow</h3>
              <ul className="text-gray-300 text-base space-y-1">
                <li>VS Code, Figma, Postman</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl text-white mb-2">OD Registration System</h3>
              <p className="text-gray-400 mb-4">PHP, MySQL, Responsive Design</p>
              <Link href="/projects" className="text-blue-400 hover:underline">View Details →</Link>
            </div>
            <div className="bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl text-white mb-2">Online Toyshop</h3>
              <p className="text-gray-400 mb-4">React, Node.js, Payment Integration</p>
              <Link href="/projects" className="text-purple-400 hover:underline">Live Demo →</Link>
            </div>
          </div>
        </section>

        {/* Certifications Section - moved above Projects */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl text-white mb-2">NPTEL IoT Certification</h3>
              <p className="text-gray-400">Grade: 72%</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl text-white mb-2">Python Programming</h3>
              <p className="text-gray-400">Accord Info Matrix</p>
            </div>
          </div>
        </section>

        {/* Projects Section - now below Certifications */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl text-white mb-2">OD Registration System</h3>
              <p className="text-gray-400 mb-4">PHP, MySQL, Responsive Design</p>
              <Link href="/projects" className="text-blue-400 hover:underline">View Details →</Link>
            </div>
            <div className="bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl text-white mb-2">Online Toyshop</h3>
              <p className="text-gray-400 mb-4">React, Node.js, Payment Integration</p>
              <Link href="/projects" className="text-purple-400 hover:underline">Live Demo →</Link>
            </div>
          </div>
        </section>

        {/* Contact Section - new layout */}
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="flex items-center bg-blue-900/80 rounded-xl p-5 gap-4 shadow-lg">
                <span className="bg-blue-500 text-white rounded-full p-3 text-2xl">
                  <svg width="24" height="24" fill="none"><path d="M4 4h16v16H4V4z" fill="none"/><path d="M4 4l8 8 8-8" stroke="#fff" strokeWidth="2"/></svg>
                </span>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300 text-sm">prasaths27@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center bg-purple-900/80 rounded-xl p-5 gap-4 shadow-lg">
                <span className="bg-purple-500 text-white rounded-full p-3 text-2xl">
                  <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M8 12h8" stroke="#fff" strokeWidth="2"/></svg>
                </span>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300 text-sm">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center bg-pink-900/80 rounded-xl p-5 gap-4 shadow-lg">
                <span className="bg-pink-500 text-white rounded-full p-3 text-2xl">
                  <svg width="24" height="24" fill="none"><circle cx="12" cy="10" r="3" stroke="#fff" strokeWidth="2"/><path d="M12 13v5" stroke="#fff" strokeWidth="2"/></svg>
                </span>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300 text-sm">Trichy, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:from-purple-500 hover:to-blue-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Prasath S. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
