import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { knowageFacade } from '../../knowageAPI/knowageFacade.js';

@Component({
  selector: 'app-knowage-viewer',
  templateUrl: './knowage-viewer.component.html',
  styleUrls: ['./knowage-viewer.component.css']
})
export class KnowageViewerComponent implements OnInit {
@Input()
  user: string;
@Input()
  password: string;
@Input()
  baseURLCong: any;

@ViewChild('knowageDocumentArea') knowageDocumentArea: ElementRef;

@Input()
  analyticDocumentConfig: any;

  authConfig: any;

  constructor() {
    if(!this.analyticDocumentConfig) {
      this.initDefaults();
    }
    this.initAuthentication();
  }

  initAuthentication() {
    this.authConfig = {
      params: {
        user: this.user,
        password: this.password
      },
      callback: {
        fn: this.authenticationCB,
        scope: this
      }
    };
  }

  initDefaults() {
    this.user = 'demo_admin';
    this.password = 'demo_admin';

    this.baseURLCong = {
      protocol: 'http'
      , host: 'localhost'
      , port: '8080',
      contextPath: 'knowage'
      , controllerPath: 'servlet/AdapterHTTP'
    };

    this.analyticDocumentConfig = {
      documentLabel: 'stateReport'
      , executionRole: '/demo/admin'
      , parameters: {
        flag: '0'
      }
      , displayToolbar: true
      , canResetParameters: false
      , iframe: {
        height: '500px'
        , width: '100%'
        , style: 'border: 0px;'
      }
    };
  }

  ngOnInit() {
    this.executeAnalyticalDocument();
  }

  authenticationCB(result, args, success) {
    if (success === true) {
      this.loadAnalyticalDocument();
    } else {
      console.log('ERROR: authentication failed! Invalid username and/or password ');
    }
  }

  loadAnalyticalDocument() {
    const html = knowageFacade.getDocumentHtml(this.analyticDocumentConfig);
    this.knowageDocumentArea.nativeElement.innerHTML = html;
  }

  public executeAnalyticalDocument() {
    knowageFacade.setBaseUrl(this.baseURLCong);
    knowageFacade.authenticate(this.authConfig);
  }
}
