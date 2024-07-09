import { Routes } from '@angular/router';
import { MemoryLeakExampleComponent } from './pages/memory-leak-example/memory-leak-example.component';

export const routes: Routes = [
  {
    path: 'memory-leak',
    component: MemoryLeakExampleComponent,
  },
];
