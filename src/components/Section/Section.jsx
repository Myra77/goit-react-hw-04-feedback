import { PropTypes } from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
};

Section.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
};