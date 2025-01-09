# 113-1 midterm exam 1 for python
In this exam,there are 3 questions a,b and c.  
- a.  
    從data.txt中讀取溫度與氣壓，計算飽和水氣壓e_s,相對濕度RH與水氣壓差VPD  
    ![eaquation](https://latex.codecogs.com/svg.image?&space;e_s=2.5\times10^9&space;exp(\frac{-5420}{T}))  
    ![eaquation](https://latex.codecogs.com/svg.image?&space;RH=\frac{e}{e_{s})  
    ![eaquation](https://latex.codecogs.com/svg.image?&space;VPD=e_{s}-e)  
    當水氣未飽和時，格式化輸出溫度,氣壓,相對濕度,水氣壓差;當水氣過飽和時，格式化輸出溫度,氣壓並標註Supersaturation  
    將結果輸出成midp_a.txt
- b.  
    從46749_Precipitation.txt與46749_Evaporation.txt讀取1990-2023年月降水與蒸發資料。  
    計算淨降水量以pcolormesh繪出(要有colorbar)，橫軸為1-12月，縱軸為年份，並在標題標註淨降水量最大發生時間，儲存為midp_b.png。  
    將淨降水量數值輸出至midp_b.txt，如midp_b_example.txt。
- c.  
  ![eaquation](https://latex.codecogs.com/svg.image?&space;y=f(x)=e^{-2.5x})
    
  ![eaquation](https://latex.codecogs.com/svg.image?&space;\frac{dy}{dx}=-2.5y)  
  設定dx=0.2,0.05,0.005，畫出不同dx所計算出數值解與其解析解，並儲存為midp_c.png。
  
  
