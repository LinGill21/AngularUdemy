# Angular Start up
## How the home page is loaded up
1. main.ts is excuted first
1. If we look at the last line in main.ts
```typescript
        platformBrowserDynamic().bootstrapModule(AppModule)
```
This will run AppModules on startup if we look at the imports we see App modules import statment
 ```typescript
 import { AppModules } from './app.modules';
 ```
This takes us to app.modules<br/>
3. In @NgModules we have 
```typescript
        bootstrap:[AppComponent]
```
Which list componets that angular should know when it reads index.html.
If we look at the imports we see App Component's import statment
 ```typescript
 import { AppComponent } from './app.component';
 ```
This will take us to app.component<br/>
4. Angular reads through the app.component file.
```typescript
import { Component } from '@angular/core';
@Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
        })
export class AppComponent {}
```
Angular now knows app-root<br/>
5. Now that set up is done. Angular goes to index.html<br/>
6. In index.html when Angular sees app-root tags<br/>
```html
<body>
  <app-root></app-root>
</body>
```
Angular now knows to replace app-root with ./app.component.html
