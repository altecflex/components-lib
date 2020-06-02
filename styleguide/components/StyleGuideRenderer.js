import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
// export const StyleGuideRenderer = ({
//     title,
//     version,
//     homepageUrl,
//     components,
//     toc,
//     hasSidebar
// }) => (
//         <div className="root">
//             <h1>{title}</h1>
//             {version && <h2>{version}</h2>}
//             <main className="wrapper">
//                 <div className="content">
//                     {components}
//                     <footer className="footer">
//                         <Markdown
//                             text={`Created with [React Styleguidist](${homepageUrl})`}
//                         />
//                     </footer>
//                 </div>
//                 {hasSidebar && <div className="sidebar">{toc}</div>}
//             </main>
//         </div>
//     )

export function StyleGuideRenderer({ title, version, homepageUrl, components, toc, hasSidebar, children }) {
    return (
        <div className="root">
            <h1>{title}</h1>
            {version && <h2>{version}</h2>}
            <main className="wrapper">
                <div className="content">
                    {components}
                </div>
                {hasSidebar && <div className="sidebar">{toc}</div>}
            </main>
        </div>
    );
}

StyleGuideRenderer.propTypes = {
    title: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string.isRequired,
    components: PropTypes.node.isRequired,
    toc: PropTypes.node.isRequired,
    hasSidebar: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
};

export default Styled(styles)(StyleGuideRenderer);