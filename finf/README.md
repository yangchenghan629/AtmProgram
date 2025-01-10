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
- c.
- d.
- e.
