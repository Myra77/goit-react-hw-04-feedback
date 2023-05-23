import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
        {options.map(option => (
            <button
                className={css.btn}
                key={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
                >
                {option}
            </button>
        ))}
        </div>
    )  
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
};

