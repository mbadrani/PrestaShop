module.exports = {
  EmailParameters:{
    smtp_parameters_option:'//*[@id="PS_MAIL_METHOD_2"]',
    mail_domain_name:'//input[contains(@name, "PS_MAIL_DOMAIN")]',
    smtp_server_input:'//input[contains(@name, "PS_MAIL_SERVER")]',
    smtp_user_name_input:'//input[contains(@name, "PS_MAIL_USER")]',
    smtp_password_input:'//input[contains(@name, "PS_MAIL_PASSWD")]',
    smtp_port_input:'//input[contains(@name, "PS_MAIL_SMTP_PORT")]',
    save_button:'//*[@id="mail_fieldset_smtp"]//button[contains(@name, "submitOptionsmail")]',
    recipient_search:'//*[@id="form-mail"]//input[contains(@name, "mailFilter_recipient")]',
    search_button:'//*[@id="submitFilterButtonmail"]',
    mail_subject:'(//*[@id="form-mail"]//td[6])[2]'
  }
};
//button[contains(@name, "submitOptionsmail")]