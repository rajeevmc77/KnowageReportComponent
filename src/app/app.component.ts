import { Component, ViewChild, OnInit } from '@angular/core';
import { KnowageViewerComponent } from './knowage-viewer/knowage-viewer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Knowage Test Bud';

  @ViewChild ('knowageViewer') knowageViewer: KnowageViewerComponent;

  ngOnInit() {
    this.initReportParams();
  }

  initReportParams(){

    this.knowageViewer.user = 'biuser';
    this.knowageViewer.password = 'biuser';

    this.knowageViewer.baseURLCong = {
      protocol: 'http'
      , host: 'localhost'
      , port: '8080',
      contextPath: 'knowage'
      , controllerPath: 'servlet/AdapterHTTP'
    };

    this.knowageViewer.analyticDocumentConfig =  {
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

}
