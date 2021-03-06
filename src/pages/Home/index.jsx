import "./style.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="bodyContainer">
        <div className="img">
          <img
            src="https://images.vexels.com/media/users/3/153698/isolated/preview/26b11f6925156237451555d29d636aa2-ilustra-ccedil-atilde-o-de-coruja-de-p-oacute-s-gradua-ccedil-atilde-o-by-vexels.png"
            alt="owl"
            width="80%"
          />
        </div>
        <div className="bodyText">
          Somos uma plataforma dedicada a ajudar professores a organizar suas
          atividades, turmas e alunos de uma maneira simples e acessível.
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
