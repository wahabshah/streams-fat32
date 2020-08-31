# Generate BCP with Different Data sizes and names

```sh
rm -rf var *.tar.gz *.bcp 
mkdir -p var/files
node -e "process.stdout.write(crypto.randomBytes(3e8))" > var/files/T287MB.WAV
node -e "process.stdout.write(crypto.randomBytes(5))" > var/files/TEST.WAV
node -e "process.stdout.write(crypto.randomBytes(6))" > var/files/Test.WAV
node -e "process.stdout.write(crypto.randomBytes(7))" > var/files/TEst.WAV
node -e "process.stdout.write(crypto.randomBytes(8))" > var/files/TestCo~1.WAV
tar czf TConfig4523.tar.gz var
mv TConfig4523.tar.gz TConfig4523.bcp
tar -tvf TConfig4523.bcp
```

```sh
drwxr-xr-x wahab/wahab       0 2020-08-28 10:03 var/
drwxr-xr-x wahab/wahab       0 2020-08-28 10:03 var/files/
-rw-r--r-- wahab/wahab       6 2020-08-28 10:03 var/files/Test.WAV
-rw-r--r-- wahab/wahab       8 2020-08-28 10:03 var/files/TestCo~1.WAV
-rw-r--r-- wahab/wahab       5 2020-08-28 10:03 var/files/TEST.WAV
-rw-r--r-- wahab/wahab 300000000 2020-08-28 10:03 var/files/T287MB.WAV
-rw-r--r-- wahab/wahab         7 2020-08-28 10:03 var/files/TEst.WAV
```
