import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { InterceptorService } from './services/interceptor.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { LayoutComponent } from './shared/layout/layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: 'LOCALSTORAGE', useValue: window.localStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
