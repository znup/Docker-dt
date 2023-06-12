docker container run \
-dp 3306:3306 \
--name world-db \
-e MARIADB_USER=example-user \
-e MARIADB_PASSWORD=user-password \
-e MARIADB_ROOT_PASSWORD=root-secret-password \
-e MARIADB_DATABASE=world-db \
--volume world-db:/var/lib/mysql \
mariadb:jammy
