import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTerminal,
  FiCode,
} from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { personalInfo } from "../../data/personalInfo";
import { Button } from "../common/Button";

export const Hero = () => {
  const roles = [
    "DevOps Engineer",
    "Cloud Engineer",
    "Software Developer",
    "Infrastructure Specialist",
    "Full Stack Developer",

  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const fullText = `> ${currentRole}`;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < fullText.length) {
            setDisplayText(fullText.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentIndex > 2) {
            setDisplayText(fullText.slice(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
            setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, currentRoleIndex, isDeleting, roles]);

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: SiLeetcode, href: personalInfo.social.leetcode, label: "LeetCode" },
    {
      icon: SiGeeksforgeeks,
      href: personalInfo.social.geeksforgeeks,
      label: "GFG",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Animated gradient blobs - repositioned to avoid overlap */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 -left-32 w-80 h-80 bg-accent-primary/15 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 -right-32 w-96 h-96 bg-accent-secondary/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left side - Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Terminal window */}
            <div className="bg-dark-surface/95 backdrop-blur-xl border border-dark-border rounded-xl overflow-hidden shadow-2xl lg:min-h-[300px]">
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-bg/60 border-b border-dark-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-dark-muted ml-2 font-mono">
                  portfolio.sh
                </span>
              </div>
              <div className="p-6 lg:p-8 font-mono text-sm space-y-3">
                <div className="flex items-center gap-2 text-accent-success">
                  <FiTerminal />
                  <span>$ whoami</span>
                </div>
                <div className="pl-6 text-dark-text">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-accent-primary font-bold text-2xl lg:text-3xl">
                      {personalInfo.name}
                    </span>
                  </motion.div>
                </div>

                <div className="flex items-center gap-2 text-accent-success mt-4">
                  <FiCode />
                  <span>$ watch role.txt</span>
                </div>
                <div className="pl-6 text-dark-text min-h-[2rem]">
                  <span className="text-base lg:text-lg">{displayText}</span>
                  <motion.span
                    className="inline-block w-2 h-5 bg-accent-primary ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>

                <div className="flex items-center gap-2 text-accent-success mt-4">
                  <FiMail />
                  <span>$ echo $SPECIALIZATION</span>
                </div>
                <motion.div
                  className="pl-6 text-dark-muted text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  Cloud Infrastructure • CI/CD • Container Orchestration
                </motion.div>
              </div>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-dark-surface/80 backdrop-blur-sm border border-dark-border rounded-lg hover:border-accent-primary hover:bg-dark-surface transition-all"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Orbiting stats & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Orbiting stats badges */}
            <div className="relative">
              <div className="relative h-80 lg:h-96 flex items-center justify-center">
                {/* Center glow */}
                <motion.div
                  className="absolute w-40 h-40 rounded-full bg-accent-primary/20 blur-3xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Orbiting stat 1 - 450+ Problems (0°) */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative -top-8"
                    animate={{ rotate: [0, -360] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-accent-primary/20 backdrop-blur-md border border-accent-primary/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-accent-primary">
                        450+
                      </div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        DSA Problems
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Orbiting stat 2 - 2nd Place (45°) */}
                <motion.div
                  className="absolute"
                  style={{ top: "14.6%", right: "14.6%" }}
                  animate={{ rotate: [45, 405] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative -top-6 -right-6"
                    animate={{ rotate: [-45, -405] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-md border border-purple-400/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-purple-400">
                        2nd
                      </div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        Hackathon
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Orbiting stat 3 - 3 Projects (90°) */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  animate={{ rotate: [90, 450] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative right-8"
                    animate={{ rotate: [-90, -450] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-accent-secondary/20 backdrop-blur-md border border-accent-secondary/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-accent-secondary">
                        3
                      </div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        Projects
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Orbiting stat 4 - AWS EC2 (135°) */}
                <motion.div
                  className="absolute"
                  style={{ bottom: "14.6%", right: "14.6%" }}
                  animate={{ rotate: [135, 495] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative -bottom-6 -right-6"
                    animate={{ rotate: [-135, -495] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-orange-500/20 backdrop-blur-md border border-orange-400/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-orange-400">
                        AWS
                      </div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        EC2 Deploy
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Orbiting stat 5 - 2★ CodeChef (180°) */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  animate={{ rotate: [180, 540] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative -bottom-8"
                    animate={{ rotate: [-180, -540] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-accent-success/20 backdrop-blur-md border border-accent-success/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-accent-success">
                        2★
                      </div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        CodeChef
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Orbiting stat 6 - 20+ Contests (225°) */}
                <motion.div
                  className="absolute"
                  style={{ bottom: "14.6%", left: "14.6%" }}
                  animate={{ rotate: [225, 585] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative -bottom-6 -left-6"
                    animate={{ rotate: [-225, -585] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-pink-500/20 backdrop-blur-md border border-pink-400/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-pink-400">20+</div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        Contests
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Orbiting stat 7 - 8.52 CGPA (270°) */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                  animate={{ rotate: [270, 630] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative -left-8"
                    animate={{ rotate: [-270, -630] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-accent-warning/20 backdrop-blur-md border border-accent-warning/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-accent-warning">
                        8.52
                      </div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        CGPA
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Orbiting stat 8 - 6 Months (315°) */}
                <motion.div
                  className="absolute"
                  style={{ top: "14.6%", left: "14.6%" }}
                  animate={{ rotate: [315, 675] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className="relative -top-6 -left-6"
                    animate={{ rotate: [-315, -675] }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="px-4 py-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 rounded-full shadow-lg">
                      <div className="text-lg font-bold text-cyan-400">
                        6 Mo
                      </div>
                      <div className="text-xs text-dark-muted whitespace-nowrap">
                        Internship
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1"
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                href={personalInfo.resumeUrl}
                download="Rishik_Puneet_M_Resume.pdf"
                className="flex-1"
              >
                Download CV
              </Button>
            </motion.div>

            {/* Quick about */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
              className="text-sm text-dark-muted leading-relaxed p-5 bg-dark-surface/70 backdrop-blur-sm rounded-xl border border-dark-border"
            >
              {personalInfo.bio}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
