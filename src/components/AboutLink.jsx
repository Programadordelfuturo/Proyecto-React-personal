import { Link } from 'react-router-dom'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const AboutLink = () => {
  return (
    <div>
      <a href="/About">
        <AiOutlineQuestionCircle size={25} />
      </a>
    </div>
  );
};

export default AboutLink;