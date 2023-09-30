Microsoft Windows [version 10.0.22621.2283]
(c) Microsoft Corporation. Tous droits réservés.

C:\Users\BBEES>docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                    NAMES
98eee4e641e5   redis:4.0   "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   0.0.0.0:6001->6379/tcp   redis-old
e9b08e399c6b   redis       "docker-entrypoint.s…"   8 minutes ago   Up 7 minutes   0.0.0.0:6000->6379/tcp   redis-latest

C:\Users\BBEES>docker exec -it e9b08e399c6b /bin/bash
root@e9b08e399c6b:/data# ls
root@e9b08e399c6b:/data# cd /
root@e9b08e399c6b:/# ls
bin  boot  data  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@e9b08e399c6b:/# env
HOSTNAME=e9b08e399c6b
REDIS_DOWNLOAD_SHA=5c76d990a1b1c5f949bcd1eed90d0c8a4f70369bdbdcb40288c561ddf88967a4
PWD=/
HOME=/root
REDIS_VERSION=7.2.1
GOSU_VERSION=1.16
TERM=xterm
REDIS_DOWNLOAD_URL=http://download.redis.io/releases/redis-7.2.1.tar.gz
SHLVL=1
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
_=/usr/bin/env
OLDPWD=/data
root@e9b08e399c6b:/# exit
exit

C:\Users\BBEES>
