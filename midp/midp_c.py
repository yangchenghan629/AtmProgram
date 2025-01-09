import numpy as np
import matplotlib.pyplot as plt

def dydx(y):
	dydx=-2.5*y
	return dydx
def y_func(x):
	y=np.exp(-2.5*x)
	return y

## dx=0.2
x02=np.arange(0,1.1,0.2) 
y02=np.zeros(6)
y02[0]=1
for i in range(1,6):
	y02[i]=(y02[i-1]+dydx(y02[i-1])*0.2) #y_n=y_n-1+dydx*dx

## dx=0.05
x005=np.arange(0,1.01,0.05) 
y005=np.zeros(21)
y005[0]=1
for i in range(1,21):
	y005[i]=(y005[i-1]+dydx(y005[i-1])*0.05)

## dx=0.005
x0005=np.arange(0,1.001,0.005) 
y0005=np.zeros(201)
y0005[0]=1
for i in range(1,201):
	y0005[i]=(y0005[i-1]+dydx(y0005[i-1])*0.005)


## analytic solution
x=np.linspace(0,1,20)
y=np.zeros(20)
for i in range(20):
	y[i]=y_func(x[i])

# plot
plt.subplots(figsize=[5,5])
plt.plot(x02,y02,'r-')
plt.plot(x005,y005,'g-')
plt.plot(x0005,y0005,'b-')
plt.plot(x,y,'k-')
plt.legend(['dx = 0.2','dx = 0.05','dx = 0.005','analytic solution'],fontsize=14)
plt.xticks(np.arange(0.0,1.1,0.2),fontsize=14)
plt.yticks(np.arange(0.0,1.1,0.2),fontsize=14)
plt.xlabel('x',fontsize=14)
plt.ylabel('y',fontsize=14)
plt.xlim([0.0,1.0])
plt.ylim([0.0,1.0])
plt.savefig('midp_c.png',bbox_inches='tight',dpi=300)
