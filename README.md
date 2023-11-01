# emby2goindex

使用 njs 攔截 emby 的播放地址到 goindex 實現直連 Google Drive 不走伺服器流量
1. goindex script for cloudflare workers
   原腳本來自 [Achrou/goindex-theme-acrou](https://github.com/Achrou/goindex-theme-acrou)，增加了對捷徑的支持
2. nginx docker compose by bpking
   原作者用 item id 獲取影片的 path，修改為使用 MediaSourceId 來獲取 path 以支持多版本選擇
   修改攔截地址 \/emby\/videos\/\d*\/original (測試版將stream改為original，如使用4.7版本自行改回stream)
