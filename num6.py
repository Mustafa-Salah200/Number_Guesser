
from string import ascii_letters,digits,punctuation
from itertools import product

for passcode in product(digits,repeat=7):
 print("096"+"".join(passcode))
 print("090"+"".join(passcode))
 print("091"+"".join(passcode))
 print("011"+"".join(passcode))
 print("099"+"".join(passcode))
 print("092"+"".join(passcode))
