bind ports: 

{

Microsoft Windows [version 10.0.22621.2283]
(c) Microsoft Corporation. Tous droits réservés.

C:\Users\BBEES>docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

C:\Users\BBEES>docker run -p6000:6379 redis
1:C 29 Sep 2023 16:34:31.979 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
1:C 29 Sep 2023 16:34:31.979 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 29 Sep 2023 16:34:31.979 * Redis version=7.2.1, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 29 Sep 2023 16:34:31.979 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1:M 29 Sep 2023 16:34:31.979 * monotonic clock: POSIX clock_gettime
1:M 29 Sep 2023 16:34:31.980 * Running mode=standalone, port=6379.
1:M 29 Sep 2023 16:34:31.980 * Server initialized
1:M 29 Sep 2023 16:34:31.980 * Ready to accept connections tcp

}

{

Microsoft Windows [version 10.0.22621.2283]
(c) Microsoft Corporation. Tous droits réservés.

C:\Users\BBEES>docker p -a
unknown shorthand flag: 'a' in -a
See 'docker --help'.

Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Log in to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx (Docker Inc., v0.11.2-desktop.5)
  compose*    Docker Compose (Docker Inc., v2.22.0-desktop.2)
  container   Manage containers
  context     Manage contexts
  dev*        Docker Dev Environments (Docker Inc., v0.1.0)
  extension*  Manages Docker extensions (Docker Inc., v0.2.20)
  image       Manage images
  init*       Creates Docker-related starter files for your project (Docker Inc., v0.1.0-beta.8)
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  plugin      Manage plugins
  sbom*       View the packaged-based Software Bill Of Materials (SBOM) for an image (Anchore Inc., 0.6.0)
  scan*       Docker Scan (Docker Inc., v0.26.0)
  scout*      Docker Scout (Docker Inc., v1.0.7)
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Swarm Commands:
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default
                           "C:\\Users\\BBEES\\.docker")
  -c, --context string     Name of the context to use to connect to the
                           daemon (overrides DOCKER_HOST env var and
                           default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info",
                           "warn", "error", "fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default
                           "C:\\Users\\BBEES\\.docker\\ca.pem")
      --tlscert string     Path to TLS certificate file (default
                           "C:\\Users\\BBEES\\.docker\\cert.pem")
      --tlskey string      Path to TLS key file (default
                           "C:\\Users\\BBEES\\.docker\\key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/


C:\Users\BBEES>docker ps -a
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS                          PORTS                    NAMES
9e7e67b55f0e   redis         "docker-entrypoint.s…"   42 seconds ago   Up 41 seconds                   0.0.0.0:6000->6379/tcp   friendly_darwin
c492daa1be2e   redis         "docker-entrypoint.s…"   2 minutes ago    Exited (0) About a minute ago                            serene_banzai
b81f350df10a   redis         "docker-entrypoint.s…"   4 minutes ago    Exited (0) About a minute ago                            stupefied_boyd
fb43c91b28c0   redis:4.0     "docker-entrypoint.s…"   16 minutes ago   Exited (0) 10 minutes ago                                beautiful_hoover
3e0282400da7   redis         "docker-entrypoint.s…"   21 minutes ago   Exited (0) 9 minutes ago                                 sweet_sanderson
3eb0b1efc222   hello-world   "/hello"                 31 minutes ago   Exited (0) 31 minutes ago                                cool_brown

C:\Users\BBEES>
}
