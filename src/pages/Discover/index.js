import Button from '~/components/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPadlet } from '@fortawesome/free-brands-svg-icons';
function Discover() {
    return (
        <div className="discover-wrapper">
            <Button circles>
                <FontAwesomeIcon icon={faPadlet} />
            </Button>
        </div>
    );
}

export default Discover;
