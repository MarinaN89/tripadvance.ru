import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { MainComponent }   from './pages/main/main.component';
import { ProductsComponent }   from './pages/products/products.component';
import { CompanyComponent }   from './pages/company/company.component';
import { SearchComponent }   from './pages/search/search.component';
import { ServicesComponent }   from './pages/services/services.component';
import { DevicesComponent }   from './pages/devices/devices.component';
import { ProgrammsComponent }   from './pages/programms/programms.component';
import { DevelopmentsComponent }   from './pages/developments/developments.component';
import { IntegrationsComponent }   from './pages/integrations/integrations.component';
import { ContactsComponent }   from './pages/contacts/contacts.component';

import { BookingModuleComponent }   from './pages/booking-module/booking-module.component';
import { ServicesIntegrationHotelComponent } from './pages/services-integration-hotel/services-integration-hotel.component';
import { ServicesIntegrationBitrix24Component } from './pages/services-integration-bitrix24/services-integration-bitrix24.component';
import { ServicesIntegrationBpComponent } from './pages/services-integration-bp/services-integration-bp.component';
import { ServicesIntegrationUtComponent } from './pages/services-integration-ut/services-integration-ut.component';
import { ServicesIntegrationRoznicaComponent } from './pages/services-integration-roznica/services-integration-roznica.component';
import { ServicesIntegrationTraktirComponent } from './pages/services-integration-traktir/services-integration-traktir.component';
import { ServicesIntegrationBookingModuleComponent } from './pages/services-integration-booking-module/services-integration-booking-module.component';

import { ServicesEscortHotelComponent } from './pages/services-escort-hotel/services-escort-hotel.component';
import { ServicesEscortBpComponent } from './pages/services-escort-bp/services-escort-bp.component';
import { ServicesEscortUtComponent } from './pages/services-escort-ut/services-escort-ut.component';

import { ServicesProgrammingExtensionsComponent } from './pages/services-programming-extensions/services-programming-extensions.component';
import { ServicesProgrammingPrintedFormsComponent } from './pages/services-programming-printed-forms/services-programming-printed-forms.component';
import { ServicesProgrammingReportsComponent } from './pages/services-programming-reports/services-programming-reports.component';
import { ServicesProgrammingProcessingComponent } from './pages/services-programming-processing/services-programming-processing.component';

import { ServicesFreshComponent } from './pages/services-fresh/services-fresh.component';
import { ServicesGrmComponent } from './pages/services-grm/services-grm.component';


import { TrainingClassComponent } from './pages/training-class/training-class.component';
import { TrainingOnlineComponent } from './pages/training-online/training-online.component';
import { TrainingIndividualComponent } from './pages/training-individual/training-individual.component';

import { DevicesCashRegistersComponent } from './pages/devices-cash-registers/devices-cash-registers.component';
import { DevicesHotelComponent } from './pages/devices-hotel/devices-hotel.component';


import { DevelopmentsBookingModuleComponent } from './pages/developments-booking-module/developments-booking-module.component';
import { DevelopmentsUkdComponent } from './pages/developments-ukd/developments-ukd.component';

import { TestComponent } from './test/test.component';
import { TestBlocksComponent } from './pages/test-blocks/test-blocks.component';
import { FiscalStorageComponent } from './pages/devices/fiscal-storage/fiscal-storage.component';




const routes: Routes = [
  { path: '#', component: MainComponent},
 
  { path: '', component: MainComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'test', component: TestBlocksComponent},
  

  // Услуги - Внедрение
  { path: 'services/integration/hotel', component: ServicesIntegrationHotelComponent},
  { path: 'services/integration/bp', component: ServicesIntegrationBpComponent},
  { path: 'services/integration/ut', component: ServicesIntegrationUtComponent},
  { path: 'services/integration/roznica', component: ServicesIntegrationRoznicaComponent},
  { path: 'services/integration/traktir', component: ServicesIntegrationTraktirComponent},
  { path: 'services/integration/bitrix24', component: ServicesIntegrationBitrix24Component},
  { path: 'services/integration/booking-module', component: ServicesIntegrationBookingModuleComponent},
  
  // Услуги - Сопровождение
  { path: 'services/escort/hotel', component: ServicesEscortHotelComponent},
  { path: 'services/escort/bp', component: ServicesEscortBpComponent},
  { path: 'services/escort/ut', component: ServicesEscortUtComponent},

  // Услуги - Программирование
  { path: 'services/programming/printed-forms', component: ServicesProgrammingPrintedFormsComponent},
  { path: 'services/programming/reports', component: ServicesProgrammingReportsComponent},
  { path: 'services/programming/extensions', component: ServicesProgrammingExtensionsComponent},
  { path: 'services/programming/processing', component: ServicesProgrammingProcessingComponent},
  
  // Обучение
  { path: 'services/training/class', component: TrainingClassComponent},
  { path: 'services/training/online', component: TrainingOnlineComponent},
  { path: 'services/training/individual', component: TrainingIndividualComponent},

  { path: 'services/fresh', component: ServicesFreshComponent},
  { path: 'services/grm', component: ServicesGrmComponent},
  

  { path: 'developments/booking-module', component: DevelopmentsBookingModuleComponent},
  { path: 'developments/ukd', component: DevelopmentsUkdComponent},
//онлайн кассы
  { path: 'devices/cash-registers', component: DevicesCashRegistersComponent},
  { path: 'devices/cash-registers/:id', component: DevicesCashRegistersComponent},
//?
  { path: 'devices/hotel', component: DevicesHotelComponent},
  { path: 'devices/hotel/:id', component: DevicesHotelComponent},

//фискальные накопители
  { path: 'devices/fiscal-storage', component: FiscalStorageComponent},
  { path: 'devices/fiscal-storage/:id', component: FiscalStorageComponent},

  { path: 'search', component: SearchComponent},
  { path: 'devices', component: DevicesComponent},
  { path: 'programs', component: ProgrammsComponent},
  { path: 'developments', component: DevelopmentsComponent},
  { path: 'integrations', component: IntegrationsComponent},
  { path: 'contacts', component: ContactsComponent},
  
  { path: 'booking-module', component: BookingModuleComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
*/
