import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider mb-4">
            LET'S WORK <span className="text-[#0ea5e9]">TOGETHER</span>
          </h2>
          <p className="text-slate-400">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0d0d1a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(14,165,233,0.1)] overflow-hidden group"
        >
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <form 
            action="https://formsubmit.co/parthrastogi2301@gmail.com" 
            method="POST" 
            className="relative z-10 flex flex-col gap-6"
          >
            {/* FormSubmit configs */}
            <input type="hidden" name="_subject" value="New Contact from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium tracking-widest text-slate-400 uppercase">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#0ea5e9]">
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium tracking-widest text-slate-400 uppercase">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#0ea5e9]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium tracking-widest text-slate-400 uppercase">Message</label>
              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none text-[#0ea5e9]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full md:w-auto self-end bg-[#0ea5e9]/10 hover:bg-[#0ea5e9] border border-[#0ea5e9]/50 hover:border-[#0ea5e9] text-[#0ea5e9] hover:text-white px-8 py-4 rounded-lg font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
