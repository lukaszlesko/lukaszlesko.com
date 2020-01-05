include .env
export

deploy: build deploy_to_s3
	@echo "deploy finished with success"

build:
	npm run build

deploy_to_s3:
	npm run deploy -y

development:
	npm run start

cert:
	certbot certonly --manual --preferred-challenges=dns --email $CERT_EMAIL --agree-tos --config-dir ./config --logs-dir ./logs --work-dir ./workdir -d "*.lukaszlesko.com"

aws_upload_cert:
	aws iam upload-server-certificate --server-certificate-name $CERT_NAME --certificate-chain file://chain.pem --certificate-body file://cert.pem --private-key file://privkey.pem


