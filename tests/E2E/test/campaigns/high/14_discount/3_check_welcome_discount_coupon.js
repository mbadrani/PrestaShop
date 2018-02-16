const {AccessPageBO} = require('../../../selectors/BO/access_page');
const {AccessPageFO} = require('../../../selectors/FO/access_page');
const {Menu} = require('../../../selectors/BO/menu.js');
const {ModulePage} = require('../../../selectors/BO/module_page');
const {EmailParameters} = require('../../../selectors/BO/advancedParameters/Email');
const {accountPage}= require('../../../selectors/FO/add_account_page');
const {MailDevWebApp}= require('../../../selectors/MailDev_webapp');

let data = require('./../../../datas/customer_and_address_data');

/**
 * This scenario is based on the bug described in this ticket
 * http://forge.prestashop.com/browse/BOOM-4296
 **/

scenario('Activate the welcome discount coupon code on the "Newsletter subscription" module ', () => {
  scenario('Login in the Back Office', client => {
    test('should open the browser', () => client.open());
    test('should login successfully in the Back Office', () => client.signInBO(AccessPageBO));
  }, 'common_client');

  scenario('Go to "Newsletter subscription" configuration page and activate the welcome discount coupon code', client => {
    test('should go to "Module" page', () => client.waitForExistAndClick(Menu.Improve.Modules.modules_menu));
    test('should Click on  "Installed modules" tabs', () => client.waitForExistAndClick(Menu.Improve.Modules.installed_modules_tabs));
    test('should set the name of the module in the search input', () => client.waitAndSetValue(ModulePage.module_selection_input, "ps_emailsubscription"));
    test('should click on the "Search" button', () => client.waitForExistAndClick(ModulePage.selection_search_button));
    test('should click on the "Configure" button', () => client.waitForExistAndClick(ModulePage.newsletter_module_configuration_button));
    test('should set the "welcome voucher code"', () => client.waitAndSetValue(ModulePage.welcome_voucher_code, "WV"+date_time));
    test('should click on the "save" button', () => client.waitForExistAndClick(ModulePage.save_newsletter_settings_button));
    test('should check that the configuration is saved', () => client.checkTextValue(ModulePage.module_save_confirmation_success_msg, "Settings updated", "contain"));
  }, 'common_client');

  scenario('Configuration of SMTP mail server', client => {
    test('should go to "Advanced Parameters - Email" page', () => client.goToSubtabMenuPage(Menu.Configure.AdvancedParameters.advanced_parameters_menu, Menu.Configure.AdvancedParameters.email_submenu));
    test('should click on the "Set my own SMTP parameters (for advanced users ONLY)" option', () => client.waitForExistAndClick(EmailParameters.smtp_parameters_option));
    test('should set the "Mail domain name"', () => client.waitAndSetValue(EmailParameters.mail_domain_name, "localhost"));
    test('should set the "SMTP server"', () => client.waitAndSetValue(EmailParameters.smtp_server_input, "0.0.0.0"));
    test('should set the "SMTP username"', () => client.waitAndSetValue(EmailParameters.smtp_user_name_input, "user"));
    test('should set the "SMTP password"', () => client.waitAndSetValue(EmailParameters.smtp_password_input, "user"));
    test('should set the "Port"', () => client.waitAndSetValue(EmailParameters.smtp_port_input, "1025"));
    test('should click on the "Save" button', () => client.waitForExistAndClick(EmailParameters.save_button));
  }, 'common_client');

  scenario('Logout from the Back Office', client => {
    test('should logout successfully from the Back Office', () => client.signOutBO());
  }, 'common_client');

  scenario('Login in the Front Office', client => {
    test('should login successfully in the Front Office', () => client.linkAccess(URL));
  }, 'common_client');

  scenario('Create a new account on the shopping cart, mark the box "Sign up for our newsletter" ', client => {
    test('should set the shop language to "English"', () => client.changeLanguage('english'));
    test('should click on the "Sign in" link', () => client.waitForExistAndClick(AccessPageFO.sign_in_button));
    test('should click on "No account? Create one here" link', () => client.waitForExistAndClick(accountPage.create_button));
    test('should choose a "Social title" option', () => client.waitForExistAndClick(accountPage.radio_button_gender));
    test('should set the "First name" input', () => client.waitAndSetValue(accountPage.firstname_input, data.customer.firstname));
    test('should set the "Last name" input', () => client.waitAndSetValue(accountPage.lastname_input, data.customer.lastname));
    test('should set the "Email" input', () => client.waitAndSetValue(accountPage.email_input, 'new' + data.customer.email.replace("%ID", date_time)));
    test('should set the "Password" input', () => client.waitAndSetValue(accountPage.password_input, data.customer.password));
    test('should click on the "Sign up for our newsletter" button', () => client.waitForExistAndClick(accountPage.save_newsletter_settings_button));
    test('should click on the "Save" button', () => client.waitForExistAndClick(accountPage.save_account_button));
  }, 'common_client');

  scenario('Log into SMTP page and check the received mail ', client => {
    test('should set the shop language to "English"', () => client.linkAccess('0.0.0.0:1080'));
    test('should click on the first mail in the list', () => client.waitForExistAndClick(MailDevWebApp.first_mail));
    test('should check Mail content', () => client.checkTextValue(MailDevWebApp.text_received_mail, "WV"+date_time));
  }, 'common_client');

  scenario('Login in the Back Office', client => {
    test('should login successfully in the Back Office', () => client.signInBO(AccessPageBO));
  }, 'common_client');

  scenario('check that the email was send from the shop mail history', client => {
    test('should go to "Advanced Parameters - Email" page', () => client.goToSubtabMenuPage(Menu.Configure.AdvancedParameters.advanced_parameters_menu, Menu.Configure.AdvancedParameters.email_submenu));
    test('should set the mail in the recipient search input', () => client.waitAndSetValue(EmailParameters.recipient_search, 'new' + data.customer.email.replace("%ID", date_time)));
    test('should click on the "Search" button', () => client.waitForExistAndClick(EmailParameters.search_button));
    test('should check the mail Subject', () => client.checkTextValue(EmailParameters.mail_subject, '[prestashop_demo] Newsletter voucher'));
  }, 'common_client');

}, 'common_client');