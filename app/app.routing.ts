import { IntroComponent } from "./pages/intro/intro.component";
import { LoginComponent } from "./pages/account/login/login.component";
import { RegisterComponent } from "./pages/account/register/register.component";
import { PasswordComponent } from "./pages/account/password/password.component";

import { OnboardingWelcomeComponent } from "./pages/onboarding/welcome/welcome.component";
import { OnboardingActiveComponent } from "./pages/onboarding/active/active.component";
import { OnboardingScheduleComponent } from "./pages/onboarding/schedule/schedule.component";
import { OnboardingLengthComponent } from "./pages/onboarding/length/length.component";
import { OnboardingCompleteComponent } from "./pages/onboarding/complete/complete.component";

import { AssessmentFoundationComponent } from "./pages/assessment/foundation/foundation.component";
import { AssessmentProgressionComponent } from "./pages/assessment/progression/progression.component";
import { AssessmentCompleteComponent } from "./pages/assessment/complete/complete.component";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";

import { MoveComponent } from "./pages/moves/move/move.component";
import { MovesComponent } from "./pages/moves/moves/moves.component";
import { MovesMasterComponent } from "./pages/moves/mastermove/mastermove.component";
import { MovesMasterCongratsComponent } from "./pages/moves/mastercongrats/mastercongrats.component";
import { MovesCategoryComponent } from "./pages/moves/category/category.component";
import { MovesManageComponent } from "./pages/moves/manage/manage.component";
import { ProgressionComponent } from "./pages/moves/progression/progression.component";
import { RestComponent } from "./pages/moves/rest/rest.component";

import { CalendarComponent } from "./pages/calendar/calendar.component";
import { WorkoutComponent } from "./pages/workout/workout/workout.component";
import { WorkoutStartComponent } from "./pages/workout/start/start.component";
import { WorkoutEndComponent } from "./pages/workout/end/end.component";
import { WorkoutSettingsComponent } from "./pages/workout/settings/settings.component";
import { WorkoutLeaveComponent } from "./pages/workout/leave/leave.component";

import { MoreComponent } from "./pages/more/more/more.component";
import { InviteComponent } from "./pages/more/invite/invite.component";
import { InviteCompleteComponent } from "./pages/more/invitecomplete/invitecomplete.component";
import { LearnComponent } from "./pages/more/learn/learn.component";
import { LearnSingleComponent } from "./pages/more/learnsingle/learnsingle.component";
import { AboutComponent } from "./pages/more/about/about.component";
import { ProfileComponent } from "./pages/more/profile/profile.component";
import { PrivacyComponent } from "./pages/more/privacy/privacy.component";
import { SubscriptionComponent } from "./pages/more/subscription/subscription.component";
import { SubscribedComponent } from "./pages/more/subscribed/subscribed.component";
import { SupportComponent } from "./pages/more/support/support.component";

import { TabsComponent } from "./pages/tabs/tabs.component";
import { PDFComponent } from "./pages/pdf/pdf.component";
import { ListComponent } from "./pages/list/list.component";

export const routes = [
  // { path: "", component: IntroComponent},
  { path: "", redirectTo:"onboarding/length", pathMatch:"full"},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent},
  { path: "password", component: PasswordComponent},

  { path: "dashboard", component: TabsComponent },

  { path: "onboarding/welcome", component: OnboardingWelcomeComponent},
  { path: "onboarding/active", component: OnboardingActiveComponent},
  { path: "onboarding/length", component: OnboardingLengthComponent},
  { path: "onboarding/schedule", component: OnboardingScheduleComponent},
  { path: "onboarding/complete", component: OnboardingCompleteComponent},

  { path: "assessment/foundation", component: AssessmentFoundationComponent},
  { path: "assessment/progression", component: AssessmentProgressionComponent},
  { path: "assessment/complete", component: AssessmentCompleteComponent},

  { path: "calendar", component: CalendarComponent },
  { path: "workout", component: WorkoutComponent },
  { path: "workout/start", component: WorkoutStartComponent },
  { path: "workout/end", component: WorkoutEndComponent },
  { path: "workout/leave", component: WorkoutLeaveComponent },
  { path: "workout/settings", component: WorkoutSettingsComponent },

  { path: "moves", component: MovesComponent },
  { path: "moves/move", component: MoveComponent },
  { path: "moves/master", component: MovesMasterComponent },
  { path: "moves/master/congrats", component: MovesMasterCongratsComponent },
  { path: "moves/progression", component: ProgressionComponent },
  { path: "moves/manage", component: MovesManageComponent },
  { path: "moves/category", component: MovesCategoryComponent },
  { path: "moves/rest", component: RestComponent },

  { path: "more", component: MoreComponent },
  { path: "more/invite/complete", component: InviteCompleteComponent },
  { path: "more/invite", component: InviteComponent },
  { path: "more/learn/single", component: LearnSingleComponent },
  { path: "more/learn", component: LearnComponent },
  { path: "more/about", component: AboutComponent },
  { path: "more/profile", component: ProfileComponent },
  { path: "more/support", component: SupportComponent },
  { path: "more/privacy", component: PrivacyComponent },
  { path: "more/subscription", component: SubscriptionComponent },
  { path: "more/subscribed", component: SubscribedComponent },

  //{ path: "dashboard", component: DashboardComponent },
  { path: "pdf", component: PDFComponent},
  { path: "outreach", component: ListComponent},
];

export const navigatableComponents = [
  IntroComponent,
  LoginComponent,
  RegisterComponent,
  PasswordComponent,

  OnboardingWelcomeComponent,
  OnboardingActiveComponent,
  OnboardingScheduleComponent,
  OnboardingLengthComponent,
  OnboardingCompleteComponent,

  AssessmentFoundationComponent,
  AssessmentProgressionComponent,
  AssessmentCompleteComponent,

  DashboardComponent,

  CalendarComponent,
  WorkoutComponent,
  WorkoutStartComponent,
  WorkoutEndComponent,
  WorkoutLeaveComponent,
  WorkoutSettingsComponent,

  MovesComponent,
  MoveComponent,
  MovesManageComponent,
  MovesCategoryComponent,
  MovesMasterComponent,
  MovesMasterCongratsComponent,
  ProgressionComponent,
  RestComponent,

  MoreComponent,
  InviteComponent,
  InviteCompleteComponent,
  LearnComponent,
  LearnSingleComponent,
  AboutComponent,
  PrivacyComponent,
  SupportComponent,
  SubscriptionComponent,
  SubscribedComponent,
  ProfileComponent,

  TabsComponent,
  PDFComponent,
  ListComponent,
];
