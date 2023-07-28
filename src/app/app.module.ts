import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitPreventionComparisionComponent } from './submit-prevention-comparision/submit-prevention-comparision.component';
import { CalculatorService } from './services/Calculator/calculator.service';
import { StrengthPipe } from './pipes/Strength/strength.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SubmitPreventionComparisionComponent,
    StrengthPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
