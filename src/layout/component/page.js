import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page component for components
 */
const ComponentPage = ({
	_ID,
	_relativeURL,
	header,
	sidebar,
	pagetitle,
	module,
	sections,
	footer
}) => {

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<title>${ pagetitle }</title>

<link rel="shortcut icon" type="image/x-icon" href=${ _relativeURL( '/assets/img/favicon.ico', _ID ) }>
<link rel="stylesheet" href=${ _relativeURL( '/assets/css/style.css', _ID ) }>

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->

<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />

		<body className="au-grid is-components">
			{ header }

			<div className="content-wrapper">
				<main id="content" className="main au-body container-fluid">
					<div className="row">
						<div className="col-md-3">
							{ sidebar }
						</div>
						<div className="grids col-md-9">
							{ sections }
						</div>
					</div>
				</main>

				{ footer }
			</div>
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
		</body>
		</html>
	);
}

ComponentPage.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * sections: (partials)(4)
	 */
	sections: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

ComponentPage.defaultProps = {};

export default ComponentPage;
