import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsProviderModule} from './icons-provider.module';
import {NgZorroAntdModule, NZ_I18N, ru_RU} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import ru from '@angular/common/locales/ru';
import {YearComponent} from './pages/year/year.component';
import {YearsComponent} from './pages/years/years.component';
import {PluralPipe} from './pipes/plural.pipe';
import {AboutComponent} from './pages/about/about.component';
import {WeeksLifeComponent} from './pages/weeks-life/weeks-life.component';
import {WeekdayPipe} from './pipes/weekday.pipe';
import {PadPipe} from './pipes/pad.pipe';
import {DiffsComponent} from './components/diffs/diffs.component';
import {BirthdaySelectorComponent} from './components/birthday-selector/birthday-selector.component';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    YearComponent,
    YearsComponent,
    AboutComponent,
    WeeksLifeComponent,
    BirthdaySelectorComponent,
    DiffsComponent,
    PluralPipe,
    WeekdayPipe,
    PadPipe,
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
  providers: [{provide: NZ_I18N, useValue: ru_RU}, PluralPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
