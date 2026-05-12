import { Component } from '@angular/core';



@Component({
  selector: 'uuu-about',
  standalone: true,
  imports: [],
  template: `
    <div #U2447>
      <h1 #U2447H>U2447 Angular Standalone模式深度探索Part 1</h1>
      <div #U24471 >
      有鑑於Angular v2到v16版使用Module模式學習途徑過於陡峭，也使許多新朋友在學習上為之卻步，好消息是經過v14之後開發者預覽的Standalone模式，已經在Angular v17之後成為預設專案類型，讓Angular學習上更加輕鬆，專案也較為輕盈有效率 ...。Angular 17是一個大躍進，它新增了&#64;for … 結構性語法、SSR、Signal ... ，在效能上、開發的便利性都有許多的增長。
      </div>
      <div #U24472>
      這個課程將讓您深入了解Angular框架的基礎知識和應用技巧。一開始，會帶您認識Angular框架，包括如何安裝開發環境和工具，以及探索專案的結構和常用指令集。接著，將進入您的第一個Angular專案，課程中會介紹Standalone專案模式，並引導您了解程式的引導流程和元件的組成。在課程的後續部分，則會深入探討頁面和結構化控制的技術，學習如何使用&#64;if、&#64;switch、&#64;for等指令來控制頁面流程，同時您將了解DI的觀念並以此設計Service，還有如何使用HttpClient。透過這個課程，也會介紹如何使用Angular存取Web API遠端資料，以及以Microsoft ASP.NET Core Web API作為伺服器端的範例，讓學員能夠實作一個CRUD完整的網頁應用程式。您將打下堅實的Angular基礎，並能夠自信地開始建立您自己的網頁應用程式。
      </div>
    </div>
    <div>
    <div #U2448 >
      <h1 #U2448H>U2448 Angular Standalone模式深度探索Part 2</h1>
      <div #U24481>
      首先，課程中將探討Angular中的非同步機制，討論Observable和RxJS之間的關係，並比較Promise和async/await，以了解它們在Angular中的運作原理及應用場景。
      </div>
      <div #U24482>
      接著，深入研究Angular的路由系統，探討延遲載入模組以及&#64;defer的概念，以及路由的生命週期和如何在頁面間傳遞參數與解析，以及探索Angular程式的優化方法。這將包括特性模組和共享模組的設計和使用，以及建立和使用函式庫的技巧。接下來，將學習如何使用Angular Material來優化我們的用戶介面，深入研究Reactive-Form，這是Angular中處理表單的一個重要功能，以及學習如何建立響應式表單、處理表單數組、進行驗證和非同步驗證。最後，我們將探討如何無痛升級您的行動應用程式，以及如何設計驗證和授權機制，包括路由守衛、登入/登出和使用Auth 2.0使用社群帳號登入。透過這門課程，將獲得豐富的Angular知識和實踐經驗，能夠開發出更加強大、優雅的應用程式，並為用戶提供更好的用戶體驗。
      </div>  
    </div>
    </div>
  `,
  styles: ``
})
export class AboutComponent {

}
