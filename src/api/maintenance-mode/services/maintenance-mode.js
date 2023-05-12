'use strict';

/**
 * maintenance-mode service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-mode.maintenance-mode');
