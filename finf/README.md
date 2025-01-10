# 113-1 final exam for Fortran
In this exam,there are 5 questions,a,b,c,d and e  
所需資料檔包含Albedo.txt,Profile.txt,TCCIPrain2009.txt  
- a.
  - 主程式finf_a_main.f95:
      - 讀取Albedo.txt資料
      - 判斷反照率是否合理，合理則利用函數calTE計算有效輻射溫度並格式化輸出反照率與溫度;  
        反之，格式化輸出反照率與'Invalid Planetary Albedo'
      - 將結果輸出為finf_a.txt
  - 副程式finf_a_calTE.f95:
      - 接收主程式傳入之反照率
      - 計算有效輻射溫度並回傳  
        ![eaquation](https://latex.codecogs.com/svg.image?&space;T_{e}=\sqrt[4]{\frac{S(1-\alpha)}{4\cdot\sigma}})  
        其中，![eaquation](https://latex.codecogs.com/svg.image?S=1366\;[W/m^2],\sigma=5.67\times&space;10^{-8}\;[W/m^2K^4])
- b.
  在finf_b.f95中寫出主程式與副程式
  - 主程式:
    - 讀取Profile.txt資料為陣列並傳入副程式
    - 格式化輸出為finf_b.txt
  - 副程式:
    - 接收主程式傳入資料陣列
    - 計算相對濕度
    - 回傳潮濕層個數、最濕層高度、最乾層高度與無效值個數
  - 潮濕層定義:當![eaquation](https://latex.codecogs.com/svg.image?-80\leq&space;T\leq&space;50&space;)且![eaquation](https://latex.codecogs.com/svg.image?-80\leq&space;T_{d}\leq&space;50&space;)，
      
    ![eaquation](https://latex.codecogs.com/svg.image?RH=\frac{exp(\frac{A\cdot&space;T_{d}}{B&plus;T_{d}})}{exp(\frac{A\cdot&space;T}{B&plus;T})}\times100%)，其中A=17.625，B=243.04
      
    潮濕層定義為該層相對濕度![eaquation](https://latex.codecogs.com/svg.image?RH\geq80%)  
- c.
  - 讀取TCCIPrain2009.txt中台灣(21.9N-25.3N,120E-122E)2009年降雨資料
  - 其中經向有41格，緯向有69格
  - 輸出二進位檔finf_c.dat  
- d.
  - 寫出finf_c.dat描述檔finf_d.ctl，須包含有意義之標題與變數名稱、說明
  - 無效值需與TCCIPrain2009.txt相同  
- e.
  - 寫出finf_e.gs
  - 讀取finf_c.dat資料
  - 利用set parea 1 10 1 7.5設定邊框
  - 關閉grads圖標
  - 利用set mpdset hires關閉顯示海岸線
  - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度字體樣式
  - 等值線數值為500 1000 1500 200 2500 3000 3500
  - 以色塊等值線畫出2009年台灣降雨資料(要有colorbar)
  - 儲存圖片為finf_e.png，且常為1100、寬850、底色白色
