Microsoft Windows [version 10.0.22621.2283]
(c) Microsoft Corporation. Tous droits réservés.

C:\Users\BBEES>docker run -d -p6001:6379 --name redis-old redis:4.0
98eee4e641e59259d623a1fa6a188af0834e73f030d4e08e0ec3ca0d9ad4002b

C:\Users\BBEES>docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                    NAMES
98eee4e641e5   redis:4.0   "docker-entrypoint.s…"   9 seconds ago   Up 9 seconds   0.0.0.0:6001->6379/tcp   redis-old
e9b08e399c6b   redis       "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   0.0.0.0:6000->6379/tcp   redis-latest
C:\Users\BBEES>docker logs 98eee4e641e5
1:C 29 Sep 17:00:39.878 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 29 Sep 17:00:39.879 # Redis version=4.0.14, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 29 Sep 17:00:39.879 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 29 Sep 17:00:39.880 * Running mode=standalone, port=6379.
1:M 29 Sep 17:00:39.881 # Server initialized
1:M 29 Sep 17:00:39.881 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
1:M 29 Sep 17:00:39.881 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 29 Sep 17:00:39.881 * Ready to accept connections

C:\Users\BBEES>docker logs redis-older
1:C 29 Sep 16:55:26.107 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 29 Sep 16:55:26.108 # Redis version=4.0.14, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 29 Sep 16:55:26.108 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 29 Sep 16:55:26.109 * Running mode=standalone, port=6379.
1:M 29 Sep 16:55:26.109 # Server initialized
1:M 29 Sep 16:55:26.109 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
1:M 29 Sep 16:55:26.109 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
1:M 29 Sep 16:55:26.109 * Ready to accept connections
1:signal-handler (1696006585) Received SIGTERM scheduling shutdown...
1:M 29 Sep 16:56:25.867 # User requested shutdown...
1:M 29 Sep 16:56:25.867 * Saving the final RDB snapshot before exiting.
1:M 29 Sep 16:56:25.872 * DB saved on disk
1:M 29 Sep 16:56:25.872 # Redis is now ready to exit, bye bye...

C:\Users\BBEES>docker ps -a
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS                      PORTS                    NAMES
98eee4e641e5   redis:4.0     "docker-entrypoint.s…"   2 minutes ago    Up 2 minutes                0.0.0.0:6001->6379/tcp   redis-old
e9b08e399c6b   redis         "docker-entrypoint.s…"   5 minutes ago    Up 5 minutes                0.0.0.0:6000->6379/tcp   redis-latest
a2eabdeba18d   redis:4.0     "docker-entrypoint.s…"   7 minutes ago    Exited (0) 6 minutes ago                             redis-older
d78385bcc522   redis:4.0     "docker-entrypoint.s…"   23 minutes ago   Exited (0) 12 minutes ago                            magical_pare
9e7e67b55f0e   redis         "docker-entrypoint.s…"   28 minutes ago   Exited (0) 12 minutes ago                            friendly_darwin
c492daa1be2e   redis         "docker-entrypoint.s…"   29 minutes ago   Exited (0) 29 minutes ago                            serene_banzai
b81f350df10a   redis         "docker-entrypoint.s…"   31 minutes ago   Exited (0) 29 minutes ago                            stupefied_boyd
fb43c91b28c0   redis:4.0     "docker-entrypoint.s…"   43 minutes ago   Exited (0) 38 minutes ago                            beautiful_hoover
3e0282400da7   redis         "docker-entrypoint.s…"   49 minutes ago   Exited (0) 37 minutes ago                            sweet_sanderson
3eb0b1efc222   hello-world   "/hello"                 59 minutes ago   Exited (0) 59 minutes ago                            cool_brown
