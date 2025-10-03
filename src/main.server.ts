import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfigServer } from './app/app.config.server';

// This is the only way Angular 19 SSR expects:
export default function bootstrap() {
  return renderApplication(
    (context) => bootstrapApplication(AppComponent, { ...appConfigServer }),
    {
      document: '<app-root></app-root>'
    }
  );
}
