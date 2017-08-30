import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home.component";
import { AboutComponent } from "./components/about.component";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";

// import other components, etc.
import {routes} from './app.routes';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    SIDEDRAWER_DIRECTIVES,
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }