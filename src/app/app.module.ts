import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from "@angular/router"; // routes
import { DragulaModule } from 'ng2-dragula';   // drag
import { NgSpinKitModule } from 'ng-spin-kit'  //loading
import { Ng2SearchPipeModule } from 'ng2-search-filter';  // search filter
import { NgPipesModule } from 'ngx-pipes';  // pipes
import { AngularFontAwesomeModule } from 'angular-font-awesome'; //font-awesome

import { AppComponent } from './app.component';
import { TalkComponent } from './components/talk/talk.component';
import { SlotComponent } from './components/slot/slot.component';
import { TalkService } from './services/talk.service';
import { SlotService } from './services/slot.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { SearchPipe } from './filter/search.pipe';
import { CustumDirectiveDirective } from './directives/custum-directive.directive';
import { TalkdetailsComponent } from './components/talk/talkdetails/talkdetails.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { AllocateService } from './services/allocate.service';

const appRoutes : Routes =[
  { path:'talk', component : TalkComponent },
  { path:'talkDetail/:id', component : TalkdetailsComponent },
  { path:'slot', component : SlotComponent },
  { path:'dragula', component : DragdropComponent },
  { path:'**', component : NotFoundComponent , data : {message : 'Error Found !!!!'}}
  //{ path:'', redirectTo : '/', pathMatch : 'full'}
  //{ path:'talkDetail/:id',component:TalkdetailsComponent ,resolve :{talkRes: ResolvingTalkService}},
]
@NgModule({
  declarations: [
    AppComponent,
    TalkComponent,
    SlotComponent,
    NavbarComponent,
    DragdropComponent,
    SearchPipe,
    CustumDirectiveDirective,
    TalkdetailsComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    DragulaModule,
    NgPipesModule,
    Ng2SearchPipeModule,
    NgSpinKitModule,
    RouterModule.forRoot(appRoutes,{useHash : true}) // ,{preloadingStrategy : PreLoadAllModules} to load all modules
  ],
  providers: [TalkService, SlotService, AllocateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
