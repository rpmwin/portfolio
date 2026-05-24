import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { personalInfo } from "../../data/personalInfo";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("sending");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: personalInfo.email,
        },
        "YOUR_PUBLIC_KEY"
      );

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-400",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone || "+91 9148126429",
      href: `tel:${personalInfo.phone || "+919148126429"}`,
      color: "text-green-400",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Karnataka, India",
      color: "text-orange-400",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: personalInfo.social?.github,
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      icon: FiLinkedin,
      href: personalInfo.social?.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: SiLeetcode,
      href: personalInfo.social?.leetcode,
      label: "LeetCode",
      color: "hover:text-yellow-400",
    },
    {
      icon: SiGeeksforgeeks,
      href: personalInfo.social?.geeksforgeeks,
      label: "GFG",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section
      id="contact"
      className="section-container relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-accent-primary/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative bg-dark-surface/80 backdrop-blur-sm p-4 rounded-full border border-accent-primary/30">
                <FiSend size={32} className="text-accent-primary" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              {" "}
              Amazing
            </span>
          </h2>
          <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Have an exciting project or opportunity? I'm always open to
            discussing new ideas and collaborations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
          {/* Left side - Contact Info & Socials (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick contact cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-dark-surface/60 backdrop-blur-sm border border-dark-border rounded-xl hover:border-accent-primary transition-all"
                    >
                      <div
                        className={`p-3 rounded-lg bg-dark-bg/50 ${info.color} group-hover:scale-110 transition-transform`}
                      >
                        <info.icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-dark-muted uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium truncate">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-dark-surface/60 backdrop-blur-sm border border-dark-border rounded-xl">
                      <div
                        className={`p-3 rounded-lg bg-dark-bg/50 ${info.color}`}
                      >
                        <info.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-dark-muted uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-dark-surface/60 backdrop-blur-sm border border-dark-border rounded-xl"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-dark-bg/50 border border-dark-border rounded-lg transition-all ${link.color}`}
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 bg-gradient-to-br from-accent-success/20 to-accent-primary/20 backdrop-blur-sm border border-accent-success/30 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-accent-success"
                />
                <div>
                  <p className="text-sm font-semibold">
                    Available for opportunities
                  </p>
                  <p className="text-xs text-dark-muted">
                    Open to internships & full-time roles
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Contact Form (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 lg:p-8 bg-dark-surface/60 backdrop-blur-sm border border-dark-border rounded-2xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-medium text-sm">
                    Your Name
                  </label>
                  <div className="relative">
                    <FiUser
                      className="absolute left-3 top-3.5 text-dark-muted"
                      size={18}
                    />
                    <input
                      {...register("name", { required: "Name is required" })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border bg-dark-bg/50 border-dark-border focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                      disabled={status === "sending"}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-accent-error flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium text-sm">
                    Your Email
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-3 top-3.5 text-dark-muted"
                      size={18}
                    />
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border bg-dark-bg/50 border-dark-border focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                      disabled={status === "sending"}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-accent-error flex items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium text-sm">
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare
                    className="absolute left-3 top-3.5 text-dark-muted"
                    size={18}
                  />
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border bg-dark-bg/50 border-dark-border focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all resize-none"
                    rows="6"
                    placeholder="Tell me about your project or just say hi..."
                    disabled={status === "sending"}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1.5 text-xs text-accent-error flex items-center gap-1">
                    <FiAlertCircle size={12} />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 py-3.5"
                whileHover={status === "sending" ? {} : { scale: 1.02 }}
                whileTap={status === "sending" ? {} : { scale: 0.98 }}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-accent-success bg-accent-success/10 px-4 py-3 rounded-lg border border-accent-success/30"
                >
                  <FiCheck size={20} />
                  <p className="text-sm">
                    Message sent! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-accent-error bg-accent-error/10 px-4 py-3 rounded-lg border border-accent-error/30"
                >
                  <FiAlertCircle size={20} />
                  <p className="text-sm">
                    Failed to send. Please email me directly.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
