# project-music

## features
1. tailwind、bootstrap、vuex、router
2. app - router-view with animation
3. home - [無限捲動](#無限捲動)
4. home - 背景圖動畫
5. home - custom directive（v-icon-secondary）
6. player - 獨立的播放器（播放狀態儲存在state）、progress bar
7. upload - drag and drop event、progress bar
8. song - router with query parameters
9. progress-bar - 頁面上方讀取進度條（nprogress）
10. router - lazy loading (chunk)
11. songitem - v-slot with router-link
12. registerForm - [veevalidate](#vee-validate)
13. [firebase](#firebase) - auth、storage
14. [PWA](#pwa)
15. [vercel](#deploy)
16. [e2e測試](#e2e)

## setup
- init
    ```
    yarn install
    ```
- Compiles and hot-reloads for development
    ```
    yarn serve
    ```

- Compiles and minifies for production
    ```
    yarn build
    ```
- Lints and fixes files
    ```
    yarn lint
    ```

- ~~unit tests~~
    ```
    yarn test:unit
    ```

- ~~end-to-end tests~~
    ```
    yarn test:e2e
    ```

## deploy
1. 註冊並安裝vercel `yarn global add vercel` （一台電腦只需執行一次）
2. `vercel login` 登入
3. `vercel` 設定專案
4. 之後要部署時執行 `vercel --prod`

## 無限捲動
![捲軸說明](./img/scroll_height.png)

## vee validate
`yarn add vee-validate@next`

## Firebase
[網址](https://console.firebase.google.com/)  
`yarn add firebase`
[上傳檔案相關說明文件](https://firebase.google.com/docs/storage/web/start)

### 步驟
1. 建立專案（此專案名稱取作 `Vue Music`）
2. 進入專案後，點左邊選單的 `Firestore Database`
3. 建立，選擇 `測試模式`，位置選一個離自己國家近的
4. 將規則改為
    ```
    rules_version = '2';
    service cloud.firestore {
    match /databases/{database}/documents {
            match /{document=**} {
                allow read: if true;
                allow write: if request.auth.uid == resource.data.uid;
                allow create: if request.auth.uid != null;
                allow delete: if request.auth.uid == resource.data.uid;
            }
        }   
    }
    ```
5. 新增應用程式(web)，輸入暱稱（此專案為 `music`）
6. 複製config指令碼到 `includes/firebase.js` 檔案
    ```
    var firebaseConfig = {
        apiKey: "AIzaSyCA0HP6duCa1t9tJMGQ5WlsJ-vlZzNCOOo",
        authDomain: "vue-music-c4ffc.firebaseapp.com",
        projectId: "vue-music-c4ffc",
        storageBucket: "vue-music-c4ffc.appspot.com",
        appId: "1:415472766880:web:dfc59b7716aa5cfaf61ec5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    ```
7. 於主控台選擇 `Authentication`，選`開始使用`，選`電子郵件/密碼`，不用勾選啟用密碼
8. `Storage` 的規則改為
    ```
    rules_version = '2';
    service firebase.storage {
        match /b/{bucket}/o {
            match /{allPaths=**} {
                allow read: if true;
                allow write: if request.auth!=null &&
                    request.resource.contentType=="audio/mpeg" &&
                    request.resource.size < 10 * 1024 * 1024;
                allow delete: if request.auth!=null;
            }
        }
    }
    ```

## PWA
1. 裝 `cli-plugin-pwa`
2. 透過`vue.config.js`設定`manifest`，屬性可參考[這裏](https://cli.vuejs.org/core-plugins/pwa.html)
3. 離線的cache機制會由[Workbox](https://developers.google.com/web/tools/workbox)完成，基本上不用特別去處理
4. fetch data的部分，在離線上會有很多限制，以firebase來說需要在`firebase.js`加上
   ```
    db.enablePersistence().catch((error) => {
        console.log(`Firebase persistence error ${error.code}`);
    }); 
   ```
   詳細資訊可[參考](https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#enablepersistence)

## e2e
1. 裝 `@vue/cli-plugin-e2e-cypress`
2. 在 `tests/e2e/specs` 底下建立js並寫測試腳本
3. cmd執行 `yarn test:e2e` 後，在跳出的視窗中選擇要執行的js腳本
