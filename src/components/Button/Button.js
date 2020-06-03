import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Button extends React.Component {
  static propTypes = {
    /** Specifies button content. **/
    children: PropTypes.node,
    /** Specifies if button should be enable / disabled **/
    disabled: PropTypes.bool,
    /** Specifies if button should take the fullwidth of parent **/
    fullWidth: PropTypes.bool,
    /** hyperlink button **/
    href: PropTypes.string,
    kind: PropTypes.oneOf(['default', 'danger', 'primary', 'secondary']),
    size: PropTypes.oneOf(['large', 'small']),
  };

  static defaultProps = {
    kind: 'default'
  };

  render() {
    const {
      className,
      fullWidth,
      kind,
      size, 
      disabled,
      children,
      ...others
    } = this.props;

    let props = {
      className: classnames(
        className,
        'btn',
        `btn-${kind}`,
        `href-${kind}`,
        {
          'btn-block': fullWidth,
          'btn-lg': (size === 'large'),
          'btn-sm': (size === 'small')
        }
      ),
      ...others
    };

    // const buttonText = Array.isArray(children)
    //   ? children.filter(child => typeof child === 'string').join(' ')
    //   : typeof children === 'string'
    //     ? children.toString()
    //     : null;

    // let btnChildren = children;

    // if (buttonText) {
    //   props = {'aria-label': buttonText, ...props};
    //   btnChildren = (<span>{children}</span>);
    // }

    const buttonContent = (
      <Fragment>
            { children }
      </Fragment>
    );

    return this.props.href
      ? <a {...props} target="_blank">{buttonContent}</a>
      : <button type="button" {...props}>{buttonContent}</button>;
  }
}

const defButton = kind => props => {
  return (
    <Button kind={kind} {...props}/>
  );
};

export const DefaultButton = defButton('default');
export const PrimaryButton = defButton('primary');
export const SecondaryButton = defButton('secondary');
export const DangerButton = defButton('danger');