import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { HeaderComponent } from './components/module-layout/header/header.component';
import { MenuComponent } from './components/module-layout/menu/menu.component';
import { FooterComponent } from './components/module-layout/footer/footer.component';
import { ConfiguracionComponent } from './components/module-geo/configuracion/configuracion.component';
import { DispositivoComponent } from './components/module-geo/dispositivo/dispositivo.component';
import { HomeComponent } from './components/module-geo/home/home.component';
import { LoginComponent } from './components/module-geo/login/login.component';
import { RutaComponent } from './components/module-geo/ruta/ruta.component';
import { UsuarioComponent } from './components/module-geo/usuario/usuario.component';
import { VehiculoComponent } from './components/module-geo/vehiculo/vehiculo.component';
import { DepartamentoComponent } from './components/module-geo/configuracion/departamento/departamento.component';
import { RolesComponent } from './components/module-geo/configuracion/roles/roles.component';
import { routing, appRouteingProvider } from './routes/app.routing';
import { UserComponent } from './components/module-geo/usuario/user/user.component';
import { PersonaService } from './services/persona.service';
import { environment } from '../environments/environment';
// Componentes formularios
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { UsuarioService } from './services/usuario.service';
import { MessageService } from 'primeng/api';
import { DepartamentoService } from './services/departamento.service';
import { RolService } from './services/rol.service';
import { PersonaComponent } from './components/module-geo/usuario/persona/persona.component';
import { AuthService } from './services/auth.service';
import { HelperService } from './services/helper.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';

const config: SocketIoConfig = {
  url: environment.apiUrl, options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ConfiguracionComponent,
    DispositivoComponent,
    HomeComponent,
    LoginComponent,
    RutaComponent,
    UsuarioComponent,
    VehiculoComponent,
    DepartamentoComponent,
    RolesComponent,
    UserComponent,
    PersonaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    ButtonModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    TabViewModule,
    CodeHighlighterModule,
    CardModule,
    TableModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    InputTextareaModule,
    PasswordModule,
  ],
  // tslint:disable-next-line: max-line-length
  providers: [appRouteingProvider, PersonaService, UsuarioService, DepartamentoService, RolService, MessageService, AuthService, HelperService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
