import React from 'react';
import PropTypes from 'prop-types';

export class InputComponent extends React.Component {
    static propTypes = {
        /** Preset input value */
        value: PropTypes.string,
        /** Specifies placeholder for input box */
        placeholderTxt: PropTypes.string
    };

    // static defaultProps = {
    //     placeholderTxt: ''
    // };

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
