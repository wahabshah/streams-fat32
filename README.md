

RAMDISK

RAMFS
----------------
sudo mkdir -p /mnt/ramdisk_ramfs
sudo mount -t ramfs -o size=50m fat32 /mnt/ramdisk_ramfs
// Copy files
sudo mount -o remount,ro /mnt/ramdisk_ramfs

TMPFS
--------------

sudo mkdir -p /mnt/ramdisk_tempfs
sudo mount -t tmpfs -o size=50m fat32 /mnt/ramdisk_tempfs
findmnt /mnt/ramdisk_tempfs

TARGET              SOURCE FSTYPE OPTIONS
/mnt/ramdisk_tempfs fat32  tmpfs  rw,relatime,size=51200k

//Copy files
sudo touch /mnt/ramdisk_tempfs/file.txt
sudo mount -o remount,ro /mnt/ramdisk_tempfs
findmnt /mnt/ramdisk_tempfs
df -h /mnt/ramdisk_tempfs
sudo umount /mnt/ramdisk_tempfs


/*
wiesheu@wiesheu-00000053:~$ sudo mount
/dev/sda1 on /mnt/usb type vfat (rw,nosuid,nodev,noexec,noatime,gid=100,fmask=0000,dmask=0000,allow_utime=0022,codepage=437,iocharset=utf8,shortname=mixed,utf8,flush,errors=remount-ro)

wiesheu@wiesheu-00000053:~$ cp /mnt/usb/Display_Cleaning.png  .
cp: Fehler beim Lesen von '/mnt/usb/Display_Cleaning.png': Eingabe-/Ausgabefehler

wiesheu@wiesheu-00000053:~$ sudo mount
/dev/sda1 on /mnt/usb type vfat (ro,nosuid,nodev,noexec,noatime,gid=100,fmask=0000,dmask=0000,allow_utime=0022,codepage=437,iocharset=utf8,shortname=mixed,utf8,flush,errors=remount-ro)

wiesheu@wiesheu-00000053:~$ sudo dmesg
[696423.497491] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.505684] FAT-fs (sda1): Filesystem has been set read-only
[696423.511539] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.519742] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.527865] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.535993] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.544128] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.552299] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.560463] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.568590] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)
[696423.576697] FAT-fs (sda1): error, fat_get_cluster: invalid cluster chain (i_pos 235092)


wiesheu@wiesheu-00000053:~$ sudo apt-get install dosfstools


wiesheu@wiesheu-00000053:~$ sudo dosfsck -t -a -w /dev/sda1
fsck.fat 4.1 (2017-01-24)
0x41: Dirty bit is set. Fs was not properly unmounted and some data may be corrupt.
 Automatically removing dirty bit.
FATs differ but appear to be intact. Using first FAT.
/kornfeld.png
  Contains a free cluster (136712). Assuming EOF.
/kornfeld.png
  File size is 475319 bytes, cluster chain length is 196608 bytes.
  Truncating file to 196608 bytes.
/WH_24BIN.png
  Contains a free cluster (136714). Assuming EOF.
/WH_24BIN.png
  File size is 242897 bytes, cluster chain length is 196608 bytes.
  Truncating file to 196608 bytes.
/universum.png
  Contains a free cluster (136719). Assuming EOF.
/universum.png
  File size is 340010 bytes, cluster chain length is 196608 bytes.
  Truncating file to 196608 bytes.
/Leberka.png
  Contains a free cluster (136725). Assuming EOF.
/Leberka.png
  File size is 208917 bytes, cluster chain length is 196608 bytes.
  Truncating file to 196608 bytes.
/HB-Brotchen.png
  Contains a free cluster (136721). Assuming EOF.
/HB-Brotchen.png
  File size is 215977 bytes, cluster chain length is 196608 bytes.
  Truncating file to 196608 bytes.
/Display_Cleaning.png
  Contains a free cluster (136709). Assuming EOF.
/Display_Cleaning.png
  File size is 175552 bytes, cluster chain length is 131072 bytes.
  Truncating file to 131072 bytes.
/Laugebrotchen.png
  Contains a free cluster (136706). Assuming EOF.
/Laugebrotchen.png
  File size is 174140 bytes, cluster chain length is 163840 bytes.
  Truncating file to 163840 bytes.
/Uberbacken.png
  Contains a free cluster (136704). Assuming EOF.
/Uberbacken.png
  File size is 193747 bytes, cluster chain length is 147456 bytes.
  Truncating file to 147456 bytes.
/user4.png
  Contains a free cluster (136705). Assuming EOF.
/user4.png
  File size is 135022 bytes, cluster chain length is 131072 bytes.
  Truncating file to 131072 bytes.


*/

/*
readableSteam.pipe(writeableStream, { end: true });
wahab@deb123:/tmp/streamTest$ sudo mount -o remount,ro /mnt/ramdisk_tempfs
wahab@deb123:/tmp/streamTest$ lsof -p $(pgrep -i node | tail -1) | grep data.txt
node    644 wahab   22r      REG                8,1        2  5775854 /tmp/streamTest/data.txt

writeableStream : Error: EROFS: read-only file system, open '/mnt/ramdisk_tempfs/data.txt'
*/

/*
readableSteam.pipe(writeableStream, { end: false });
wahab@deb123:/tmp/streamTest$ sudo mount -o remount,rw /mnt/ramdisk_tempfs
wahab@deb123:/tmp/streamTest$ lsof -p $(pgrep -i node | tail -1) | grep data.txt
node    32351 wahab   23w      REG               0,58        2 12700936 /mnt/ramdisk_tempfs/data.txt

readableStream : end
readableStream : close
*/


https://www-numi.fnal.gov/offline_software/srt_public_context/WebDocs/Errors/unix_system_errors.html

https://www.jamescoyle.net/how-to/943-create-a-ram-disk-in-linux