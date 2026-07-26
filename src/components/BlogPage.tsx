import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'Designing calm interfaces',
    summary: 'A short approach to building experiences that feel focused, minimal, and easy to use.',
  },
  {
    title: 'Shipping with intention',
    summary: 'How clarity in structure helps teams move faster without losing quality.',
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/20"
        >
          <div className="flex items-center gap-3 text-purple-300">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-mono uppercase tracking-[0.3em]">Blog</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Notes, ideas, and thoughtful reflections.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A simple space for sharing small lessons, product thinking, and the kind of ideas that stay useful over time.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-[#070707] p-6"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Entry {index + 1}</p>
              <h2 className="mt-3 font-display text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{post.summary}</p>
              <a href="#home" className="mt-5 inline-flex items-center gap-2 text-sm text-purple-300 transition hover:text-white">
                Read more
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
