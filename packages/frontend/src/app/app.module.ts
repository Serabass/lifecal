import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, ru_RU } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import {YearComponent} from './pages/year/year.component';
import {YearsComponent} from './pages/years/years.component';
import {PluralPipe} from './pipes/plural.pipe';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    YearComponent,
    YearsComponent,

    PluralPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }, PluralPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
