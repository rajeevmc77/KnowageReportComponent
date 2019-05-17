
function setBaseUrl(config){
	Sbi.sdk.services.setBaseUrl(config);
}

function getDocumentHtml(config){
      var html = Sbi.sdk.api.getDocumentHtml(config);
      return html;
}

function authenticate(config){
      Sbi.sdk.api.authenticate(config);
}

var knowageFacade = {};

knowageFacade.setBaseUrl = setBaseUrl;
knowageFacade.getDocumentHtml = getDocumentHtml;
knowageFacade.authenticate = authenticate;

export {knowageFacade};

