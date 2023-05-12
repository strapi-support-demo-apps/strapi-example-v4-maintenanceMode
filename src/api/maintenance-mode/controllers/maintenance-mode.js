'use strict';

/**
 * maintenance-mode controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::maintenance-mode.maintenance-mode');
