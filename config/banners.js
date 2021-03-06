/**
 * @fileoverview Defines configuration for licensing banners in production outputs.
 */
const { stripIndents } = require('common-tags');
const pkg = require('../package.json');

module.exports = {
  max: `${stripIndents`
		/**
		 * Grindstone JavaScript Library v${pkg.version}
		 * ${pkg.repository.url}
		 *
		 * Copyright (c) 2014, ${new Date().getFullYear()} ${pkg.author.name}
		 * @license MIT
		 * ${pkg.repository.url}/blob/main/LICENSE
		 */
	`}\n\n`,
  min: `/*! Grindstone JavaScript Library v${
    pkg.version
  } | Copyright (c) 2014, ${new Date().getFullYear()} ${pkg.author.name} | ${
    pkg.repository.url
  }/blob/main/LICENSE */\n`
};
