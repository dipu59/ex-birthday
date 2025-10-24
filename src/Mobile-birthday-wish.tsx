import  { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Mobile-first single-file React component.
// Tailwind CSS required. Install framer-motion.
// Usage: <BirthdayWishMobile name="Rohit" songSrc="/path/to/lofi.mp3" />

export default function BirthdayWishMobile({
  name = "",
  songSrc = "/dhun2.mp4a",
}) {
  const [started, setStarted] = useState(false); // user tapped to start
  const [playing, setPlaying] = useState(false);
  const [blown, setBlown] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // create Audio element once
  useEffect(() => {
    audioRef.current = new Audio(songSrc);
    audioRef.current.loop = true;
    audioRef.current.preload = "auto";
    audioRef.current.volume = 0.9;
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, [songSrc]);

  // fade out audio when blown
  useEffect(() => {
    if (blown && audioRef.current) {
      const a = audioRef.current;
      let v = a.volume;
      const iv = setInterval(() => {
        v = Math.max(0, v - 0.05);
        a.volume = v;
        if (v <= 0.05) {
          a.pause();
          setPlaying(false);
          clearInterval(iv);
        }
      }, 120);
    }
  }, [blown]);

  const handleStart = async () => {
    // mobile browsers often block autoplay; require user gesture
    setStarted(true);
    try {
      if (!audioRef.current) return;
      await audioRef.current.play();
      setPlaying(true);
    } catch (err) {
      // fallback: show controls or ask to tap play
      console.warn("Audio play blocked:", err);
      setPlaying(false);
    }
  };

  const togglePlay = async () => {
    if (!started) return handleStart();
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.warn("play error", err);
      }
    }
  };

  const blowCandles = () => {
    if (!started) {
      handleStart();
      // small delay so user hears some audio before blow effect
      setTimeout(() => setBlown(true), 700);
    } else {
      setBlown(true);
    }
  };

  // helper to render confetti pieces
  const Confetti = ({show}: {show: boolean}) => {
    const pieces = Array.from({ length: 28 });
    return (
      <AnimatePresence>
        {show && (
          <div className="pointer-events-none fixed inset-0 z-40">
            {pieces.map((_, i) => {
              const left = Math.random() * 100;
              const delay = Math.random() * 0.6;
              const rot = (Math.random() - 0.5) * 360;
              const h = 10 + Math.random() * 14;
              return (
                <motion.div
                  key={i}
                  initial={{ y: -20, opacity: 0, rotate: rot }}
                  animate={{
                    y: 700 + Math.random() * 120,
                    opacity: 1,
                    rotate: rot + 360,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 + Math.random() * 1.4, delay }}
                  style={{ left: `${left}%` }}
                  className="absolute top-0 w-2"
                >
                  <div
                    className="rounded-sm"
                    style={{
                      height: `${h}px`,
                      width: `${Math.max(6, Math.random() * 10)}px`,
                      background: `hsl(${Math.floor(
                        Math.random() * 360
                      )} 90% 60%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    );
  };

  // animated letters for the headline
  const HappyMessage = ({ children }: { children?: string }) => {
    const letters = (children || "Happy Birthday").split("");
    return (
      <div className="flex items-center justify-center px-6 text-center">
        {letters.map((l, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * idx, type: "spring", stiffness: 300 }}
            id="heading"
            className="text-2xl  sm:text-3xl font-extrabold  tracking-widest"
          >
            {l}
          </motion.span>
        ))}
      </div>
    );
  };

  // Candle flame component
  const Flame = ({ alive = true }) => (
    <AnimatePresence>
      {!alive ? (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-5 left-1/2 transform -translate-x-1/2"
        />
      ) : (
        <motion.div
          animate={{ y: [0, -4, 0], scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 1.1 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1.5 h-4 rounded-full flex items-center justify-center">
            <div className="w-2 h-4 rounded-full relative">
              <div
                className="absolute -left-1 -top-1 w-4 h-6 rounded-full"
                style={{
                  filter: "blur(6px)",
                  background:
                    "radial-gradient(circle at 40% 30%, rgba(255,200,90,0.95), rgba(255,120,60,0.6), rgba(255,60,80,0.15))",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-800 flex items-center justify-center p-4 sm:p-8">
      <Confetti show={blown} />

      {/* overlay start screen for mobile-play requirement */}
      {!started && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="backdrop-blur-sm bg-white/5 rounded-xl p-6 text-center mx-4 shadow-lg"
          >
            <h2 className="text-white text-xl font-bold mb-3">
              Birthday Surprise
            </h2>
            <p className="text-white/80 mb-4">
              Tap to start the music and open your surprise 🎁
            </p>
            <button
              onClick={handleStart}
              className="px-6 py-2 rounded-full bg-white text-pink-600 font-semibold shadow"
            >
              Tap to Play
            </button>
            <p className="text-xs text-white/70 mt-3">
              If music doesn't play automatically, use the Play button below.
            </p>
          </motion.div>
        </div>
      )}

      <div className="w-full max-w-md mx-auto relative z-20">
        <div className="rounded-3xl bg-white/6 backdrop-blur-md p-4 shadow-2xl border border-white/10">
          <div className="flex items-center flex-col justify-between mb-3">
            <div>
              <HappyMessage>{`Happy Birthday ${
                name ? ` ${name}` : " Birthday"
              }`}</HappyMessage>
              <p className="text-xs text-white/80 mt-1 text-center">
                A little surprise made just for you 💫
              </p>
            </div>
            <div className="flex mt-4 gap-1  items-center">
              <button
                onClick={togglePlay}
                className=" px-3 py-1 rounded-md bg-white/10 text-white text-xs"
              >
                {playing ? "Pause" : "Play"}
              </button>
              <button
                onClick={() => {
                  setStarted(true);
                  setBlown(false);
                }}
                className="px-3 py-1 rounded-md bg-white/10 text-white text-xs"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Animation area */}
          <div className="flex flex-col items-center pt-6 pb-4">
            {/* Animated cake */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={blowCandles}
              className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-end justify-center cursor-pointer"
            >
              {/* cake plate */}
              <div
                className="absolute bottom-6 w-48 h-6 rounded-full bg-gradient-to-b from-gray-300/50 to-white/30 blur-sm"
                style={{ filter: "blur(2px)" }}
              />

              {/* cake layers */}
              <div className="relative flex flex-col items-center z-10">
                <div
                  className="w-48 h-20 rounded-t-2xl rounded-b-md bg-pink-400 shadow-inner flex items-center justify-center"
                  style={{ boxShadow: "inset 0 -8px 14px rgba(0,0,0,0.12)" }}
                >
                  <div className="absolute -top-8 flex space-x-3">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="relative w-3 h-8 pb-2 bg-white rounded-sm flex items-end justify-center"
                      >
                        <div className={`w-0.5 h-4 bg-yellow-300`} />
                        <Flame alive={!blown} />
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="w-52 h-12 mt-2 rounded-b-2xl bg-red-600"
                  style={{ boxShadow: "0 6px 14px rgba(0,0,0,0.25)" }}
                />
              </div>

              {/* icing drizzle */}
              <div
                className="pointer-events-none absolute top-24 w-44 h-6 rounded-t-xl bg-gradient-to-r from-white/90 to-white/60 opacity-80 transform rotate-2"
                style={{ filter: "blur(0.4px)" }}
              />

              {/* sparkle hint */}
              <motion.div
                animate={{ rotate: [0, 15, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-10 right-6 text-white/80 text-sm"
              >
                ✨
              </motion.div>
            </motion.div>

            <p className="text-white/90 text-sm mt-4 px-6 text-center">
              Tap the cake to blow the candles 🎂
            </p>
          </div>

          {/* footer controls */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={blowCandles}
              className="px-4 py-2 rounded-full bg-white text-pink-600 font-semibold"
            >
              Blow Candles
            </button>
            <button
              onClick={() => {
                setBlown(false);
                if (audioRef.current) audioRef.current.volume = 0.9;
              }}
              className="px-3 py-2 rounded-full border border-white/20 text-white text-sm"
            >
              Light Again
            </button>
          </div>
        </div>

        {/* subtle caption */}
        <p className="text-xs text-white/60 text-center mt-3">
          Built with ❤️ — tap to play if audio is blocked on your device.
        </p>
        <div className="flex justify-center items-center my-4">
          <Link to="/birthdayWish">
            <button
              className="
          relative px-8 py-4 rounded-2xl text-white text-lg font-semibold
          bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
          shadow-lg shadow-purple-500/40 active:scale-95
          transition-all duration-300
          hover:shadow-purple-500/80
        "
            >
              <span className="absolute inset-0 rounded-2xl bg-white/10 blur-md animate-pulse"></span>
              <span className="relative z-10">Explore Love Page</span>
            </button>
          </Link>
        </div>
      </div>

      {/* small inline styles for cake/visual polish (feel free to move into CSS file) */}
      <style>{`
        /* Simple mobile-safe font-smoothing and background overlay tweaks */
        body { -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
      `}</style>
    </div>
  );
}
