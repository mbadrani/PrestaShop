const {Menu} = require('../../../selectors/BO/menu.js');

module.exports = {
  checkConfigPage: function (client, ModulePage, moduleTechName) {
    test('should click on "Configure" button', () => client.waitForExistAndClick(ModulePage.action_module_built_button));
    test('should check the configuration page', () => client.checkTextValue(ModulePage.config_legend.replace("%moduleTechName", moduleTechName), moduleTechName));
  },
  installModule: function (client, ModulePage, AddProductPage, moduleTechName) {
    test('should go to "Module" page', () => client.goToSubtabMenuPage(Menu.Improve.Modules.modules_menu, Menu.Improve.Modules.modules_services_submenu));
    test('should set the name of the module in the search input', () => client.waitAndSetValue(ModulePage.module_selection_input, moduleTechName));
    test('should click on "Search" button', () => client.waitForExistAndClick(ModulePage.selection_search_button));
    test('should click on "Install" button', () => client.waitForExistAndClick(ModulePage.install_button.replace("%moduleTechName", moduleTechName)));
    test('should check that the success alert message is well displayed', () => client.waitForExistAndClick(AddProductPage.close_validation_button));
    test('should click on "Installed Modules"', () => client.waitForVisibleAndClick(ModulePage.installed_modules_tabs));
    test('should search for ' + moduleTechName + ' module in the installed module tab', () => client.waitAndSetValue(ModulePage.modules_search_input, moduleTechName));
    test('should click on "Search" button', () => client.waitForExistAndClick(ModulePage.modules_search_button));
    test('should check if the module ' + moduleTechName + ' was installed', () => client.checkTextValue(ModulePage.built_in_module, "1", "contain"));
  },
  uninstallModule: function (client, ModulePage, AddProductPage, moduleTechName) {
    test('should go to "Module" page', () => client.goToSubtabMenuPage(Menu.Improve.Modules.modules_menu, Menu.Improve.Modules.modules_services_submenu));
    test('should click on "Installed Modules"', () => client.waitForVisibleAndClick(ModulePage.installed_modules_tabs));
    test('should search for ' + moduleTechName + ' module in the installed module tab', () => client.waitAndSetValue(ModulePage.modules_search_input, moduleTechName));
    test('should click on "Search" button', () => client.waitForExistAndClick(ModulePage.modules_search_button));
    test('should click on module dropdown', () => client.waitForVisibleAndClick(ModulePage.option_button));
    test('should click on "Uninstall" button', () => client.waitForExistAndClick(ModulePage.uninstall_button));
    test('should click on "Yes, uninstall it" button', () => client.waitForVisibleAndClick(ModulePage.uninstall_module));
    test('should check that the success alert message is well displayed', () => client.waitForExistAndClick(AddProductPage.close_validation_button));
    test('should check if the module ' + moduleTechName + ' was installed', () => client.checkTextValue(ModulePage.built_in_module, "0", "contain"));
  },
  disableModule: function (client, ModulePage, AddProductPage, moduleTechName) {
    test('should go to "Module" page', () => client.goToSubtabMenuPage(Menu.Improve.Modules.modules_menu, Menu.Improve.Modules.modules_services_submenu));
    test('should click on "Installed Modules"', () => client.waitForVisibleAndClick(ModulePage.installed_modules_tabs));
    test('should search for ' + moduleTechName + ' module in the installed module tab', () => client.waitAndSetValue(ModulePage.modules_search_input, moduleTechName));
    test('should click on "Search" button', () => client.waitForExistAndClick(ModulePage.modules_search_button));
    test('should click on module dropdown', () => client.waitForVisibleAndClick(ModulePage.option_button));
    test('should click on "Disable" button', () => client.waitForExistAndClick(ModulePage.disable_module));
    test('should click on "Yes, disable it" button', () => client.waitForVisibleAndClick(ModulePage.confirmation_disable_module));
    test('should check that the success alert message is well displayed', () => client.waitForExistAndClick(AddProductPage.close_validation_button));
  },
  enableModule: function (client, ModulePage, AddProductPage, moduleTechName) {
    test('should go to "Module" page', () => client.goToSubtabMenuPage(Menu.Improve.Modules.modules_menu, Menu.Improve.Modules.modules_services_submenu));
    test('should click on "Installed Modules"', () => client.waitForVisibleAndClick(ModulePage.installed_modules_tabs));
    test('should search for ' + moduleTechName + ' module in the installed module tab', () => client.waitAndSetValue(ModulePage.modules_search_input, moduleTechName));
    test('should click on "Search" button', () => client.waitForExistAndClick(ModulePage.modules_search_button));
    test('should click on "Enable" button', () => client.waitForExistAndClick(ModulePage.enable_module));
    test('should check that the success alert message is well displayed', () => client.waitForExistAndClick(AddProductPage.close_validation_button));
  },
  resetModule: function (client, ModulePage, AddProductPage, Menu, moduleName, moduleTechName) {
    test('should go to "Module" page', () => client.goToSubtabMenuPage(Menu.Improve.Modules.modules_menu, Menu.Improve.Modules.modules_services_submenu));
    test('should click on "Installed Modules"', () => client.waitForVisibleAndClick(ModulePage.installed_modules_tabs));
    test('should search for ' + moduleName + ' module in the installed module tab', () => client.waitAndSetValue(ModulePage.modules_search_input, moduleTechName));
    test('should click on "Search" button', () => client.waitForExistAndClick(ModulePage.modules_search_button));
    test('should click on module dropdown', () => client.waitForVisibleAndClick(ModulePage.option_button));
    test('should click on "Reset" action', () => client.waitForExistAndClick(ModulePage.reset_module));
    test('should click on "Reset" button', () => client.waitForExistAndClick(ModulePage.reset_button));
    test('should check that the success alert message is well displayed', () => client.waitForExistAndClick(AddProductPage.close_validation_button));
    test('should go to "Dashboard" page', () => client.waitForExistAndClick(Menu.dashboard_menu));
  }
};