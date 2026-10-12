import { motion } from "motion/react";
import sugarbayyLogo from "@/assets/sugarbayy-logo-nobg.png";

const Landing = () => {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center p-10">
      <div className="flex flex-col items-center justify-between h-full gap-4">
        <motion.img
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          src={sugarbayyLogo}
          alt="SugarBayy Logo"
          className="w-1/2 max-w-[500px] h-auto"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          className="-mt-48 font-bodoni leading-18 sm:leading-28 text-theme flex flex-col items-center justify-center w-fit"
        >
          <span className="text-[80px] sm:text-[120px]">Coming</span>
          <span className="text-[100px] sm:text-[160px]">Soon</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 60,
            damping: 10,
          }}
          className="text-theme font-poppins"
        >
          www.sugarbayy.in
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
