import numpy as np

T=np.loadtxt('data.txt',skiprows=1,usecols=0,delimiter=',') #read temperatures in data.txt
e=np.loadtxt('data.txt',skiprows=1,usecols=1) #read vapor pressures in data.txt

f=open('midp_a.txt','w')

def es(T):
	es=(2.5e9)*np.exp(-5420/T)
	return es
def RH(e,es):
	return e/es
def VPD(es,e):
	return es-e

for i in range(len(T)):
	T2=T[i]+273.15 #convert to K
	e2=e[i]
	es2=es(T2)
	rh=RH(e2,es2)
	vpd=VPD(es2,e2)
	if rh<1 or vpd>0:
		result=f'T= {round(T2-273.15,1):4.1f}oC & e={round(e2,1):4.1f}hPa: RH={round(rh,3):.3f} & VPD={round(vpd,1):.1f}hPa\n'
		f.write(result)
	else:
		result=f'T= {round(T2-273.15,1):4.1f}oC & e={round(e2,1):4.1f}hPa: Supersaturation\n'
		f.write(result)

f.close()
