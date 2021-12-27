import { FaSpinner } from "react-icons/fa";
import SpinnerStyles from './Spinner.module.css'

const Spinner = () => {
    return ( 
        <div className={SpinnerStyles.spinner__styles}>
            <FaSpinner className={SpinnerStyles.spinner__move}/>
        </div>
     );
}
 
export default Spinner;