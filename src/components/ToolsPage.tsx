import { motion } from 'motion/react';
import { Hammer, Sparkles } from 'lucide-react';

const tools = ['Figma', 'Vite', 'React', 'Tailwind CSS', 'TypeScript', 'Lucide Icons'];

export default function ToolsPage() {
  return (
    <section className="min-h-screen px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-purple-300"
        >
          <Hammer className="h-5 w-5" />
          <span className="text-xs font-mono uppercase tracking-[0.3em]">Tools</span>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              A focused toolkit for thoughtful build work.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              The stack stays lean and dependable so the experience feels fast, polished, and easy to maintain.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#080808] p-6">
            <div className="flex items-center gap-2 text-purple-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Current setup</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
