import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ShootingStar = ({ theme }) => {
  const [left, setLeft] = useState(Math.random() * window.innerWidth);
  const [top, setTop] = useState(-50); // Mulai dari atas
  const [xDirection, setXDirection] = useState(Math.random() > 0.5 ? 1 : 1); // Arah acak kiri atau kanan
  const [duration, setDuration] = useState(Math.random() * 4 + 3); // Durasi acak antara 3 hingga 7 detik
  const [key, setKey] = useState(0);
  const [size, setSize] = useState(Math.random() * 3 + 2); // Ukuran acak antara 2px hingga 5px

  const triggerNewStar = () => {
    setTimeout(() => {
      setLeft(Math.random() * window.innerWidth); // Posisi X acak
      setTop(-50); // Kembali ke posisi atas
      setXDirection(Math.random() > 0.5 ? 1 : 1); // Arah acak kiri/kanan
      setDuration(Math.random() * 10 + 3); // Durasi acak antara 3 hingga 7 detik
      setSize(Math.random() * 3 + 2); // Ukuran acak antara 2px hingga 5px
      setKey(prev => prev + 1); // Trigger untuk reset animasi
    }, 500); // Delay sebelum bintang baru muncul
  };

  return (
    <motion.div
      key={key}
      initial={{ x: left, y: top, opacity: 0 }}
      animate={{
        x: left + xDirection * 300, // Posisi X bergerak ke kiri/kanan
        // y: document.documentElement.scrollHeight, // Jatuh ke bawah sampai ke tanah
        y: window.innerHeight - 5, // Jatuh ke bawah sampai ke tanah
        opacity: 1,
      }}
      transition={{ duration, ease: "easeInOut" }}
      onAnimationComplete={triggerNewStar} // Setelah selesai animasi, munculkan bintang baru
      className={`absolute w-[5px] h-[5px] ${
        theme === "Day" ? "bg-black" : "bg-white"
      } rounded-full shadow-md`}
      style={{ left: `${left}px`, top: 0,  width: `${size}px`, // Ukuran acak
      height: `${size}px` }}
    />
  );
};

export default ShootingStar;
