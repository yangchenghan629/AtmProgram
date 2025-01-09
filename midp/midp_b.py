import numpy as np
from matplotlib import pyplot as plt,colors,cm

file=open('midp_b.txt','w')

#read precipitation and evaporation (without years and months)
pre=np.loadtxt('46749_Precipitation.txt',encoding='utf-16',skiprows=1,usecols=(1,2,3,4,5,6,7,8,9,10,11,12))
eva=np.loadtxt('46749_Evaporation.txt',encoding='utf-16',skiprows=1,usecols=(1,2,3,4,5,6,7,8,9,10,11,12))

m=np.arange(1,13,1) #months list
y=np.arange(1990,2024,1) #years list
mm,yy=np.meshgrid(m,y)

net=np.zeros((len(y),len(m)))

#compute every net precipitation
for i in range(len(y)):
	for j in range(len(m)):
		net[i][j]=pre[i][j]-eva[i][j]

maxid=[0,0]
maxid[0],maxid[1]=np.argmax(net)//len(m),np.argmax(net)%len(m) #find location of max net precipitation with [yth/mth-1] from 1990/01

##write down all of net precipitation and show when is  precipitation max.
file.write(f'#Taichung Net Precipitation [mm] (max: {1990+maxid[0]}/{1+maxid[1]})\n')
for i in range(len(y)):
	for j in range(len(m)):
		result=f'{round(net[i][j],1):6.1f} '
		file.write(result)
	file.write('\n')

##plot and write when is precipitation max in title
plt.subplots(figsize=[8,5])
cmap=cm.BrBG
norm=colors.BoundaryNorm(np.arange(-900,901,150),cmap.N)
c=plt.pcolormesh(mm,yy,net,cmap=cmap,shading='nearest',norm=norm)
plt.colorbar(c,orientation='vertical').ax.tick_params(labelsize=14)
plt.xticks(np.arange(1,13,1),['J','F','M','A','M','J','J','A','S','O','N','D'],fontsize=14)
plt.yticks(np.arange(1990,2021,5),fontsize=14)
plt.title(f'Taichung Net Precipitation [mm] (max:{1990+maxid[0]}/{maxid[1]+1})',fontsize=14)
plt.ylabel('Year',fontsize=14)
plt.savefig('midp_b.png',bbox_inches='tight',dpi=300)

file.close()
