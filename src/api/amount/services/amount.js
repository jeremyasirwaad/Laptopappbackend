'use strict';

/**
 * amount service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::amount.amount');
