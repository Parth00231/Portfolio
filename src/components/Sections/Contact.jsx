import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Copy, Check, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _honey: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('parthrastogi2301@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._honey) return; // Spam bot trapped

    setStatus('submitting');
    try {
      const response = await fetch('https://formsubmit.co/ajax/parthrastogi2301@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', _honey: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 border-t border-white/5 bg-space-950/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center space-y-3"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wider">
            LET'S WORK <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">TOGETHER</span>
          </h2>
          
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-light">
            Have a project, job opening, or collaboration in mind? Drop a message directly below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Contact Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-2xl bg-space-900/60 border border-white/10 p-8 backdrop-blur-xl flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="cyber-bracket-tl" />
            <div className="cyber-bracket-br" />

            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-white">
                Direct Channels
              </h3>
              
              <div className="p-4 rounded-xl bg-space-850 border border-white/5 space-y-2">
                <div className="text-xs text-slate-400 font-mono">
                  <span>EMAIL ADDRESS</span>
                </div>
                <p className="text-sm font-semibold text-white truncate">
                  parthrastogi2301@gmail.com
                </p>
                <button
                  onClick={copyEmail}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL ADDRESS'}</span>
                </button>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 text-cyan-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-mono uppercase text-[10px]">Turnaround</p>
                    <p className="font-medium">Within 24 Hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <div className="p-2 rounded-lg bg-white/5 text-emerald-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-mono uppercase text-[10px]">Status</p>
                    <p className="font-medium">Available for Hire & Projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 text-xs text-slate-400 font-mono">
              Noida, Uttar Pradesh, India
            </div>
          </motion.div>

          {/* Form Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-2xl bg-space-900/60 border border-white/10 p-8 md:p-10 backdrop-blur-xl shadow-xl relative overflow-hidden group"
          >
            <div className="cyber-bracket-tl" />
            <div className="cyber-bracket-br" />

            <form 
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col gap-6"
            >
              {/* Honeypot field for bot protection */}
              <input 
                type="text" 
                name="_honey" 
                value={formData._honey} 
                onChange={handleChange} 
                className="hidden" 
                tabIndex="-1" 
                autoComplete="off" 
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono font-medium tracking-widest text-slate-300 uppercase">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-cyan-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-space-850/90 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono font-medium tracking-widest text-slate-300 uppercase">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-space-850/90 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono font-medium tracking-widest text-slate-300 uppercase">
                  Message Details
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none text-cyan-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your vision, timeline, or inquiries..."
                    className="w-full bg-space-850/90 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>TRANSMISSION RECEIVED! Thank you for reaching out, I'll get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Transmission error. Please try again or email directly to parthrastogi2301@gmail.com.</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] font-mono text-slate-400">
                  Protected with encrypted async transmission.
                </span>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-400 hover:to-cyan-400 text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND TRANSMISSION</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


