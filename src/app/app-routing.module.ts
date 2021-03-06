import { RentRollComponent } from './modules/rent-roll/rent-roll.component';
import { DuplicatePropModule } from './modules/duplicate-prop/duplicate-prop.module';
import { CreditAppModule } from './modules/credit-app/credit-app.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "overview",
        loadChildren: () =>
          import("./modules/overview/overview.module").then(
            (m) => m.OverviewModule
          ),
      },
      {
        path: "dcf",
        loadChildren: () =>
          import("./modules/dcf/dcf.module").then((m) => m.DcfModule),
      },
      {
        path: "constructionPlanning",
        loadChildren: () =>
          import(
            "./modules/construction-planning/construction-planning.module"
          ).then((m) => m.ConstructionPlanningModule),
      },
      {
        path: "profitAndLoss",
        loadChildren: () =>
          import("./modules/profit-and-loss/profit-and-loss.module").then(
            (m) => m.ProfitAndLossModule
          ),
      },
      {
        path: "qualicasa",
        loadChildren: () =>
          import("./modules/qualicasa/qualicasa.module").then(
            (m) => m.QualicasaModule
          ),
      },
      {
        path: "hedonic",
        loadChildren: () =>
          import("./modules/hedonic/hedonic.module").then(
            (m) => m.HedonicModule
          ),
      },
      {
        path: "docuMgr",
        loadChildren: () =>
          import("./modules/docu-mgr/docu-mgr.module").then(
            (m) => m.DocuMgrModule
          ),
      },
      {
        path: "rating",
        loadChildren: () =>
          import("./modules/rating/rating.module").then((m) => m.RatingModule),
      },
      {
        path: "creditApp",
        loadChildren: () =>
          import("./modules/credit-app/credit-app.module").then((m) => m.CreditAppModule),
      },
      {
        path: "heatingExpenses",
        loadChildren: () =>
          import("./modules/heating-expenses/heating-expenses.module").then((m) => m.HeatingExpensesModule),
      },
      {
        path: "cockpit",
        loadChildren: () =>
          import("./modules/cockpit/cockpit.module").then((m) => m.CockpitModule),
      },
      {
        path: "import",
        loadChildren: () =>
          import("./modules/import/import.module").then((m) => m.ImportModule),
      },
      {
        path: "language",
        loadChildren: () =>
          import("./modules/language/language.module").then((m) => m.LanguageModule),
      },
      {
        path: "dupProp",
        loadChildren: () =>
          import("./modules/duplicate-prop/duplicate-prop.module").then((m) => m.DuplicatePropModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./modules/settings/settings-routing.module").then((m) => m.SettingsRoutingModule),
      },
      {
        path: "characteristics",
        loadChildren: () =>
          import("./modules/characterstics/characterstics.module").then((m) => m.CharactersticsModule),
      },
      {
        path: "budget",
        loadChildren: () =>
          import("./modules/budget/budget.module").then((m) => m.BudgetModule),
      },
      {
        path: "rent",
        loadChildren: () =>
          import("./modules/rent-roll/rent-roll.module").then((m) => m.RentRollModule),
      },
      {
        path: "process",
        loadChildren: () =>
          import("./modules/process-stepper/process-stepper.module").then((m) => m.ProcessStepperModule),
      },
      {
        path: "immoCockpit",
        loadChildren: () =>
          import("./modules/immo-cockpit/immo-cockpit.module").then((m) => m.ImmoCockpitModule),
      },
      {
        path: "mapsPro",
        loadChildren: () =>
          import("./modules/mapspro/mapspro.module").then((m) => m.MapsproModule),
      },
      { 
        path: 'tasks',
        loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule) 
      },
      { 
        path: 'overview', 
        loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) 
      }

      // {
      //   path: 'dcf',
      //   loadChildren: './modules/dcf/dcf.module#DcfModule'
      // },
      // {
      //   path: 'houses',
      //   loadChildren: './modules/houses/houses.module#HousesModule'
      // },
      // {
      //   path: 'qualicasa',
      //   loadChildren: './modules/qualicasa/qualicasa.module#QualicasaModule'
      // },
      // {
      //   path: 'renter-mirror',
      //   loadChildren: './modules/renter-mirror/renter-mirror.module#RentMirrorModule'
      // },
      // {
      //   path: 'masterdata',
      //   // already loadChildren: './modules/masterDataProperty/masterDataProperty.module#MasterDataPropertyModule'
      //   loadChildren: './modules/masterDataProperty/masterDataProperty.module#MasterDataPropertyModule'
      // },
      // {
      //   path: 'documanager',
      //   loadChildren: './modules/docu-manager/docu-manager.module#DocuManagerModule'
      // },
      // {
      //   path: 'profit-and-loss',
      //   loadChildren: './modules/profit-and-loss/profit-and-loss.module#ProfitAndLossModule'
      // },
      // {
      //   path: 'constructionplanning',
      //   loadChildren: './modules/construction-planning/construction-planning.module#ConstructionPlanningModule'
      // },
      // {
      //   path: 'importdata',
      //   loadChildren: './modules/import-data/import-data.module#ImportDataModule'
      // },
      // {
      //   path: 'language',
      //   loadChildren: './modules/language/language.module#LanguageModule'
      // },
      // {
      //   path: 'addressvalidator',
      //   loadChildren: './modules/address-validator/address-validator.module#AddressValidatorModule'
      // },
      // {
      //   path: 'cloneproperty',
      //   loadChildren: './modules/clone-property/clone-property.module#ClonePropertyModule'
      // },
      // {
      //   path: 'miniReport',
      //   loadChildren: './modules/mini-report/mini-report.module#MiniReportModule'
      // },
      // {
      //   path: 'process-stepper',
      //   loadChildren: './modules/process-stepper/process-stepper.module#ProcessStepperModule'
      // },
      // {
      //   path: 'budget',
      //   loadChildren: './modules/budget/budget.module#BudgetModule'
      // },
      // {
      //   path: 'loan-application',
      //   loadChildren: './modules/loan-application/loan-application.module#LoanApplicationModule'
      // },
      // {
      //   path: 'rating',
      //   loadChildren: './modules/rating/rating.module#RatingModule'
      // },
      // {
      //   path: 'hk-bk',
      //   loadChildren: './modules/hk-bk/hk-bk.module#HkBkModule'
      // },
      // {
      //   path: 'hedonic',
      //   loadChildren: './modules/hedonic/hedonic.module#HedonicModule'
      // },
      // {
      //   path: 'settings',
      //   loadChildren: './modules/settings/settings.module#SettingsModule'
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
