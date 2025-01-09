# 113-1 midterm exam for GrADS
In this exam,there are 5 questions,a,b,c,d and e.  
所需資料檔包含sounding_20201123.dat與其描述檔sounding_20201123.ctl,PREC_5km.nc,TCCIPtemp.dat與其描述檔TCCIPtemp.ctl  
- a.  
  讀取sounding_20201123.dat資料  
  - 1.在左上畫出溫度與露點溫度垂直結構
    - 利用set vpage 0 5.5 4.25 8.5設定在左上
    - 利用set parea 1 10 1 7.5設定邊框
    - 關閉grads圖標
    - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
    - 氣壓層從1025-300
    - 設定溫度線條粗細為8、露點溫度線條粗細為5
    - 設定為無標示點
  - 2.在右上畫出相對濕度垂直結構  
    - 利用set vpage 5.5 11 4.25 8.5設定在右上
    - 利用set parea 1 10 1 7.5設定邊框
    - 關閉grads圖標
    - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
    - 氣壓層從1025-300
    - 設定線條粗細為4
    - 設定為無標示點  
  - 3.在左下畫出風速垂直結構
    - 利用set vpage 0 5.5 0 4.25設定在左下
    - 利用set parea 1 10 1 7.5設定邊框
    - 關閉grads圖標
    - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
    - 氣壓層從1025-300
    - 設定線條粗細為5  
  - 4.在右下以vector置中畫出各高度風向
    - 利用set vpage 5.5 11 0 4.25設定在右下
    - 利用set parea 1 10 1 7.5設定邊框
    - 關閉grads圖標
    - 利用set frame off關閉顯示座標格線
    - 利用set xlab off關閉顯示橫軸刻度
    - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
    - 氣壓層從1025-300
    - 利用set t 0 2將圖置中
  - 5.儲存結果為midg_a.png且長1100、寬850、底色白色
- b.  
  讀取PREC_5km.nc資料(1天1筆)，畫出2014年5月臺灣(120E-122E,21.9N-25.3N)累積降雨
  - 利用set mdpset hires關閉海岸線
  - 利用set parea 1 10 1 7.5設定邊框
  - 關閉grads圖標
  - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
  - 設定等值線數值為50 100 150 200 300 400 500 600 700 800 900 1000
  - 利用色塊等值線畫出累積雨量(要有colorbar)
  - 將圖儲存為midg_b.png，且長1100、寬850、底色白色  
- c.  
  讀取PREC_5km.nc  
  - 計算2014年5月降水量大於50mm累積天數，並將結果寫出成二進位檔midg_c.dat  
  - 寫出midg_c.dat描述檔midg_c.ctl
- d.
  
- e.
