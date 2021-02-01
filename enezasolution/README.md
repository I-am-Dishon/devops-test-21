This is a solution to https://github.com/EnezaEducation/devops-test-21

It uses ansible to provision for one server with nodejs app and nginx
Create access key ID and secret Access Key from AWS
For security purposes it is advisable to install awscli and store the credentials instead of storing 
in the plabook.
```
pip3 install awscli --user
aws configure

install boto3 module since it is required by ec2 module 

```
python

pip3 install boto boto3 --user
To run use 

To start an instance
```
ansible-playbook ec2_instance.yml --connection=local  --tags=start 


To stop an instance
```
ansible-playbook ec2_instance.yml  --tags=stop
