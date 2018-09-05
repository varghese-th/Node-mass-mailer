// module.exports = {
// 	viewPage: function (req, res, next) {
// 	// 	// var reply = '';
// 	// 	// reply += "<strong>Name</strong> : " + req.body.name;
// 	// 	// reply += "<br><strong>Address</strong> : " + req.body.address;
// 		res.send('hello' + req.body.mailSalutationFormInput);
// 	}
// }

module.exports = {
viewPage: function (req, res, next) {

	var redirectview = '';
	redirectview += ' <!DOCTYPE html>';
	redirectview += ' <html>';

	redirectview += '     <head>';

	redirectview += '     <link rel="stylesheet" type="text/css" href="./../css/mail-form.css">';
	redirectview += '     </head>';

	redirectview += '     <body>';
	redirectview += '         <form id="contact" method="post">';
	redirectview += '           <div class="mailform-distributed">';
	redirectview += '               <div class="mailform-left">';
	redirectview += '           <div class="mmm">             ';
	redirectview += '                 <h3>Mail Settings</h3>';
	redirectview += '                 <br>';
	redirectview += '                <fieldset>';
	redirectview += '                    <a>Mail Subject : </a> ';
	redirectview += '                    <input  name="mailSubjectFormInput" type="text" value="' + req.body.mailSubjectFormInput + '" required>';
	redirectview += '                </fieldset>                ';
	redirectview += '                <fieldset id="salutationid">';
	redirectview += '                    <a style="display: block;margin: 0; margin-bottom: 2px;">Salutation : </a>';
	redirectview += '                    <input name="mailSalutationFormInput" type="text" value="' + req.body.mailSalutationFormInput + '" required>';
	redirectview += '                    <a>+ Receiver Name</a>';
	redirectview += '                    <p>eg: Dear John, Hello Annie</p>';
	redirectview += '                </fieldset>';
	redirectview += '                <fieldset>';
	redirectview += '                    <a>Mail Content : </a>';
	redirectview += '                    <textarea  name="mailBodyFormInput" required>' + req.body.mailBodyFormInput + '</textarea>';
	redirectview += '                </fieldset>';
	// redirectview += '                <fieldset id="attachementid">';
	// redirectview += '                    <input type="file" name="mailAttachementFormInput">';
	// redirectview += '                </fieldset>';
	redirectview += '          </div>';
	redirectview += '              </div>';
	redirectview += '              <div class="mailform-right">';
	redirectview += '          <div class="mmm" id="contact">  ';
	redirectview += '                <h3>Sending Options</h3>';
	redirectview += '                <br>';
	redirectview += '                <fieldset>';
	redirectview += '                    <a>Test Mail : </a>';
	redirectview += '                    <input  name="testMailFormInput" type="text" value="' + req.body.testMailFormInput + '">';
	redirectview += '                </fieldset>';
	redirectview += '                <fieldset>';
	redirectview += '                    <button type="submit" formaction="/mail-form/testmail">Test</button>';
	redirectview += '                </fieldset>';
	redirectview += '                <fieldset>';
	redirectview += '                    <a>Database Name : </a>';
	redirectview += '                    <input  name="" type="text">';
	redirectview += '                </fieldset> ';
	redirectview += '                <fieldset>';
	redirectview += '                    <a>Table Name : </a>';
	redirectview += '                    <input  name="" type="text">';
	redirectview += '                </fieldset>        ';
	redirectview += '                <fieldset>';
	redirectview += '                    <button type="submit" formaction="/mail-form/send">Send</button>';
	redirectview += '                </fieldset>             ';
	redirectview += '          </div>';
	redirectview += '              </div>';
	redirectview += '          </div>';
	redirectview += '        </form>';
	redirectview += '    </body>';
	redirectview += '</html>';


	res.send(redirectview);
}
}