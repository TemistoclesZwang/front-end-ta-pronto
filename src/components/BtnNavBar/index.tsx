import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';


interface NavButtonProps {
  to: string;
  icon: any; // Substitua 'any' pelo tipo correto do seu ícone do FontAwesome
  text: string;
}
export function BtnNavBar({ to, icon, text }: NavButtonProps) {
  return (
    <li>
      <Link to={to} aria-label={text} className="btn-nav"> {/* Mover Link para envolver o botão */}
        <FontAwesomeIcon icon={icon} size="lg" className="icons" />
        <span className="hidden-text">{text}</span>
      </Link>
    </li>
  );
}


