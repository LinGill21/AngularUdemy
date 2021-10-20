# Angular Start up
## How home page is loaded up
1. main.ts is excuted first
1. ```typescript
        platformBrowserDynamic().bootstrapModule(AppModule)
    ```
    This will run AppModules on startup if we look at the imports we see App modules import statment
    ```typescript
    import { AppModule } from './app/app.module';
    ```
    This takes us to app.modules
1. In @NgModules we have 
```typescript
    bootstrap:[AppComponent]
```
    Which list componets that angular should know when it analysis index.html'
    This will run AppComponent if we look at the imports we see App Component's import statment
    ```typescript
        import { AppComponent } from './app.component';
    ```
    This will take us to app.component
1. Angular now reads app.component
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
```
Angular now knows app root
1. Now that set up is Angular goes to index.html
1. In index.html when Angular sees app-root tags
```html
<body>
  <app-root></app-root>
</body>
```
It will knows to replace app-root with ./app.component.html