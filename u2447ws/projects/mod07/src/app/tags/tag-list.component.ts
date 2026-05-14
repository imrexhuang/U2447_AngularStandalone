// import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
// 因為要雙向綁定,改成model語法
import { booleanAttribute, Component,  input, model,  } from '@angular/core';
import { TagButtonComponent } from './tag-button.component';


@Component({
  selector: 'tagList',
  imports: [TagButtonComponent],
  template: `
    <!--  @if (!readOnly) { -->
      @if (!readOnly()) {
      <input type="text" #insterTag 
        (keyup.enter)="addTag(insterTag.value); insterTag.value='';" 
        placeholder="Add a tag" />
      }
    <div style="display: flex;">
       <!-- @for (item of tags; track $index) {    -->
        @for (item of tags(); track $index) {     
            <tagButton [tag]="item" [canDelete]="!readOnly" (delete)="deleteTag($event)"></tagButton>       
        }
    </div>

  `,
  styles: ``
})
export class TagListComponent {
  
  //@Input({transform: booleanAttribute}) readOnly:boolean=false;  
  //@Input('List') tags: string[] = [];
  //@Output('ListChange') tagsChange =new EventEmitter<string[]>(); //元件的雙向綁定,課本第6-4頁
  // 因為要雙向綁定,改成model語法


  readOnly= input<boolean, boolean>(false, {transform: booleanAttribute});
  /**
   * 給Gemini分析: 
   * 在 `mod07` 的 `tag-list.component.ts` 中，這行程式碼使用了 Angular 17.1 引入的新特性：**Signal Inputs**。

這行程式碼 `readOnly = input<boolean, boolean>(false, {transform: booleanAttribute});` 的作用可以拆解為三個核心部分：

### 1. 定義 Signal Input (`input`)

這表示 `readOnly` 不再是一個普通的變數，而是一個 **Signal**。

* **傳統方式**：使用 `@Input() readOnly: boolean = false;`，當值改變時，Angular 需要透過變更偵測（Change Detection）來檢查。
* **新方式 (Signal)**：當父元件傳入的值改變時，Signal 會主動通知所有使用到這個值的地方。這在效能優化和非同步資料流處理上更具優勢。

### 2. 設定預設值與泛型

* `input<boolean, boolean>(false, ...)`
* 第一個 `boolean`：代表 Signal **讀取**時的型別。
* 第二個 `boolean`：代表父元件**傳入**時的型別。
* `false`：這是該屬性的**預設值**。如果父元件沒有提供 `[readOnly]`，它就會是 `false`。

### 3. 關鍵的轉換器：`transform: booleanAttribute`

這是這行程式碼最實用的地方。它處理了 HTML 屬性與布林值之間的常見問題。

在 HTML 中，如果你這樣寫：

```html
<app-tag-list readOnly /> 

```

瀏覽器實際上會將 `readOnly` 視為一個**空字串 `""**`（只要屬性存在）。

* **如果沒有 `transform**`：Angular 會嘗試將 `""` 傳給 `boolean` 型別，這會導致型別錯誤或非預期的行為。
* **使用 `booleanAttribute` 轉換器後**：
* `<app-tag-list readOnly />` → 自動轉換為 `true`。
* `<app-tag-list readOnly="true" />` → 轉換為 `true`。
* 不寫 `readOnly` 屬性 → 保持預設值 `false`。



### 總結這行程式碼的優點：

1. **簡潔**：父元件在調用時，只需要寫 `<app-tag-list readOnly>` 就能啟用唯讀模式，不需要寫成繁瑣的 `[readOnly]="true"`。
2. **型別安全**：確保內部的 `readOnly()` Signal 永遠回傳正確的 `boolean` 值。
3. **效能**：利用 Signal 機制，讓元件的變更偵測更加精準。

在程式碼中，如果你要讀取這個值，記得它是 Signal，所以要加上小括號：`if (this.readOnly()) { ... }`。
   */

  tags = model<string[]>([],{alias:"List"}); //可用ModelSignal取代元件的@INPUT @OUTPUT EventEmitter雙向綁定,課本第6-4頁
  // https://ithelp.ithome.com.tw/m/articles/10346166

  deleteTag(tagName: string){
    //this.tags = this.tags.filter(tag => tag !== tagName);
    //this.tagsChange.emit(this.tags);
     // 因為要雙向綁定,改成model語法
    this.tags.set(this.tags().filter(tag => tag !== tagName));
  }
  
  addTag(tagName: string){
    //this.tags.push(tagName);
    //console.log (this.tags.length);
    //this.tagsChange.emit(this.tags);
     // 因為要雙向綁定,改成model語法
    this.tags.update((old)=>[...old, tagName]);
  }



}
