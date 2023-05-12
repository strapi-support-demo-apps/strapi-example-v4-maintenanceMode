"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const maintenanceModeCondition = {
      displayName: "Maintenance Mode Toggle",
      name: "maintenance-mode-toggle",
      async handler(user) {
        let maintenanceMode = await strapi.entityService.findMany(
          "api::maintenance-mode.maintenance-mode"
        );
        if (maintenanceMode && maintenanceMode.enabled === true) {
          return false;
        }
        return true;
      },
    };
    await strapi.admin.services.permission.conditionProvider.register(
      maintenanceModeCondition
    );
  },
};
