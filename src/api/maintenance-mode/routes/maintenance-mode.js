'use strict';

/**
 * maintenance-mode router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::maintenance-mode.maintenance-mode');
