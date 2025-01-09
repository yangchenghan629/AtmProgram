# 113-1 midterm exam 2 for GrADS
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
    - 設定為無符號樣式
  - 2.在右上畫出相對濕度垂直結構  
    - 利用set vpage 5.5 11 4.25 8.5設定在右上
    - 利用set parea 1 10 1 7.5設定邊框
    - 關閉grads圖標
    - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
    - 氣壓層從1025-300
    - 設定線條粗細為4
    - 設定為無符號樣式  
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
  讀取PREC_5km.nc資料(1天1筆)，畫出2014年5月臺灣(21.9N-25.3N,120E-122E)月累積降雨
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
  讀取midg_c.dat資料
  - 利用set parea 1 10 1 7.5設定邊框
  - 利用set mpdset hires關閉顯示海岸線
  - 關閉grads圖標
  - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
  - 設定等值線數值為1 2 3 4 5 6
  - 利用色塊等值線畫出臺灣(21.9N-25.3N,120E-122E)日降雨量大於50mm的累積天數(要有colorbar)
  - 儲存圖片為midg_d.png，且長1100、寬850、底色白色
  >*title少空格*
- e.  
  讀取TCCIPtemp.dat資料
  - 1.在上圖畫出阿里山(23.51N,120.81E)氣溫距平與其前後各18筆的滑動平均
    - 利用set vpage 0 11 4.25 8.5設定在上圖
    - 利用set parea 1 10 0.5 3.75設定邊框
    - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
    - 關閉grads圖標
    - 將距平值線條粗細設為10、顏色為中藍色，滑動平均線條粗細為10、顏色為深黃色，二者皆設無符號樣式 
  - 2.在下圖畫出一年間氣候循環值
    - 利用set vpage 0 11 0 4.25設在下圖
    - 利用set parea 1 10 0.5 3.75設定邊框
    - 關閉grads圖標
    - 利用set xlopts 1 3 0.15與set ylopts 1 3 0.15設定座標軸刻度與標籤字體樣式
    - 利用set tlsupp year只顯示月份
    - 將線條粗細設為12、顏色為深紫色、無符號樣式
  - 3.儲存圖片為mig_e.png，且長1100、寬850、底色白色
  >*下圖title錯字(~~Alisan~~Alishan)*
