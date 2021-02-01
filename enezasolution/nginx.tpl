server{
  listen 80 localhost;
  listen [::]:80 localhost;
  server_name {{ inventory_hostname }};
}

