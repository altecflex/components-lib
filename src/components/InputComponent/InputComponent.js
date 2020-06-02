import React from 'react';
import PropTypes from 'prop-types';

/**
 * Input field with label
 * @param {string} label - The label for input
 * @callback callback - function to handle change event
 */

export class InputComponent extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        placeholderTxt: PropTypes.string
    };

    static defaultProps = {
        placeholderTxt: 'Field label'
    };

    constructor(props, context) {
        super(props, context);
        this.state = { active: false, locked: false, error: "" };
    }

    render() {
        const {
            value,
            placeholderTxt
        } = this.props;

        const { active, error, locked } = this.state;

        const fieldClassName = `field ${(locked ? active : active || value) &&
            "active"} ${locked && !active && "locked"}`;

        return (
            <div className={fieldClassName}>
                {active && value }
                <input
                    type="text"
                    value={value}
                    placeholder={placeholderTxt}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                />
                <label htmlFor={1} className={error && "error"}>
                    {error || placeholderTxt}
                </label>
            </div>
        )
    }
}
