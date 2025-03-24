import { NavLink } from 'react-router-dom';
import swiftLogo from '../assets/images/swift-logo.png'

interface NameProps {
  postion?: string;
  width?: string;
  height?: string;
};



export const Name: React.FC<NameProps> = ( {postion = "absolute" , width = "w-[170px]", height = "h-[70px]"} ) => {
  return (
    <div className={`absolute ${postion}`}>
      <NavLink to="/">
        <img src={swiftLogo} 
             className={`${width} ${height}`}/>
      </NavLink>

    </div>
  )
}
