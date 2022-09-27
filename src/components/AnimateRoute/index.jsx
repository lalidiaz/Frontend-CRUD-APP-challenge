import { motion } from "framer-motion";

export const AnimateRoute = ({ children }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};
