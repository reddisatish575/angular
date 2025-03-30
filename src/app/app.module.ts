import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { RequestInterceptor } from './interceptors/request.interceptor';
import { InitService } from './services/init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './rooms/login/login.component';
import { HoverDirective } from './directives/hover.directive';
import { EmailvalidatorDirective } from './validators/emailvalidator.directive';
// import { RoomsModule } from './rooms/rooms.module';

function initFactory(initService : InitService){
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,

    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfoundComponent,

    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    // RoomsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    // ReactiveFormsModule
  ],
  providers: [
    {
      provide : APP_SERVICE_CONFIG,
      useValue : APP_CONFIG
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi : true
    },
    {
      provide : APP_INITIALIZER,
      useFactory : initFactory,
      deps : [InitService],
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
