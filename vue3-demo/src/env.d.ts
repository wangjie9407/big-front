/// <reference types="vite/client" />

// declare module '@vue/runtime-core'{
//   interface GlobalProperties {
//     $filters: {
//       prefix(url: string): string
//     }
//   }
// }

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.ts'

