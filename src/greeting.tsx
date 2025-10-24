import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Music, VolumeX, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Greeting Him Component
const GreetingHim = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="mb-16 relative"
    >
      {/* Romantic Weather Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Falling Rose Petals */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            className="absolute w-3 h-4 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              y: [0, window.innerHeight + 50],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360 * 3],
              opacity: [0.7, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}

        {/* Glowing Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Photo Frame Container */}
      <div className="relative z-10 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
        {/* Floating Hearts Around Frame */}
        <motion.div
          className="absolute -top-4 -left-4"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart className="text-red-400" size={28} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute -top-4 -right-4"
          animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <Heart className="text-pink-400" size={24} fill="currentColor" />
        </motion.div>
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Heart className="text-rose-400" size={26} fill="currentColor" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 mb-6"
        >
          Your Special Moments
        </motion.h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Photo 1 - Your Ex */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="relative group"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl overflow-hidden border-4 border-white/40 shadow-lg">
              {/* Placeholder - Replace with actual photo */}
              {/* <div className="w-full h-full flex items-center justify-center text-white text-sm font-medium">
                <div className="text-center">
                  <Heart
                    size={40}
                    fill="currentColor"
                    className="mx-auto mb-2 opacity-50"
                  />
                  <p className="opacity-70">Your Photo</p>
                </div>
              </div> */}
              <img src="/second.jpg" alt="" />
            </div>
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-200, 200] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.div>

          {/* Photo 2 - His Boyfriend */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
            className="relative group"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-300 to-purple-300 rounded-2xl overflow-hidden border-4 border-white/40 shadow-lg">
              {/* Placeholder - Replace with actual photo */}
              {/* <div className="w-full h-full flex items-center justify-center text-white text-sm font-medium">
                <div className="text-center">
                  <Heart
                    size={40}
                    fill="currentColor"
                    className="mx-auto mb-2 opacity-50"
                  />
                  <p className="opacity-70">His Photo</p>
                </div>
              </div> */}
              <img src="/seconds.jpg" alt="" />
            </div>
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-200, 200] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 1,
              }}
            />
          </motion.div>
        </div>

        {/* Romantic Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="text-center"
        >
          <p className="text-white/90 text-base italic leading-relaxed">
            " You both deserve a beautiful life forever 💑"
          </p>
        </motion.div>

        {/* Sparkle Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Sparkles className="text-yellow-200" size={16} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function BirthdayWish() {
  const [showConfetti] = useState(false);
const [audioPlaying, setAudioPlaying] = useState(true);
const [audio] = useState(new Audio("/secondaudio.m4a"));

useEffect(() => {
  audio.loop = true;
  audio.volume = 0.4;

  const startAudio = () => {
    audio.play().catch((err) => console.log("Autoplay blocked:", err));
  };

  startAudio();

  return () => {
    audio.pause();
  };
}, [audio]);

const toggleAudio = () => {
  if (audioPlaying) {
    audio.pause();
    setAudioPlaying(false);
  } else {
    audio.play().catch((err) => console.log("Play failed:", err));
    setAudioPlaying(true);
  }
};


  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Audio Control */}
      <motion.button
        onClick={toggleAudio}
        className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full text-white"
        whileTap={{ scale: 0.9 }}
      >
        {audioPlaying ? <Music size={20} /> : <VolumeX size={20} />}
      </motion.button>

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <>
            {confettiPieces.map((piece) => (
              <motion.div
                key={piece.id}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${piece.left}%`,
                  top: "-10px",
                  backgroundColor: [
                    "#FFD700",
                    "#FF69B4",
                    "#00CED1",
                    "#FF6347",
                    "#9370DB",
                  ][Math.floor(Math.random() * 5)],
                }}
                initial={{ y: 0, opacity: 1, rotate: 0 }}
                animate={{
                  y: window.innerHeight + 50,
                  opacity: 0,
                  rotate: 360 * 3,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  ease: "easeIn",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block mb-4"
          >
            <Sparkles className="text-yellow-300" size={40} />
          </motion.div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 mb-2">
            Happy Birthday
          </h1>
          <p className="text-yellow-100 text-lg">October 25th</p>
        </motion.div>

        {/* Cake Section */}

        {/* Greeting Him Component */}
        <GreetingHim />

        {/* Birthday Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center mb-12"
        >
          <p className="text-white text-lg leading-relaxed mb-6 px-4">
            Though our paths have changed, today is still special. Wishing you a
            year filled with joy, success, and all the happiness you deserve.
          </p>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Heart className="text-pink-400" size={32} fill="currentColor" />
          </motion.div>
        </motion.div>

        {/* Wishes Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="space-y-6"
        >
          {[
            {
              text: "May this year bring you endless opportunities and beautiful moments",
              delay: 0,
            },
            {
              text: "Wishing you health, wealth, and wisdom in abundance",
              delay: 0.3,
            },
            { text: "May all your dreams turn into reality", delay: 0.6 },
            {
              text: "Here's to another amazing year of your life! 🎉",
              delay: 0.9,
            },
          ].map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 + wish.delay, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <p className="text-white text-center">{wish.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Hearts */}
        <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${20 + i * 15}%` }}
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: -100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
            >
              <Heart className="text-pink-400" size={20} fill="currentColor" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center my-4">
          {" "}
          <Link to="/">
            <button
              className="
                  relative px-5 my-4 py-3 rounded-2xl text-white text-lg font-semibold
                  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                  shadow-lg shadow-purple-500/40 active:scale-95
                  transition-all duration-300
                  hover:shadow-purple-500/80
                "
            >
              <span className="absolute inset-0 rounded-2xl bg-white/10 blur-md animate-pulse"></span>
              <span className="relative z-10">Go to Cake</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
