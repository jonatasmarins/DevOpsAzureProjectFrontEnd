import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { ConfigurationProjectComponent } from './configuration-project/configuration-project.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { OrderModule } from 'ngx-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    WorkItemComponent,
    ConfigurationProjectComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    OrderModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
