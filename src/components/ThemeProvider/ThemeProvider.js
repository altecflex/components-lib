import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Helmet } from 'react-helmet';

const defaultTitle = "Design System | Alliance Bank";
const defaultLink = [{ rel: "stylesheet", href: "https://codepen.io/altecflex/pen/LYpwwLN.css" }]

export default function ThemeProvider({
    children,
    meta,
    link,
    title
}) {
    // const className = classnames({
    //     [styles.root]: true
    // });
    const className = "";

    const pageTitle = title || defaultTitle;

    return (
        <div className={className}>
            <Helmet title={pageTitle} meta={meta} link={defaultLink} />

            {children}
        </div>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    meta: PropTypes.array
};

ThemeProvider.defaultProps = {
    meta: []
};
