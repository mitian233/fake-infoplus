/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['en'] = {
		closeText: 'close',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
        monthNames: ['January','February','March','April','May','June',
            'July','August','September','October','November','December'], // Names of months for drop-down and formatting
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
        dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
        weekHeader: 'Wk', // Column header for week of the year
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en']);
});

(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters allowed"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* Invalid email address"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "formatError": {
                    "alertText": "Error format!"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);
(function () {

    $.fn.timeago.defaults.lang = {
        units: {
            second: "&nbsp;second",
            seconds: "&nbsp;seconds",
            minute: "&nbsp;minute",
            minutes: "&nbsp;minutes",
            hour: "&nbsp;hour",
            hours: "&nbsp;hours",
            day: "&nbsp;day",
            days: "&nbsp;days",
            month: "&nbsp;month",
            months: "&nbsp;months",
            year: "&nbsp;year",
            years: "&nbsp;years"
        },
        prefixes: {
            lt: "less&nbsp;than&nbsp;a",
            about: "about&nbsp;",
            over: "over&nbsp;",
            almost: "almost&nbsp;",
            ago: ""
        },
        suffix: '&nbsp;ago'
    };

}).call(this);
(function(window,undefined){var language={};language.common={ok:"Ok",confirm:"Ok",confirmAction:"Ok",cancel:"Cancel",history:"History",review:"Review",save:"Save",print:"Print",download:"Download",help:"Help",instruction:"Instructions",progress:"Progress",tips:"Tips",dismiss:"Dismiss",doAtOnce:"Do",notDoAtOnce:"Dismiss",fail:" fail",networkError:"Please check your network",load:"Load",choose:"Choose",deleteText:"Delete",close:"Close",yes:"Yes",no:"No",reload:"Reload",compare:"Compare",printInvoice:"Print Invoice",wait:"loading",back:"Back"};language.dialog={button:{close:"Close",min:"Minimize",restore:"Restore",openNew:"Open in new window"}};language.status={complete:"Completed",terminate:"Terminated",offline:"Offline",doing:"In Progress",admin:"Admin"};language.load={loadPage:"Loading ",loadWorkflow:"Loading ",loadForm:"Loading ",workflowInfo:"Loading ",loading:"Loading ",finish:"Complete ",fail:"Fail",paramError:"Parameter error",unknownError:"Unknown error"};language.error={error:"Error",parameter:"Parameter error",unknown:"Unknown error",lackOfPara:"Parameters needed",occur:"Error:",showDetail:"Click to show detail",detail:"Detail　"};language.tip={noMoreTip:"Don't show again",recoverTips:"Recover Tips",recovered:"All tips have been recovered. Tips will be shown the next time the page is opened."};language.login={needReLogin:"Your login has timed out. Don't refresh if there are unsaved data.",reLogin:"Relogin",clickHere:"here",retry:" to login in the pop-up page. Then click the following button to continue the previous operation.",entrust:"Your login has timed out. Please reload the page."};language.todo={doStep:"You can continue to do step",doSteps:"You can continue to do following steps,please choose",doing:" is working on ",user:"Somebody ",doJob:"Do"};language.start={viewInstance:"View"};language.save={tip:"Save the form as a draft.\nYou can continue it later from your task list.",saving:"Saving",wait:"Saving，please wait",success:"Saved successfully",scrollTip:"Save",adminModifyReason:"Please enter the reason to modify the data",reasonRequired:"You must enter the reason for modification!"};language.submit={needParam:"Parameters needed",needAction:"Action needed",prepare:"Preparing to submit,please wait...",submitting:"Submitting,please wait...",requestMsg:"Submission",request:"Preparing to submit",scanBarcode:"Please scan the barcode",inputBarcode:"Please input the barcode",noAction:"No action",inputRemark:"Please leave a comment",mustInputRemark:"You must input the remark",mustInputRemark2:"You must input the remark",clickComment:"If you have anything to comment,please click ",linkComment:"here",orComment:", or you can ",makeRemark:"add reviews",remarkInForm:" in the form.",viewRemarks:"See reviews in the form",remarkDone:"(<div class='memo_count'><p>{0}</p></div> review(s))",lastRemarkDiff:"{0} has been changed by system(click to copy)",lastRemark:"Last comment",nextSteps:"After submit,the workflow will go to the following steps",executor:"users",choose:"-- choose --",allUser:"-- all users --",helper:{title:"You can specify the user of this step, if not specified,\n all users will have permission to handle this step",content:"You can specify the user of this step, if not specified, all users will have permission to handle this step",mustChoose:"You must choose the user",chooseBySystem:"System specified",chooseOneBySystem:"System specified randomly"},chooseStepExecutor:"Please choose the user of step {0}",success:"Done successfully!",pleaseClick:"Please click",relative:"",continueTodo:"You can click next to continue to do {0}",continueTodoList:"You can do next steps,please choose:",continueToDebug:"Continue to debug",openInNewWindow:"It will be opened in new window",canContinueTodo:"You can click next to do {0}",pleaseContinueTodo:"Please click next to do {0}",doStep:"Do {0}",next:"Next",nextStep:"Next",parseDataError:"Exception occurs,please retry or contact with administrators",jsonError:"JSON serialization error",hasNotDo:{print:"If you haven't printed,",download:"If you haven't downloaded,",printOrDownload:"If you haven't printed or downloaded,"},canDo:{print:"You can print. ",download:"You can download. ",printOrDownload:"You can print or download. "},canClick:{print:"Please click print button or open the form again in task center later, and then print.",download:"Please click download button or open the form again in task center later, and then download.",printOrDownload:"Please click print or download button or you can open the form again in task center later, and then print or download."},closeAfterPrint:"You can close this page by the close button of the browser."};language.print={printNow:"Print",helper:"You can print in this step. Click the following link to print immediately or click the <span style='color:#4a4a4a'><i class='i-icon-print'></i></span>button above to print later.",printAfterAction:"Please print after submission.",printAfterActionHelper:"You can print in this step after submission.",notSupport:"You don't need to print anything currently",support:"You can print in this step",fail:"Fail"};language.download={downloadAfterAction:"You can download after submission.",pleaseDownloadAfterAction:"Please download after submission.",downloadPrintAfterAction:"You can print or download after submission.",support:"You can download now",notSupport:"You don't need to download anything currently",choose:"Please choose format",downloadDirectly:"Download",start:"Download",confirmDownloadDirectly:"Sure to download directly?",downloadDirectlyTip:"Download directly may cause data inconsistent. If you haven't made any changes, you can just download directly.",saveBeforeDownload:"Save & Download"};language.compare={support:"You can compare data",notSupport:"You don't need to compare data",compare:"Compare",introduce:"Please choose data you want to compare",requesting:"Receiving history data ",requestHistory:"Receiving history data ",initData:"Initial data",compareType:{typeNew:"New",typeModify:"Modified",typeDelete:"Cleared",typeDeleteAll:"All contents deleted",typeDeleteRows:"{0} rows deleted",typeNewRow:"New row",typeNewSection:"New section",typeDetail:"Detail data contains difference"},compared:"Tips have been shown on differences, ",compareNow:"Compare",clickHereToRemove:"Close ",removeTips:"all tips.",same:"No difference found!",previousValue:{previous:"Previous:",empty:"Previous value is empty."},helperText:"Because you have participated in this task. You can click the <span style='color:#4a4a4a'><i class='i-icon-my-library-books'></i></span>button above to highlight the differences with the previous content."};language.admin={exit:"Exit data management",manage:"Manage data",showRemark:"Show data management history"};language.command={helper:"Click buttons above to submit",isDone:"This task is submitted, no action required.",noAction:"No action",admin:"You are managing data",all:"All Actions",cancel:"Cancel"};language.kill={message:"Terminate",blockMessage:"Terminating...",title:"Terminate",confirmTitle:"Are you sure to terminate?",success:"Terminate successfully!",confirm:"The current business will end immediately.",reason:"Add a note that best describes why you want to \nterminate this task.",tip:"Terminate current workflow. The current business will end immediately.",menuTip:"Terminate workflow"};language.forward={title:"Forward",forwardButton:"Forward",addForwardButton:"Add Forward…",returnMessage:"After forward, the workflow will return to this step",chooseMessage:"Please choose the steps to transfer"};language.withdraw={message:"Withdraw",blockMessage:"Withdrawing...",success:"Withdraw successfully!",confirm:"Are you sure to withdraw your submission\nand make the form editable again?\nAfter that, don't forget to resubmit it.",title:"Withdraw",tip:"Withdraw your submission, then you can edit this form again."};language.preview={loadError:"Fail",starting:"Start...",start:"Start",refused:"Cannot handle",startButtonText:"Start",department:"Department:",contact:"Contact:",rateCount:"{0} ratings",previous:"Prev",next:"Next"};language.remarkHistory={loading:"loading history...",request:"load history",user:{you:"You",related:"Somebody",system:"System"},entrust:"entrust ",debug:" debug",action:{doing:" is working on ",youDoing:" are working on ",done:" completed ",sub:" are working on ",doneSub:" completed ",admin:" managed the data",kill:" terminated the application ",withdraw:" withdrew ",done2:" completed ",receiving:" is receiving "},showHide:"Click here to expand {0} history",hideRemark:"(Hidden)",createTime:"assign time",actionTime:"finish time",snapshotTitle:"view snapshot",showReview:"View {0} review{1} in the form",viewReviewLink:"View {0} review{1}",viewReviews:"view review",viewCcLink:"View {0} cc",viewCcs:"View cc",searchCc:"Search cc",showAdmin:"Show data management history",showAdminOrCc:"Show data management and cc history",review:{next:"Next",previous:"Previous",close:"Close"},read:"Read",subHistory:{link:"Show sub workflow",title:"Sub workflow(SN:{0})"}};language.snapshot={tip:'You are visiting the snapshot of "{1}" that has been handled at {0}'};language.milestone={doing:"In progress",didAt:"Done at {0}",done:"Done",todo:"Pending"};language.debug={tip:"Debug mode activated, click here to popup debug window. ",helperText:'This is a DEBUG version workflow instance. Your operations won\'t affect the PRODUCTION environment. In DEBUG mode, you can view more debugging information by click the "DEBUG button" above, and extra warnings would be displayed at the bottom of the page.'};language.entrust={showWindow:"Show entrustment",tip:{entrust:"Now you are going to do this form as user {0}",startEntrust:"Now you are going to start this form as user {0}",debug:"Now you are going to debug this form as user {0}",startDebug:"Now you are going to start this form as user {0}"},switchButton:"Switch",continueButton:"Continue",attention:"It will show that {0} do the job in history，your real identity {1} will be recorded，please do it carefully. ",debugAttention:"It will show that {0} do the job in history，your login identity {1} will be recorded，click the bar to switch debug user.",startAttention:"It will show that {0} start the form in history，your real identity {1} will be recorded，please do it carefully. ",abort:{entrust:"Exit Entrust",debug:"Exit Entrust"},close:"Close",support:"Entrustment is supported. ",startSupport:"Entrustment is supported. ",continueDo:"Click continue button to do the job",startContinueDo:"click continue button to start",choose:", or choose other identity then click switch button. ",startChoose:", or choose other identity to start",noUser:"No entrustment, click continue button to do the job with your own identity",specified:"Specified Account",chooseSpecifiedAccount:"Please input specified account",current:{debug:"Current debug user",entrust:"Current trustor",login:"Current login user"},request:{entrust:{requesting:{entrust:"requesting...",debug:"requesting..."},request:{entrust:"entrust",debug:"debug"},fail:{entrust:"request fail",debug:"request fail"}},abort:{requesting:{entrust:"exit...",debug:"exit..."},request:{entrust:"Exit Entrust",debug:"Exit Entrust"},fail:{entrust:"Exit fail",debug:"Exit fail"}}}};language.validation={fail:"Verification failed.",ensure:"Sorry, please make sure all required fields are filled out correctly!",selfLoop:"Parent of field {0} has self loop,please check",detailError:"Detail error,please modify"};language.workflow={workflowNo:"SN",department:"Department",contact:"Contact",admin:"Admin",printInvoice:"Print invoice",backToTop:"Back Top",entrust:"Ent rust",confirmEntrust:"Are you sure to entrust to others?",help:"Help",support:"Support",confirmFeedback:"Are you sure you want to feedback?"};language.control={createError:"Error occurs while creating control of field {0},please check！"};language.anchor={defaultText:"Link",closeAfterAction:"Close after operation",closeAfterActionDescription:"Please operate in new window.\nAfter that you can close this window"};language.suggester={moreItem:"press key ↓ or press PageDown to get more",moreUser:"{0} users found,input more conditions\nPlease input name,account,department(separated by space)",emptyItem:"〈empty〉",emptyHint:"Please input name",emptyUser:"Please input name,account,department(separated by space)",noData:"No data found",inaccurateTotal:{hundredThousand:"more than one hundred thousand",tenThousand:"more than ten thousand",thousand:"more than one thousand"},noCode:"Error occurs while creating control of field {0},please check code setting!"};language.suggester2={moreUser:"{0} users found,input more conditions\nPlease input name,account,department(separated by space)",errorLoading:"loading error",tooLong:"Please delete {0} character",tooShort:"Please input {0} more character at least",loadMore:"load more…",maxSelect:"You can select {0} results at most",noResult:"No result",emptyUser:"Please input name,account,department(separated by space)",emptyHint:"Please input name",searching:"searching...",inaccurateTotal:{hundredThousand:"more than one hundred thousand",tenThousand:"more than ten thousand",thousand:"more than one thousand"}};language.button={defaultText:"Button"};language.date={validateMessage:"Please input valid date",errorFormat:"The format of {0} is not correct!"};language.time={validateMessage:"Please input valid time",done:"Done"};language.edit={validateIntegerMessage:"Input an integer please",validateFloatMessage:"Input a number please.",formatWarning:"Edit control {0}, format is illegal"};language.file={uploading:"Uploading {0}...",uploadFail:"Upload fail,please try again",uploadSuccess:"success",suffix:"Please choose file with suffix {0}",sizeLimit:"File size limit exceeded({0})",createAt:"created at {0}",confirmDelete:"Are you sure you want to delete the file?",oldIe:"You are using an old version ie, please click upload icon",prepareSecureLink:"Preparing secure download link",secureLinkReady:"One-time secure link has been generated, click ",link:"here",download:" to open/download.",invalidText:"(Valid in {0}s)",docEditRequestError:"Exception occurs,please retry or contact with administrators",menu:{download:"Download",beforeEdit:"Before edit",afterEdit:"After edit",edit:"Edit",preview:"Preview",remove:"Delete",open:"Open"},batchMenu:{batchButton:"Batch...",dialog:{title:"Batch Processing",selectAll:"Select all",download:"Download",secureLinkDownload:"Secure link to download",deleteText:"Delete",},selectMoreMessage:"Please select one file at least"}};language.label={timezone:"Current timezone",xhtmlWarning:"Data type of label control {0} is xhtml and it's writable，this may cause security issues!",formatWarning:"Label control {0}, format is illegal"};language.picture={widthWarning:"Don't use picture control {0} with percent width,adjust it to fixed width",upload:"Click to upload picture",uploadFail:"Upload fail,please try again",uploadSuccess:"Upload successfully",suffix:"Please choose file with suffix {0}",sizeLimit:"File size limit exceeded({0})",confirmDelete:"Are you sure you want to delete the picture?"};language.remark={inputValue:"Please input text",maxLength:"You can enter up to {0} characters"};language.review={buttonTip:"Click here to add reviews.Reviews could be seen<br>by the following users in this business process.",tip:'You can write "Reviews" by clicking highlighted areas in the form. Reviews could be seen by the following users in this business process.',tipCount:"<div class='memo_count'><p>{0}</p></div> review(s) added",cancel:"Cancel",ok:"Done",menu:{minimize:"Minimize",maximize:"Restore",remove:"Remove"}};language.select={choose:"-Choose-"};language.checkList={deprecated:"Please uncheck deprecated value"};language.text={xhtmlWarning:"Data type of text control {0} is xhtml and it's writable，this may cause security issues!",maxLength:"You can enter up to {0} characters"};language.thing={name:"name",pleaseInput:"Please input name",code:"Code",notFound:"Thing not found,please input name manually",scan:"Scan",clickToInput:"Click to input name",print:"Print",deleteConfirm:"Are you sure you want to delete this thing?",check:{code:"Please input code",codeError:"Code error,please input again",name:"Please input name"},printInvoice:"Print Invoice",nothingToPrint:"Nothing to print.",choosePrint:"Please choose the thing to print"};language.signature={dialog:{title:"Select seal",missSealInfo:"Please check the seal information!"}};language.seal={dialog:{title:"Select seal",missSealInfo:"Please check the seal information!"},menu:{edit:"Edit",view:"View",remove:"Delete",},sealSignatures:{title:"Seal attribute",sealInfo:{title:"Seal information",sealText:"seal name",sealImage:"seal icon",},sealCertificate:{title:"Seal certificate",subject:"subject",issuer:"issuer",signature:"signature",serialNumber:"serial number",termOfValidity:"term of validity",intendedUse:"intended use"},sealUse:{title:"Seal use",signatory:"signatory",signatureTime:"signature time",comment:"comment"}}};language.richtext={image:{upload:"Upload Image",uploadFail:"Upload fail,please try again",suffix:"Please choose file with suffix {0}",sizeLimit:"File size limit exceeded({0})"}};language.map={selectCurrentPositionTitle:"Please input label or choose from list　",usePoint:"Use this label",currentPosition:"Current Place：{0}",navigation:"Navigation",inputLabel:"Please input label of this place",autoPosition:"Auto",noPosition:"none",deletePosition:"Delete",confirmDelete:'Are you sure you want to delete the selected place "{0}"?',naviTip:"Trying to start map app...",geolocation:{timeout:'Timeout，please choose "Allow" when asked by the browser.',unknown:"Error occurs while getting current position! Unknown position!",unavailable:"Location information is unavailable.",denied:'Permission denied，please choose "Allow" when asked by the browser.Or you can set the site access permission to "Allow"'}};language.priority={current:"Current priority is {0}",clickToChange:",click to change priority",level3:"normal",level5:"important",changeSuccessfully:"Change priority successfully，current priority is {0}",changeFailed:"Fail to change priority,{0}"};language.popupMenu={up:"Up",down:"Down",add:"Add",deleteText:"Delete",noAction:"No Action",detail:"Detail",maxLimit:"Exceeds the maximum number of rows,can't add anymore",minLimit:"Has reached the minimum number of rows,can't delete"};language.repeatAddLink={addText:"Add"};language.repeatControl={settingError:"{0} setting error,please check whether you should use repeat section.",fieldNotFound:"{0} not found,please check view.",detail:"Detail",shrink:"Shrink",expand:"Expand",deleteRow:"Are you sure you want to delete this row?",deleteSection:"Are you sure you want to delete this section?"};language.candidates={searching:"Searching...",error:"Exception while fetching data",searchKeyword:"Search by name or account",mailto:"Send email to {0}",noResult:"No results found!"};language.dynamics={error:{valueNotSet:"The dynamic {1} of {0} has not been set，please check!"}};language.timezone={time:" Time ","UTC-12:00":"International Date Change Line West","UTC-11:00":"Coordinated world time-11","UTC-10:00":"Hawaii","UTC-9:00":"Alaska","UTC-8:00":"Pacific","UTC-7:00":"Arizona","UTC-6:00":"Mexico City","UTC-5:00":"Bogota","UTC-4:30":"Caracas","UTC-4:00":"Georgetown","UTC-3:30":"Newfoundland","UTC-3:00":"Buenos Aires","UTC-2:00":"Coordinated world time-02","UTC-1:00":"Cape Verde Islands",UTC:"London","UTC+1:00":"Berlin","UTC+2:00":"Athens","UTC+3:00":"Moscow","UTC+3:30":"Tehran","UTC+4:00":"Abu Dhabi","UTC+4:30":"Kabul","UTC+5:00":"Islamabad","UTC+5:30":"New Delhi","UTC+5:45":"Kathmandu","UTC+6:00":"Dhaka","UTC+6:30":"Yangon","UTC+7:00":"Bangkok","UTC+8:00":"Beijing","UTC+8:30":"Pyongyang","UTC+9:00":"Tokyo","UTC+9:30":"Adelaide","UTC+10:00":"Brisbane","UTC+11:00":"Solomon Islands","UTC+12:00":"Auckland","UTC+13:00":"Samoa","UTC+14:00":"Christmas Island"};language.back={dialog:{content:"You are about to leave the current page...{0}s",}};define("InfoPlus.Language",language)})(window);
